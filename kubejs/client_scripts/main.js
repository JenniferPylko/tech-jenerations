ItemEvents.modifyTooltips(($) => {
    $.add("hardcore_torches:fire_starter", Text.yellow("Long-press interact to ignite blocks"))
})

const black_fog_biomes = [
    "undergarden:fog_definitions/tag/biome/is_undergarden",
    "northstar:fog_definitions/biome/mercury_hills",
    "northstar:fog_definitions/biome/mercury_basins",
    "northstar:fog_definitions/biome/mercury_icy_caverns",
    "northstar:fog_definitions/biome/mercury_magmatic_caverns",
    "northstar:fog_definitions/biome/lunar_asurine_caves",
    "northstar:fog_definitions/biome/lunar_cooled_lava_cave",
    "northstar:fog_definitions/biome/lunar_crater_fields",
    "northstar:fog_definitions/biome/lunar_glowstone_cavern",
    "northstar:fog_definitions/biome/lunar_hills",
    "northstar:fog_definitions/biome/lunar_ice_caves",
    "northstar:fog_definitions/biome/lunar_plains",
    "bro:fog_definitions/biome/void/void",
    "bro:fog_definitions/biome/void/void_below",
    "bro:fog_definitions/biome/void/void_inverse",
    "bro:fog_definitions/biome/void/void_inverse_below"
]

const void_biomes = [
    "bro:polytone/biome_modifiers/void/void",
    "bro:polytone/biome_modifiers/void/void_below",
    "bro:polytone/biome_modifiers/void/void_inverse",
    "bro:polytone/biome_modifiers/void/void_inverse_below"
]

ClientEvents.generateAssets("last", ($) => {
    $.json("c:fog_definitions/tag/biome/is_nether", {
        colors: {
            day: "#490000",
            night: "#490000"
        },
        end_multiplier: 1.0,
        start_multiplier: 1.0
    })
    for (const biome of black_fog_biomes) {
        $.json(biome, {
            colors: {
                day: "#000000",
                night: "#000000"
            },
            end_multiplier: 1.0,
            start_multiplier: 1.0
        })
    }
    for (const biome of void_biomes) {
        $.json(biome, {
            fog_color: 0,
            sky_color: 0,
            particle: {
                options: {type: "minecraft:end_rod"},
                probability: 0.01
            }
        })
    }
})
