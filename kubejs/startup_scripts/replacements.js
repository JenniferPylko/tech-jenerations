const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
//const $ReplacerConfig = Java.loadClass("com.redcraft86.blockreplacer.ModConfig")

const replacement_rules = {
    "BLOCK": [{
        originals: [],
        replacement: "survivalistessentials:stone_loose_rock"
    }],

    "FLUID": [{
        originals: [
            "charcoal_pit:biodiesel",
            "createdieselgenerators:biodiesel"
        ],
        replacement: "modern_industrialization:biodiesel"
    }, {
        originals: [
            "createaddition:bioethanol",
            "createdieselgenerators:ethanol",
            "charcoal_pit:ethanol",
            "northstar:biofuel",
            "createchemistry:ethanol",
            "modern_industrialization:ethanol"
        ],
        replacement: "electrodynamics:fluidethanol"
    }, {
        originals: ["nuclearscience:methanol"],
        replacement: "chemicalscience:methanol"
    }],
    "ITEM": []
}

StartupEvents.init(() => {
    for (const registry of Object.keys(replacement_rules)) {
        for (const rule of replacement_rules[registry]) {
            if (registry === "BLOCK") {
                //$ReplacerConfig.get().replaceBlocks.put(rule.replacement, rule.originals)
            }
            for (const original of rule.originals) {
                console.log(`Replacing ${registry} ${original} with ${rule.replacement}`)
                $BuiltInRegistries[registry].addAlias(original, rule.replacement)
            }
        }
    }
})

global.replacement_rules = replacement_rules