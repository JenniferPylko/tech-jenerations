// priority: -100

(() => {
const { name_cleanup, banned_mods } = global.mods

const { $ModernElements, $CompoundDefinition, $CompoundType, $MatterState, $Formula } = global.classes

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

    $.create("andesite_dust")
        .displayName("Andesite Dust")
        .parentModel("blazinghot:item/stone_dust")
        .texture("blazinghot:item/stone_dust")
        .tag("c:dusts/andesite")
})

const custom_stone = (builder) => builder
    .requiresTool(true)
    .stoneSoundType()
    .hardness(4)
    .tag("minecraft:needs_stone_tool")

StartupEvents.registry("block", ($) => {
    custom_stone($.create("shale"))
    .parentModel("kubejs:block/shale")
    .mapColor("color_gray")

    custom_stone($.create("quartzite"))
    .parentModel("kubejs:block/granite")
    .mapColor("dirt")
})

StartupEvents.registry("fluid", ($) => {
    /*$.create("ammonium_chloride", "thin")
        .tint(0xddf0ff)
        .translucent()
        .displayName("Ammonium Chloride Solution")
        .tag("c:acidic")*/
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
    $requiresTool("#c:ores")
    $requiresTool("minecraft:stone")
    $requiresTool("ae2:smooth_quartz_block")
    $requiresTool("astrological:purpurite")
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
    $name("charcoal_pit:basalt", "Rift Basalt")
    $name("charcoal_pit:basalt_bricks", "Rift Basalt Bricks")
    $name("charcoal_pit:basalt_slab", "Rift Basalt Slab")
    $name("charcoal_pit:basalt_stairs", "Rift Basalt Stairs")
    $name("charcoal_pit:basalt_wall", "Rift Basalt Wall")
    $name("charcoal_pit:basalt_polished", "Polished Rift Basalt")
    $name("charcoal_pit:basalt_pillar", "Rift Basalt Pillar")
    $name("charcoal_pit:barrel", "Fluid Barrel")
    $name("charcoal_pit:chimney_brick", "Bloomery Chimney")
    $name("sub_expansion:stone_stalagmite", "Slate Stalagmite")
    $name("sub_expansion:stone_stalactite", "Slate Stalactite")
    $name("northstar:jet_engine", "Epstein Drive")

    $.modify("minecraft:obsidian", (block) => block.setIsRandomlyTicking(true))
    $.modify("minecraft:crying_obsidian", (block) => block.setIsRandomlyTicking(true))
    $.modify("minecraft:sculk_catalyst", (block) => block.setIsRandomlyTicking(true))
    $.modify("biomesoplenty:anomaly", (block) => block.setIsRandomlyTicking(true))
    $.modify("biomesoplenty:thermal_calcite_vent", (block) => block.setIsRandomlyTicking(true))
    $.modify("betterend:brimstone", (block) => block.setIsRandomlyTicking(true))
    $.modify("betterend:aurora_crystal", (block) => block.setIsRandomlyTicking(true))
    $.modify("betterend:neon_cactus", (block) => block.setIsRandomlyTicking(true))
    $.modify("betterend:pallidium_full", (block) => block.setIsRandomlyTicking(true))
    $.modify("astrological:pearlescent_selenite", (block) => block.setIsRandomlyTicking(true))
    $.modify("northstar:venus_plume", (block) => block.setIsRandomlyTicking(true))

    //$.modify("minecraft:dirt", (block) => Java.cast(block, "dev.latvian.mods.kubejs.block.custom.FallingBlockBuilder$KubeJSFallingBlock"))
})

ItemEvents.modification(($) => {
    const $name = (id, name) => $.modify(id, (item) => item.setItemName(name))

    $.modify("minecraft:stone_pickaxe", (item) => item.setMaxDamage(8))
    $.modify("survivalistessentials:crude_saw", (item) => item.setMaxDamage(12))
    $.modify("survivalistessentials:basic_saw", (item) => item.setMaxDamage(40))
    $.modify("survivalistessentials:sharp_saw", (item) => item.setMaxDamage(200))

    for (const sleeping_bag of Ingredient.of("@sleeping_bags").getItemIds()) {
        $.modify(sleeping_bag, (item) => item.setMaxDamage(180))
    }

    $name("createaddition:capacitor", "Zinc Capacitor")
    $name("tfmg:capacitor_item", "Ferrous Capacitor")
    $name("modern_industrialization:capacitor", "Gold Capacitor")

    $name("powergrid:resistor", "Ferrous Resistor")
    $name("tfmg:resistor", "Constantan Resistor")
    $name("modern_industrialization:resistor", "Copper Resistor")

    $name("trainutilities:transistor", "Thyristor")
    $name("tfmg:transistor_item", "Bipolar Junction Transistor")
    $name("modern_industrialization:transistor", "Field Effect Transistor")
    
    $name("northstar:circuit", "Shielded Circuit")
    $name("northstar:advanced_circuit", "SOI Shielded Circuit")

    $name("deeperdarker:sculk_transmitter", "Sculk Radio")
    $name("create_deep_dark:sculk_flour", "Sculk Dust")

    $name("modern_industrialization:fire_clay_dust", "Refractory Compound")
    $name("modern_industrialization:fire_clay_brick", "Refractory Brick")

    $name("create:cinder_flour", "Netherrack Dust")

    $name("tfmg:heavy_plate", "Steel Plate")
})

StartupEvents.init(($) => {
    const compounds = global.classes.$ModernElements.getInstance().getCompoundRegistry()

    compounds.register(new $CompoundDefinition(
        "carboxyl", "696969", $CompoundType.ION, $MatterState.SOLID, true,
        new $Formula.Builder().chem("carbon", 1).chem("oxygen", 2).chem("hydrogen", 1).build(), 0, 0, 0
    ))

    compounds.register(new $CompoundDefinition(
        "tetrachloromethane", "347894", $CompoundType.ORGANIC, $MatterState.LIQUID, true,
        new $Formula.Builder().chem("carbon", 1).chem("chlorine", 4).build(), -25, -22.92, 76.72
    ))

    compounds.register(new $CompoundDefinition(
        "bromomethane", "574933", $CompoundType.ORGANIC, $MatterState.GAS, true,
        new $Formula.Builder().chem("carbon", 1).chem("hydrogen", 3).chem("bromine", 1).build(), -100, -93.66, 4
    ))
})
})()