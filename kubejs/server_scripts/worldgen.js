(() => { // stop polluting my scope!
const $HolderSet$Direct = Java.loadClass("net.minecraft.core.HolderSet$Direct")
const $Holder$Direct = Java.loadClass("net.minecraft.core.Holder$Direct")

const { get_or_direct, open_registry } = global.utils

const inject_features = (biome, features, after) => {
    const biome_registry = open_registry("minecraft:worldgen/biome")
    const feature_registry = open_registry("minecraft:worldgen/placed_feature")
    if (!biome_registry || !feature_registry) {
        return
    }
    console.log(`feature injector loading ${biome}`)
    const biome_loaded = biome_registry.get(biome)
    if (!biome_loaded) {
        console.log(`error loading biome ${biome}`)
        return
    }
    const generation_settings = biome_loaded.getGenerationSettings()
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

const features = {
    in_square: {type: "minecraft:in_square"},
    biome: {type: "minecraft:biome"},
    count: (count) => ({type: "minecraft:count", count: count}),
    heightmap: (heightmap) => ({type: "minecraft:heightmap", heightmap: heightmap}),
    height_range: (min, max) => ({
            "type": "minecraft:height_range",
            "height": {
                type: "minecraft:uniform",
                min_inclusive: {absolute: min ?? -128},
                max_inclusive: {absolute: max ?? 256}
            }
        }),
    rarity: (rarity) => ({type: "minecraft:rarity_filter", chance: rarity})
}

const { biomes } = global

const configured_replace_blobs = (target, repl, radius) => ({
    type: "minecraft:netherrack_replace_blobs",
    config: {
        state: { Name: repl },
        target: { Name: target },
        radius: radius || 12
    }
})

const configured_replace_single = (target, repl) => ({
    type: "minecraft:replace_single_block",
    config: {
        targets: [{
            state: { Name: repl },
            target: {
                predicate_type: "minecraft:block_match",
                block: target
            }
        }]
    }
})

const placed_fill = (feature_name) => ({
    "feature": feature_name || "",
    "placement": [
        features.count(27), features.count(74), features.in_square, features.heightmap("OCEAN_FLOOR_WG")
    ]
})

const placed_stratum = (feature, depth, target) => ({
    "feature": feature,
    "placement": [
        features.count(27), features.count(74), features.in_square, features.heightmap("OCEAN_FLOOR_WG"),
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

const build_feature = ($, id, cfg, placed) => {
    const placed_obj = Array.isArray(placed) ? {placement: placed} : placed
    $.json(`kubejs:worldgen/configured_feature/${id}`, cfg)
    $.json(`kubejs:worldgen/placed_feature/${id}`, Object.assign({}, placed_obj, {feature: `kubejs:${id}`}))
    return `kubejs:${id}`
}

const build_strata = ($, target, repl) => {
    const strata = []
    for (let depth = 1; depth < 32; ++depth) {
        for (let radius = 1; radius < 13; ++radius) {
            strata.push(
                build_feature($, 
                    `stratum_${depth}_${target.split(":").pop()}_${radius}`,
                    configured_replace_blobs(target, repl, radius),
                    placed_stratum("", depth, target)
                )
            )
        }
    }
    return strata
}

const stratum_name = (block, depth, radius) => `kubejs:stratum_${depth}_${block}_${radius}`

ServerEvents.generateData("before_mods", ($) => {
    build_feature($, "molten_echo",
        configured_replace_blobs("minecraft:water", "create_deep_dark:molten_echo"),
        {
            placement: [
                features.count(32), features.in_square,
                {
                    "type": "minecraft:height_range",
                    "height": {
                        "type": "minecraft:uniform",
                        "min_inclusive": {
                        "absolute": -128
                        },
                        "max_inclusive": {
                        "absolute": 0
                        }
                    }
                }, features.biome
            ]
        }
    )

    $.json("kubejs:worldgen/configured_feature/standing_water", {
        type: "minecraft:spring_feature",
        config: {
            hole_count: 3,
            requires_block_below: true,
            rock_count: 1,
            state: { Name: "minecraft:water" },
            valid_blocks: ["minecraft:grass_block"]
        }

    })
    $.json("kubejs:worldgen/placed_feature/standing_water", placed_fill("kubejs:standing_water"))

    $.json("kubejs:worldgen/configured_feature/limestone_1", configured_replace_blobs("minecraft:stone", "create:limestone", 4))
    $.json("kubejs:worldgen/placed_feature/limestone_1", placed_stratum("kubejs:limestone_1", 1))

    $.json("kubejs:worldgen/configured_feature/limestone_6", configured_replace_blobs("minecraft:stone", "create:limestone", 4))
    $.json("kubejs:worldgen/placed_feature/limestone_6", placed_stratum("kubejs:limestone_6", 14))

    $.json("kubejs:worldgen/configured_feature/mystic_stone", configured_replace_blobs("minecraft:stone", "ae2:smooth_quartz_block", 3))
    $.json("kubejs:worldgen/placed_feature/mystic_stone", placed_stratum("kubejs:mystic_stone", 2))

    $.json("kubejs:worldgen/configured_feature/kaolin_4", configured_replace_blobs("minecraft:stone", "natures_spirit:brown_kaolin", 5))
    $.json("kubejs:worldgen/placed_feature/kaolin_4", placed_stratum("kubejs:kaolin_4", 9))

    $.json("kubejs:worldgen/configured_feature/shale_1", configured_replace_blobs("minecraft:stone", "kubejs:shale", 3))
    $.json("kubejs:worldgen/placed_feature/shale_1", placed_stratum("kubejs:shale_1", 1))

    $.json("kubejs:worldgen/configured_feature/shale_2", configured_replace_blobs("minecraft:stone", "kubejs:shale", 4))
    $.json("kubejs:worldgen/placed_feature/shale_2", placed_stratum("kubejs:shale_2", 3))

    $.json("kubejs:worldgen/configured_feature/volcanic_rock", configured_replace_blobs("minecraft:stone", "northstar:volcanic_rock"))
    $.json("kubejs:worldgen/placed_feature/volcanic_rock", placed_stratum("kubejs:volcanic_rock", 16))

    $.json("kubejs:worldgen/configured_feature/volcanic_ash", configured_replace_blobs("minecraft:dirt", "northstar:volcanic_ash"))
    $.json("kubejs:worldgen/placed_feature/volcanic_ash", placed_stratum("kubejs:volcanic_ash", 16))

    $.json("kubejs:worldgen/configured_feature/mossy_black_sand", configured_replace_blobs("minecraft:grass_block", "biomesoplenty:mossy_black_sand"))
    $.json("kubejs:worldgen/placed_feature/mossy_black_sand", placed_stratum("kubejs:mossy_black_sand", 12))

    $.json("kubejs:worldgen/configured_feature/mud", configured_replace_blobs("minecraft:dirt", "minecraft:mud", 6))
    $.json("kubejs:worldgen/placed_feature/mud", placed_fill("kubejs:mud"))

    $.json("kubejs:worldgen/configured_feature/peat", configured_replace_blobs("minecraft:dirt", "regions_unexplored:peat_dirt", 6))
    $.json("kubejs:worldgen/placed_feature/peat", placed_fill("kubejs:peat"))

    $.json("kubejs:worldgen/configured_feature/peat_grass", configured_replace_blobs("minecraft:grass_block", "regions_unexplored:peat_grass_block", 6))
    $.json("kubejs:worldgen/placed_feature/peat_grass", placed_fill("kubejs:peat_grass"))

    $.json("kubejs:worldgen/configured_feature/slab_to_pebbles", configured_replace_blobs("minecraft:stone_slab", "survivalistessentials:rock_stone_block"))
    $.json("kubejs:worldgen/placed_feature/slab_to_pebbles", placed_fill("kubejs:slab_to_pebbles"))

    $.json("kubejs:worldgen/configured_feature/caldera_rock", configured_replace_blobs("minecraft:cobbled_deepslate", "northstar:volcanic_rock", 3))
    $.json("kubejs:worldgen/placed_feature/caldera_rock", placed_fill("kubejs:caldera_rock"))

    $.json("kubejs:worldgen/configured_feature/caldera_basalt", configured_replace_single("minecraft:cobbled_deepslate", "charcoal_pit:basalt", 1))
    $.json("kubejs:worldgen/placed_feature/caldera_basalt", {
        "feature": "kubejs:caldera_basalt",
        "placement": [
            features.count(27),
            features.count(74),
            features.in_square,
            features.heightmap("OCEAN_FLOOR_WG")
        ]
    })

    build_feature($, "yellowstone_sand", configured_replace_blobs("minecraft:red_sand", "biomesoplenty:thermal_calcite"), placed_fill())
    build_feature($, "yellowstone_campfire", configured_replace_blobs("minecraft:campfire", "biomesoplenty:thermal_calcite_vent"), placed_fill())
    $.json("kubejs:worldgen/configured_feature/yellowstone_terracotta", configured_replace_blobs("natures_spirit:yellow_kaolin", "biomesoplenty:thermal_calcite"))
    $.json("kubejs:worldgen/placed_feature/yellowstone_terracotta", placed_fill("kubejs:yellowstone_terracotta"))
    $.json("kubejs:worldgen/configured_feature/yellowstone_magma", configured_replace_blobs("minecraft:magma_block", "biomesoplenty:thermal_calcite_vent"))
    $.json("kubejs:worldgen/placed_feature/yellowstone_magma", placed_fill("kubejs:yellowstone_magma"))

    $.json("kubejs:worldgen/configured_feature/loose_cobblestone", configured_replace_blobs("minecraft:cobblestone", "biomeswevegone:rocky_stone"))
    $.json("kubejs:worldgen/placed_feature/loose_cobblestone", placed_fill("kubejs:loose_cobblestone"))

    build_feature($, "underground_loose_cobblestone",
        configured_replace_blobs("minecraft:cobblestone", "biomeswevegone:rocky_stone"),
            [features.count(48), features.count(48), features.in_square, features.height_range(-127, 60)])

    $.json("kubejs:worldgen/configured_feature/rocky_stone", configured_replace_blobs("minecraft:stone", "biomeswevegone:rocky_stone"))
    $.json("kubejs:worldgen/placed_feature/rocky_stone", placed_fill("kubejs:rocky_stone"))

    $.json("kubejs:worldgen/configured_feature/mojave_sand", configured_replace_blobs("minecraft:sand", "biomesoplenty:orange_sand"))
    $.json("kubejs:worldgen/placed_feature/mojave_sand", placed_fill("kubejs:mojave_sand"))

    $.json("kubejs:worldgen/configured_feature/mojave_cracked_sand", configured_replace_blobs("biomeswevegone:cracked_sand", "atmospheric:red_arid_sand"))
    $.json("kubejs:worldgen/placed_feature/mojave_cracked_sand", placed_fill("kubejs:mojave_cracked_sand"))

    $.json("kubejs:worldgen/configured_feature/mojave_sandstone", configured_replace_blobs("minecraft:sandstone", "biomesoplenty:smooth_orange_sandstone"))
    $.json("kubejs:worldgen/placed_feature/mojave_sandstone", placed_fill("kubejs:mojave_sandstone"))

    build_feature($, "lunar_sapphire_geode", {
        type: "geode",
        config: {
            blocks: {
                filling_provider: {
                    type: "minecraft:simple_state_provider",
                    state: {Name: "minecraft:light"}
                },
                inner_layer_provider: {
                    type: "minecraft:simple_state_provider",
                    state: {Name: "northstar:lunar_sapphire_block"}
                },
                alternate_inner_layer_provider: {
                    type: "minecraft:simple_state_provider",
                    state: {Name: "northstar:budding_lunar_sapphire_block"}
                },
                middle_layer_provider: {
                    type: "minecraft:simple_state_provider",
                    state: {Name: "charcoal_pit:marble"}
                },
                outer_layer_provider: {
                    type: "minecraft:simple_state_provider",
                    state: {Name: "create:cut_limestone"}
                },
      "inner_placements": [
        {
          "Name": "northstar:small_lunar_sapphire_bud",
          "Properties": {
            "facing": "up",
            "waterlogged": "false"
          }
        },
        {
          "Name": "northstar:medium_lunar_sapphire_bud",
          "Properties": {
            "facing": "up",
            "waterlogged": "false"
          }
        },
        {
          "Name": "northstar:large_lunar_sapphire_bud",
          "Properties": {
            "facing": "up",
            "waterlogged": "false"
          }
        },
        {
          "Name": "northstar:lunar_sapphire_cluster",
          "Properties": {
            "facing": "up",
            "waterlogged": "false"
          }
        }
      ],
                cannot_replace: "#minecraft:features_cannot_replace",
                invalid_blocks: "#minecraft:geode_invalid_blocks"
            },
    "crack": {
      "base_crack_size": 2.0,
      "crack_point_offset": 2,
      "generate_crack_chance": 0.1
    },
    "distribution_points": {
      "type": "minecraft:uniform",
      "max_inclusive": 4,
      "min_inclusive": 3
    },
    "invalid_blocks_threshold": 1,
    "layers": {
      "filling": 1.7,
      "inner_layer": 2.2,
      "middle_layer": 3.2,
      "outer_layer": 4.2
    },
    "max_gen_offset": 16,
    "min_gen_offset": -16,
    "noise_multiplier": 0.05,
    "outer_wall_distance": {
      "type": "minecraft:uniform",
      "max_inclusive": 6,
      "min_inclusive": 4
    },
    "placements_require_layer0_alternate": true,
    "point_offset": {
      "type": "minecraft:uniform",
      "max_inclusive": 2,
      "min_inclusive": 1
    },
    "use_alternate_layer0_chance": 0.083,
    "use_potential_placements_chance": 0.35
        }
    }, [features.in_square, features.height_range(-64, 0), features.rarity(2), features.biome])

    build_feature($, "limestone_grotto_concrete", configured_replace_blobs("minecraft:brown_concrete", "create:limestone"),
        [features.count(27), features.count(74), features.in_square, features.count(74), features.height_range(-127, -40)])

    const configured_moss = configured_replace_blobs("minecraft:moss_carpet", "burnt:smoldering_moss_carpet")

    configured_moss.config.state.Properties = {stage: "1"}

    build_feature($, "sulfide_cave_moss", configured_moss,
        [features.count(27), features.count(74), features.in_square, features.count(74), features.height_range(-127, -40)])
    
    build_feature($, "molten_cave_concrete", configured_replace_blobs("minecraft:orange_concrete", "deeperdarker:gloomy_sculk"),
        [features.count(27), features.count(74), features.in_square, features.count(74), features.height_range(-127, -40)])

    build_feature($, "river_water", configured_replace_blobs("minecraft:air", "minecraft:water", 5),
        [features.count(81), features.in_square, features.heightmap("OCEAN_FLOOR_WG"), features.biome])

    $.json("kubejs:worldgen/configured_feature/make_wetter", configured_replace_single("minecraft:air", "minecraft:water"))
    $.json("kubejs:worldgen/placed_feature/make_wetter", {
        feature: "kubejs:make_wetter",
        placement: [
            features.count(8), features.in_square, features.heightmap("WORLD_SURFACE_WG"),
            {
                "type": "minecraft:surface_relative_threshold_filter",
                heightmap: "WORLD_SURFACE_WG",
                min_inclusive: 64,
                max_inclusive: 128
            }, features.biome
        ]
    })

    $.json("kubejs:worldgen/configured_feature/make_drier", configured_replace_blobs("minecraft:water", "minecraft:air", 5))
    $.json("kubejs:worldgen/placed_feature/make_drier", {
        feature: "kubejs:make_drier",
        placement: [
            features.count(64), features.in_square,
            {
            "type": "minecraft:height_range",
            "height": {
                type: "minecraft:uniform",
                min_inclusive: {absolute: -100},
                max_inclusive: {absolute: -10}
            }
        }]
    })

    $.json("kubejs:worldgen/configured_feature/terracotta_replacer", configured_replace_blobs("minecraft:terracotta", "natures_spirit:kaolin"))
    $.json("kubejs:worldgen/placed_feature/terracotta_replacer", placed_fill("kubejs:terracotta_replacer"))
    for (const color of terracotta_map) {
        $.json(`kubejs:worldgen/configured_feature/terracotta_replacer_${color}`, configured_replace_blobs(`minecraft:${color}_terracotta`, `natures_spirit:${color}_kaolin`))
        $.json(`kubejs:worldgen/placed_feature/terracotta_replacer_${color}`, placed_fill(`kubejs:terracotta_replacer_${color}`))
    }
})

ServerEvents.afterRecipes(() => {
    const terracotta_replacer_features = ["kubejs:terracotta_replacer"]
    for (const color of terracotta_map) {
        terracotta_replacer_features.push(`kubejs:terracotta_replacer_${color}`)
    }

    const standard_features = ["kubejs:loose_cobblestone", "kubejs:underground_loose_cobblestone", "kubejs:slab_to_pebbles", "kubejs:shale_1", "kubejs:kaolin_4", "kubejs:limestone_6", "kubejs:shale_2"].concat(terracotta_replacer_features)
    inject_features("minecraft:savanna", terracotta_replacer_features, "terralith:savanna/dripstone")
    inject_features("minecraft:savanna_plateau", terracotta_replacer_features, 8)
    inject_features("minecraft:jungle", terracotta_replacer_features, 6)
    inject_features("terralith:savanna_badlands", terracotta_replacer_features, "terralith:savanna/terracotta")
    inject_features("terralith:white_mesa", terracotta_replacer_features, "terralith:savanna/terracotta")
    inject_features("terralith:hot_shrubland", terracotta_replacer_features, 6)
    inject_features("terralith:bryce_canyon", terracotta_replacer_features, 6)
    inject_features("biomeswevegone:sierra_badlands", terracotta_replacer_features, "biomeswevegone:orange_terracotta_boulder")
    inject_features("biomesoplenty:rocky_rainforest", terracotta_replacer_features, 6)
    inject_features("minecraft:eroded_badlands", terracotta_replacer_features, 6)
    inject_features("minecraft:badlands", terracotta_replacer_features, 6)

    inject_features("terralith:arid_highlands", ["kubejs:limestone_1"], "terralith:highlands/arid/cliff")
    inject_features("terralith:hot_shrubland", ["kubejs:limestone_1"], 6)
    inject_features("terralith:shrubland", ["kubejs:limestone_1"], 6)
    inject_features("biomesoplenty:scrubland", ["kubejs:limestone_6"], 6)
    inject_features("biomesoplenty:mediterranean_forest", ["kubejs:limestone_1"], 6)
    inject_features("biomeswevegone:baobab_savanna", ["kubejs:limestone_1"], 6)
    inject_features("terralith:rocky_mountains", ["kubejs:limestone_6"], 6)
    inject_features("biomesoplenty:volcanic_plains", ["kubejs:volcanic_rock", "kubejs:volcanic_ash", "kubejs:mossy_black_sand"], 6)
    inject_features("biomesoplenty:floodplain", ["kubejs:shale_2", "kubejs:mud"], 6)
    inject_features("biomesoplenty:moor", ["kubejs:peat", "kubejs:peat_grass"], 6)
    inject_features("terralith:caldera", ["kubejs:caldera_basalt", "kubejs:caldera_rock"], 9)
    inject_features("biomesoplenty:mystic_grove", ["kubejs:mystic_stone"], 6)
    inject_features("terralith:yellowstone", terracotta_replacer_features.concat(["kubejs:yellowstone_sand", "kubejs:yellowstone_terracotta", "kubejs:yellowstone_magma", "kubejs:yellowstone_campfire"]), 9)
    inject_features("minecraft:stony_shore", ["kubejs:rocky_stone"], 2)
    inject_features("minecraft:stony_peaks", ["kubejs:rocky_stone"], 2)
    inject_features("terralith:rocky_mountains", ["kubejs:rocky_stone", "kubejs:loose_cobblestone"], 2)

    inject_features("biomeswevegone:mojave_desert", ["kubejs:mojave_sand", "kubejs:mojave_cracked_sand", "kubejs:mojave_sandstone"], 6)
    inject_features("biomeswevegone:mojave_desert", ["atmospheric:patch_agave_large", "atmospheric:single_agave"], 8)

    inject_features("terralith:moonlight_grove", ["kubejs:lunar_sapphire_geode"], 6)
    inject_features("terralith:moonlight_valley", ["kubejs:lunar_sapphire_geode"], 6)
    inject_features("infinity_cave:limestone_grotto", ["kubejs:limestone_grotto_concrete"], 6)
    inject_features("infinity_cave:sulfide_caves", ["kubejs:sulfide_cave_moss"], 8)
    inject_features("infinity_cave:molten_caves",["kubejs:molten_cave_concrete"], 8)

    for (const biome of biomes.rivers) {
        inject_features(biome, ["kubejs:river_water"], 3)
    }

    const deep_cave_biomes = [
        "minecraft:deep_dark", "terralith:cave/mantle_caves", "infinity_cave:molten_caves", "terralith:cave/frostfire_caves",
        "terralith:cave/deep_caves", "regions_unexplored:scorching_caves"
    ]

    for (const biome of deep_cave_biomes) {
        inject_features(biome, ["kubejs:make_drier"], 10)
    }

    const echo_cave_biomes = ["minecraft:deep_dark", "terralith:cave/frostfire_caves", "caves_and_creatures:ancient_lush_caves"]
    for (const biome of echo_cave_biomes) {
        inject_features(biome, ["kubejs:molten_echo"], 10)
    }

    for (const biome of biomes.swampy) {
        inject_features(biome, ["kubejs:make_wetter"], "minecraft:freeze_top_layer")
    }

    for (const biome of biomes.standard_strata) {
        inject_features(biome, standard_features, 6)
    }

})
})()