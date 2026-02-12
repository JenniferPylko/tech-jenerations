import { readdir, readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { URL } from "node:url"
import * as Path from "node:path"
import fetch from "node-fetch"

const content_dirs = [
    ["./mods", ".jar"],
    ["./datapacks", ".zip"],
    ["./resourcepacks", ".zip"]
]

const base_index = {
    game: "minecraft",
    formatVersion: 1,
    versionId: "0.0.0",
    name: "Tech Jenerations",
    summary: "",
    files: [],
    dependencies: {
        neoforge: "21.1.219",
        minecraft: "1.21.1"
    }
}

const loader_folders = {
    neoforge: "mods",
    fabric: "mods",
    minecraft: "resourcepacks",
    datapack: "datapacks"
}

const hashed_files = {}

for (const [dir, extension] of content_dirs) {
    const files = await readdir(dir)
    const content_files = files.filter((filename) => filename.endsWith(extension))
    for (const file of content_files) {
        const buffer = await readFile(Path.join(dir, file))
        const hash = createHash("sha512")
        hash.update(buffer)
        hashed_files[hash.digest("hex")] = file
    }
}

const hashes = Object.keys(hashed_files)

const version_response = await fetch("https://api.modrinth.com/v2/version_files", {
    method: "POST",
    body: JSON.stringify({
        hashes,
        algorithm: "sha512"
    }),
    headers: {"content-type": "application/json"}
})
const version_info = await version_response.json()
const project_ids = Object.values(version_info).map((info) => info.project_id)
const projects_url = new URL("https://api.modrinth.com/v2/projects")
projects_url.searchParams.append("ids", JSON.stringify(project_ids))
const projects_response = await fetch(projects_url)
const project_info_array = await projects_response.json()
const project_info = Object.fromEntries(project_info_array.map((info) => [info.id, info]))

const index = JSON.parse(JSON.stringify(base_index))

for (const hash of hashes) {
    if (version_info[hash]) {
        const version_file = version_info[hash].files.find((file) => file.primary ?? true)
        const placement_directory = loader_folders[
                                        version_info[hash].loaders.find((loader) => loader === "neoforge")
                                        ?? version_info[hash].loaders.find((loader) => loader === "fabric")
                                        ?? version_info[hash].loaders.find((loader) => loader === "datapack")
                                        ?? version_info[hash].loaders.find((loader) => loader === "minecraft")
                                        ?? "neoforge"
        ]
        index.files.push({
            path: Path.posix.join(placement_directory, version_file.filename),
            hashes: { // explicitly order these so git diffs aren't huge
                sha1: version_file.hashes.sha1,
                sha512: version_file.hashes.sha512
            },
            env: {
                client: "required",
                server: project_info[version_info[hash].project_id].server_side ?? "required"
            },
            downloads: [version_file.url],
            fileSize: version_file.size
        })
    } else {
        console.warn(`The Modrinth API did not find a match for ${hashed_files[hash]}`)
    }
}

writeFile("modrinth.index.json", JSON.stringify(JSON.parse(JSON.stringify(index)), null, 2))