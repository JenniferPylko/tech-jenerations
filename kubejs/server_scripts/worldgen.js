const $HolderSet$Direct = Java.loadClass("net.minecraft.core.HolderSet$Direct")
const $Holder$Direct = Java.loadClass("net.minecraft.core.Holder$Direct")

const get_or_direct = (registry, key_or_object) => {
    if (typeof key_or_object === "string") {
        return registry.get(key_or_object)
    }
    return key_or_object
}

const inject_features = (biome, features, after) => {
    console.log("if the next line is a missing registry error you can ignore it")
    const biome_registry = Registry.of("minecraft:worldgen/biome")
    const feature_registry = Registry.of("minecraft:worldgen/placed_feature")
    const generation_settings = biome_registry.get(biome).getGenerationSettings()
    const feature_sets = []
    generation_settings.features().listIterator().forEachRemaining((v) => feature_sets.push(v))
    const mapped_features = features.map((feature) => $Holder$Direct.direct(get_or_direct(feature_registry, feature)))
    const patched_list = Utils.newList()
    let $temp_set
    let stage = 0
    for (const feature_set of feature_sets) {
        $temp_set = Utils.newList()
        feature_set.iterator().forEachRemaining((v) => {
            $temp_set.add(v)
            if (typeof after !== "undefined" && v.is(after)) {
                for (const feature of mapped_features) {
                    $temp_set.add(feature)
                }
            }
        })
        if (typeof after === "undefined" || (typeof after === "number" && after === stage)) {
            for (const feature of mapped_features) {
                $temp_set.add(feature)
            }
        }
        patched_list.add(Java.cast($HolderSet$Direct, $HolderSet$Direct["direct(java.util.List)"]($temp_set)))
        ++stage
    }
    generation_settings.wover_setFeatures(patched_list)
}

const terracotta_map = [
    "black",
    "orange",
    "yellow",
    "white",
    "magenta",
    "light_blue",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red"
]

ServerEvents.generateData("after_mods", ($) => {
    $.json("kubejs:worldgen/configured_feature/limestone", {
        type: "minecraft:netherrack_replace_blobs",
        config: {
            state: {Name: "create:limestone"},
            target: {Name: "minecraft:stone"},
            radius: 12
        }
    })
    $.json("kubejs:worldgen/configured_feature/terracotta_replacer", {
        type: "minecraft:simple_random_selector",
        config: {features: terracotta_map.map((color) => ({
                "feature": {
                    "type": "minecraft:netherrack_replace_blobs",
                    "config": {
                        "state": {
                            "Name": `natures_spirit:${color}_kaolin`
                        },
                        "target": {
                            "Name": `minecraft:${color}_terracotta`
                        },
                        "radius": {
                            "type": "minecraft:uniform",
                            "min_inclusive": 0,
                            "max_inclusive": 12
                        }
                    }
                },
                "placement": []
            })).concat({
                "feature": {
                    "type": "minecraft:netherrack_replace_blobs",
                    "config": {
                        "state": {
                            "Name": `natures_spirit:kaolin`
                        },
                        "target": {
                            "Name": `minecraft:terracotta`
                        },
                        "radius": {
                            "type": "minecraft:uniform",
                            "min_inclusive": 0,
                            "max_inclusive": 12
                        }
                    }
                },
                "placement": []
            })}
    })
    $.json("kubejs:worldgen/placed_feature/terracotta_replacer", {
        "feature": "kubejs:terracotta_replacer",
        "placement": [
            {
                "type": "minecraft:count",
                "count": 27
            },
            {
                "type": "minecraft:count",
                "count": 74
            },
            {
                "type": "minecraft:in_square"
            },
            {
                "type": "minecraft:heightmap",
                "heightmap": "WORLD_SURFACE_WG"
            }
	]})
    inject_features("minecraft:savanna", ["kubejs:terracotta_replacer"], "terralith:savanna/dripstone")
    inject_features("minecraft:savanna_plateau", ["kubejs:terracotta_replacer"], "terralith:savanna/badlands/grass_reg")
    inject_features("terralith:savanna_badlands", ["kubejs:terracotta_replacer"], "terralith:savanna/terracotta")
    inject_features("terralith:white_mesa", ["kubejs:terracotta_replacer"], "terralith:savanna/terracotta")
    inject_features("terralith:hot_shrubland", ["kubejs:terracotta_replacer"], "terralith:shrubland/disk_terracotta")
    inject_features("terralith:bryce_canyon", ["kubejs:terracotta_replacer"], 6)
    inject_features("biomeswevegone:sierra_badlands", ["kubejs:terracotta_replacer"], "biomeswevegone:orange_terracotta_boulder")

    inject_features("terralith:arid_highlands", ["kubejs:limestone"], "terralith:highlands/arid/cliff")
})