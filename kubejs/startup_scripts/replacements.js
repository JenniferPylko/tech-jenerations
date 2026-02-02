const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

const replacement_rules = {
    "BLOCK": [{
        originals: [
            "distantlandsmc:pabble_2",
            "distantlandsmc:pabble_1",
            "distantlandsmc:pabble"
        ],
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
            for (const original of rule.originals) {
                console.log(`Replacing ${registry} ${original} with ${rule.replacement}`)
                $BuiltInRegistries[registry].addAlias(original, rule.replacement)
            }
        }
    }
})

BlockEvents.modification(($) => {
    for (const rule of replacement_rules.BLOCK) {
        for (const original of rule.originals) {
            $.modify(original, (block) => block.setIsRandomlyTicking(true))
        }
    }
})

global.replacement_rules = replacement_rules