import { Zip } from "zip-lib"

const modpack = new Zip()

modpack.addFile("modrinth.index.json")
modpack.addFolder("config", "overrides/config")
modpack.addFolder("kubejs", "overrides/kubejs")

modpack.archive("Tech Jenerations.mrpack")