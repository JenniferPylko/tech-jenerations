// priority: -100

const { name_cleanup, banned_mods } = global.mods

for (const id of Object.keys(Platform.mods)) {
    if (typeof name_cleanup[id] !== "undefined") {
        Platform.mods[id].name = name_cleanup[id]
    }
    if (typeof banned_mods[id] !== "undefined") {
        console.error(`Mod ${Platform.mods[id].name} (${id}) is incompatible with this modpack. Reason: ${banned_mods[id]}`)
    }
}

const $GuidesCommon = Java.loadClass("guideme.GuidesCommon")

StartupEvents.registry("item", ($) => {
    $.create("basic_mesh", "createsifter:mesh")
        .displayName("Basic Mesh")
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh", "kubejs:item/example_item")
        .maxDamage(8)
    
    $.create("guide")
        .unstackable()
        .displayName("Tech Jenerations Guide")
        .texture("minecraft:item/knowledge_book")
        .color(0, "#85beff")
        .use((_, player) => {
            $GuidesCommon.openGuide(player, "kubejs:guide")
            return true
        })
})

const custom_stone = (builder) => builder
    .requiresTool(true)
    .stoneSoundType()
    .hardness(12)

StartupEvents.registry("block", ($) => {
    custom_stone($.create("shale"))
    .parentModel("kubejs:block/shale")
    .mapColor("color_gray")

    custom_stone($.create("quartzite"))
    .parentModel("kubejs:block/granite")
    .mapColor("dirt")

    $.create("become_wet")
    .parentModel("minecraft:air")
})

BlockEvents.modification(($) => {
    const $requiresTool = (selector) => $.modify(selector, (block) => block.setRequiresTool(true))
    const $name = (selector, displayName) => $.modify(selector, (block) => block.setNameKey(displayName))

    $requiresTool("#minecraft:logs")
    $requiresTool("#minecraft:planks")
    $requiresTool("#minecraft:wooden_stairs")
    $requiresTool("#minecraft:wooden_fences")
    $requiresTool("#minecraft:wooden_doors")
    $requiresTool("#minecraft:wooden_slabs")
    $requiresTool("#minecraft:wooden_trapdoors")
    $requiresTool("#minecraft:wooden_buttons")
    $requiresTool("#minecraft:muddy_mangrove_roots")
    $requiresTool("#c:chests/wooden")
    $requiresTool("#c:barrels/wooden")
    $requiresTool("#c:bookshelves")
    $requiresTool("#c:player_workstations/crafting_tables")
    $requiresTool("#dynamictrees:roots")
    $requiresTool("#create:roots")
    $requiresTool("#c:stones")
    $requiresTool("minecraft:stone")
    //$.modify("minecraft:stone", (block) => block.block().getBlockBuilder().tag("minecraft:needs_iron_tool").tag("minecraft:incorrect_for_wooden_tool").tag("minecraft:incorrect_for_stone_tool"))

    $name("modern_industrialization:fire_clay_bricks", "Refractory Bricks")
    $name("ecological:wild_carrot", "Wild Carrot")
    $name("ecological:wild_beetroot", "Wild Beetroot")
    $name("ecological:wild_wheat", "Wild Wheat")
    $name("ecological:wild_potato", "Wild Potato")
    $name("charcoal_pit:bloom", "Metallurgic Bloom")
    $name("megalosaio:aluminium_ore", "Bauxite Ore")
    $name("megalosaio:raw_aluminium", "Bauxite")
    $name("megalosaio:raw_aluminium_block", "Block of Bauxite")
    $name("tfmg:bauxite", "Block of Bauxite")
    $name("create:crushed_raw_aluminum", "Crushed Bauxite")
    $name("create_sifter:raw_aluminum_piece", "Bauxite Piece")
    $name("create_new_age:thorium_ore", "Thorianite ore")
    $name("create_new_age:thorium", "Thorianite")
    $name("megalosaio:lead_ore", "Galena Ore")
    $name("megalosaio:raw_lead", "Galena")
    $name("megalosaio:raw_lead_block", "Block of Galena")
    $name("minecraft:stone", "Slate")
    $name("minecraft:infested_stone", "Infested Slate")
    $name("minecraft:stone_slab", "Slate Slab")
    $name("minecraft:smooth_stone", "Smooth Slate")
    $name("minecraft:smooth_stone_slab", "Smooth Slate Slab")
    $name("minecraft:stone_stairs", "Slate Stairs")
    $name("minecraft:stone_button", "Slate Button")
    $name("minecraft:stone_pressure_plate", "Slate Pressure Plate")
    $name("regions_unexlprode:mossy_stone", "Mossy Slate")
    $name("regions_unexplored:stone_grass_block", "Slate Grass Block")
    $name("deeperdarker:sculk_transmitter", "Sculk Radio")
    $name("create_deep_dark:sculk_flour", "Sculk Dust")

    $.modify("minecraft:obsidian", (block) => block.setIsRandomlyTicking(true))
    $.modify("minecraft:sculk_catalyst", (block) => block.setIsRandomlyTicking(true))

    //$.modify("minecraft:dirt", (block) => Java.cast(block, "dev.latvian.mods.kubejs.block.custom.FallingBlockBuilder$KubeJSFallingBlock"))
})

ItemEvents.modification(($) => {
    const $name = (name) => (item) => item.setItemName(name)

    $.modify("modern_industrialization:fire_clay_dust", $name("Refractory Compound"))
    $.modify("modern_industrialization:fire_clay_brick", $name("Refractory Brick"))
    $.modify("modern_industrialization:fire_clay_bricks", $name("Refractory Bricks"))

    $.modify("create:cinder_flour", $name("Netherrack Dust"))

    $.modify("minecraft:stone_pickaxe", (item) => item.setMaxDamage(8))
    $.modify("survivalistessentials:crude_saw", (item) => item.setMaxDamage(12))
    $.modify("survivalistessentials:basic_saw", (item) => item.setMaxDamage(40))
    $.modify("survivalistessentials:sharp_saw", (item) => item.setMaxDamage(200))

    for (const sleeping_bag of Ingredient.of("@sleeping_bags").getItemIds()) {
        $.modify(sleeping_bag, (item) => item.setMaxDamage(180))
    }

    $name("createaddition:capacitor", "Zinc Capacitor")
    $name("tfmg:capacitor", "Ferrous Capacitor")
    $name("modern_industrialization:capacitor", "Gold Capacitor")
})