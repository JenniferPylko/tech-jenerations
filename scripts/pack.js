import { readdir, readFile, writeFile } from "node:fs/promises"
import process from "node:process"
import { Zip } from "zip-lib"

const manifest = JSON.parse(await readFile("modrinth.index.json", { encoding: "utf-8" }))
manifest.versionId = manifest.versionId.replace(/[0-9]*$/, process.env.GITHUB_RUN_NUMBER ?? "0")
await writeFile("modrinth.index.json", JSON.stringify(manifest, null, 2))

const bcc = await readFile("config/bcc-common.toml", { encoding: "utf-8" })
await writeFile("config/bcc-common.toml", bcc.replace(/modpackVersion = "\d*\.\d*\.\d*"/g, `modpackVersion = "${manifest.versionId}"`))

await writeFile("version", manifest.versionId)

const modpack = new Zip()

modpack.addFile("modrinth.index.json")
modpack.addFolder("config", "overrides/config")
modpack.addFolder("kubejs", "overrides/kubejs")

modpack.archive("Tech Jenerations.mrpack")