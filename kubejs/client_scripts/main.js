ItemEvents.modifyTooltips(($) => {
    $.add("hardcore_torches:fire_starter", Text.yellow("Long-press interact to ignite blocks"))
})

ClientEvents.generateAssets("last", ($) => {
    $.json("c:fog_definitions/tag/biome/is_nether", {
        colors: {
            day: "#9f0000",
            night: "#9f0000"
        },
        end_multiplier: 1.0,
        start_multiplier: 1.0
    })
})