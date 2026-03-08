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

const configured_replace = (target, replacement, radius) => ({
    type: "minecraft:netherrack_replace_blobs",
    config: {
        state: { Name: replacement },
        target: { Name: target },
        radius: radius || 12
    }
})

const placed_fill = (feature_name) => ({
    "feature": feature_name,
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
    ]
})

const placed_stratum = (feature, depth, target) => ({
    "feature": feature,
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
        },
        {
            "type": "minecraft:environment_scan",
            "direction_of_search": "down",
            "max_steps": depth,
            "target_condition": {
                "type": "minecraft:matching_blocks",
                "blocks": target || "minecraft:stone"
            },
            "allowed_search_condition": {
                "type": "minecraft:not",
                "predicate": {
                    "type": "minecraft:matching_blocks",
                    "blocks": target || "minecraft:stone"
                }
            }
        }
    ]
})

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
    $.json("kubejs:worldgen/configured_feature/standing_water", {
        type: "minecraft:spring_feature",
        config: {
            hole_count: 3,
            requires_block_below: true,
            rock_count: 1,
            state: {Name: "minecraft:water"},
            valid_blocks: ["minecraft:grass_block"]
        }

    })
    $.json("kubejs:worldgen/placed_feature/standing_water", placed_fill("kubejs:standing_water"))

    $.json("kubejs:worldgen/configured_feature/limestone_1", configured_replace("minecraft:stone", "create:limestone", 6))
    $.json("kubejs:worldgen/placed_feature/limestone_1", placed_stratum("kubejs:limestone_1", 1))

    $.json("kubejs:worldgen/configured_feature/limestone_6", configured_replace("minecraft:stone", "create:limestone", 6))
    $.json("kubejs:worldgen/placed_feature/limestone_6", placed_stratum("kubejs:limestone_6", 6))

    $.json("kubejs:worldgen/configured_feature/volcanic_rock", configured_replace("minecraft:stone", "northstar:volcanic_rock"))
    $.json("kubejs:worldgen/placed_feature/volcanic_rock", placed_stratum("kubejs:volcanic_rock", 32))

    $.json("kubejs:worldgen/configured_feature/volcanic_ash", configured_replace("minecraft:dirt", "northstar:volcanic_ash"))
    $.json("kubejs:worldgen/placed_feature/volcanic_ash", placed_stratum("kubejs:volcanic_ash", 32))

    $.json("kubejs:worldgen/configured_feature/mossy_black_sand", configured_replace("minecraft:grass_block", "biomesoplenty:mossy_black_sand"))
    $.json("kubejs:worldgen/placed_feature/mossy_black_sand", placed_stratum("kubejs:mossy_black_sand", 12))

    $.json("kubejs:worldgen/configured_feature/kaolin_4", configured_replace("minecraft:stone", "natures_spirit:brown_kaolin", 8))
    $.json("kubejs:worldgen/placed_feature/kaolin_4", placed_stratum("kubejs:kaolin_4", 4))

    $.json("kubejs:worldgen/configured_feature/shale_1", configured_replace("minecraft:stone", "kubejs:shale", 4))
    $.json("kubejs:worldgen/placed_feature/shale_1", placed_stratum("kubejs:shale_1", 1))

    $.json("kubejs:worldgen/configured_feature/shale_2", configured_replace("minecraft:stone", "kubejs:shale", 6))
    $.json("kubejs:worldgen/placed_feature/shale_2", placed_stratum("kubejs:shale_2", 2))

    $.json("kubejs:worldgen/configured_feature/mud", configured_replace("minecraft:dirt", "minecraft:mud", 6))
    $.json("kubejs:worldgen/placed_feature/mud", placed_stratum("kubejs:mud", 8))

    $.json("kubejs:worldgen/configured_feature/slab_to_pebbles", configured_replace("minecraft:stone_slab", "survivalistessentials:rock_stone_block"))
    $.json("kubejs:worldgen/placed_feature/slab_to_pebbles", placed_fill("kubejs:slab_to_pebbles"))

    $.json("kubejs:worldgen/configured_feature/terracotta_replacer", configured_replace("minecraft:terracotta", "natures_spirit:kaolin"))
    $.json("kubejs:worldgen/placed_feature/terracotta_replacer", placed_fill("kubejs:terracotta_replacer"))
    const terracotta_replacer_features = ["kubejs:terracotta_replacer"]
    for (const color of terracotta_map) {
        $.json(`kubejs:worldgen/configured_feature/terracotta_replacer_${color}`, configured_replace(`minecraft:${color}_terracotta`, `natures_spirit:${color}_kaolin`))
        $.json(`kubejs:worldgen/placed_feature/terracotta_replacer_${color}`, placed_fill(`kubejs:terracotta_replacer_${color}`))
        terracotta_replacer_features.push(`kubejs:terracotta_replacer_${color}`)
    }

    const temperate_features = ["kubejs:slab_to_pebbles", "kubejs:shale_1", "kubejs:kaolin_4", "kubejs:limestone_6", "kubejs:shale_2"].concat(terracotta_replacer_features)
    inject_features("minecraft:savanna", terracotta_replacer_features, "terralith:savanna/dripstone")
    inject_features("minecraft:savanna_plateau", terracotta_replacer_features, 8)
    inject_features("minecraft:jungle", terracotta_replacer_features, 6)
    inject_features("terralith:savanna_badlands", terracotta_replacer_features, "terralith:savanna/terracotta")
    inject_features("terralith:white_mesa", terracotta_replacer_features, "terralith:savanna/terracotta")
    inject_features("terralith:hot_shrubland", terracotta_replacer_features, "terralith:shrubland/disk_terracotta")
    inject_features("terralith:bryce_canyon", terracotta_replacer_features, 6)
    inject_features("biomeswevegone:sierra_badlands", terracotta_replacer_features, "biomeswevegone:orange_terracotta_boulder")
    inject_features("biomesoplenty:rocky_rainforest", terracotta_replacer_features, 6)

    inject_features("terralith:arid_highlands", ["kubejs:limestone_1"], "terralith:highlands/arid/cliff")
    inject_features("terralith:hot_shrubland", ["kubejs:limestone_1"], 6)
    inject_features("terralith:shrubland", ["kubejs:limestone_1"], 6)
    inject_features("biomesoplenty:scrubland", ["kubejs:limestone_6"], 6)
    inject_features("biomesoplenty:mediterranean_forest", ["kubejs:limestone_1"], 6)
    inject_features("biomeswevegone:baobab_savanna", ["kubejs:limestone_1"], 6)
    inject_features("terralith:rocky_mountains", ["kubejs:limestone_6"], 6)
    inject_features("environmental:marsh", ["kubejs:standing_water"], 6)
    inject_features("biomesoplenty:volcanic_plains", ["kubejs:volcanic_rock", "kubejs:volcanic_ash", "kubejs:mossy_black_sand"], 6)
    inject_features("biomesoplenty:floodplain", ["kubejs:shale_2", "kubejs:mud"], 6)

    const shale_kaolin_limestone_biomes = [
        "atmospheric:rainforest",
        "atmospheric:rainforest_basin",
        "biomesoplenty:grassland",
        "biomesoplenty:lavender_field",
        "biomesoplenty:orchard",
        "biomesoplenty:overgrown_greens",
        "biomesoplenty:pasture",
        "biomesoplenty:rainforest",
        "biomesoplenty:redwood_forest",
        "biomesoplenty:rocky_shrubland",
        "biomeswevegone:allium_shrubland",
        "biomeswevegone:araucaria_savanna",
        "biomeswevegone:fragment_jungle",
        "biomeswevegone:lush_stacks",
        "biomeswevegone:temperate_grove",
        "environmental:marsh",
        "environmental:pine_slopes",
        "minecraft:bamboo_jungle",
        "minecraft:birch_forest",
        "minecraft:dark_forest",
        "minecraft:forest",
        "minecraft:grove",
        "minecraft:meadow",
        "minecraft:ocean",
        "minecraft:old_growth_birch_forest",
        "minecraft:old_growth_pine_taiga",
        "minecraft:old_growth_spruce_taiga",
        "minecraft:plains",
        "minecraft:snowy_taiga",
        "minecraft:stony_peaks",
        "minecraft:taiga",
        "minecraft:windswept_forest",
        "natures_spirit:cedar_thicket",
        "natures_spirit:oak_savanna",
        "natures_spirit:sparse_tropical_woods",
        "natures_spirit:tropical_woods",
        "regions_unexplored:barley_fields",
        "regions_unexplored:blackwood_taiga",
        "regions_unexplored:deciduous_forest",
        "regions_unexplored:magnolia_woodland",
        "regions_unexplored:mauve_hills",
        "regions_unexplored:pine_taiga",
        "regions_unexplored:prairie",
        "regions_unexplored:redwoods",
        "regions_unexplored:sparse_redwoods",
        "terralith:birch_taiga",
        "terralith:blooming_valley",
        "terralith:forested_highlands",
        "terralith:fractured_savanna",
        "terralith:highlands",
        "terralith:jungle_mountains",
        "terralith:sakura_valley",
        "terralith:steppe",
        "terralith:temperate_highlands"
    ]

    for (const biome of shale_kaolin_limestone_biomes) {
        console.log(biome)
        inject_features(biome, temperate_features, 6)
    }
})