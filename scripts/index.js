import yargs from "yargs"
import { argv } from "node:process"

yargs()
    .scriptName("modpack")
    .usage("$0 <cmd> [args]")
    .command("scan",
        "scan for mods and write metadata",
        () => {}, async () => {
            await import("./scan.js")
    })
    .command("pack",
        "package files into a .mrpack",
        () => {}, async () => {
            await import("./pack.js")
        }
    )
    .help()
    .parse(argv.slice(2))