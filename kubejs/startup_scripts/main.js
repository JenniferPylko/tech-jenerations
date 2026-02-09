const name_cleanup = {
    kubejs: "Tech Jenerations",
    skinlayers3d: "3D Skin Layers",
    mr_abusimbel: "Abu Simbel Ruins",
    achiopt: "Achievement Optimizer",
    ambientenvironment: "Ambient Environment",
    ambientsounds: "Ambient Sounds",
    mr_ancient_junglering: "Ancient Jungle Ring",
    backported_animal_variants: "Animal Variants Backport",
    asynclocator: "Async Locator",
    biomegonecompat: "Biomes We've Gone Waystones",
    conditional_mixin: "Conditional Mixin",
    cclayer: "Curios Compatibility Layer",
    cloth_config: "Cloth Config",
    createbetterfps: "Create: Better FPS",
    create_more_additions: "Create: Crafts & More Additions",
    createaddition: "Create: Crafts & Additions",
    createdeco: "Create: Deco",
    dndecor: "Create: Design n' Decor",
    createdieselgenerators: "Create: Diesel Generators",
    createdynlight: "Create: Dynamic Lights",
    create_easyfilling: "Create: Easy Filling",
    createcasing: "Create: Encased",
    create_factory_abstractions: "Create: Factory Abstractions",
    createhorsepower: "Create: Horse Power",
    create_ltab: "Create: Let The Adventure Begin",
    createlowheated: "Create: Low-Heated",
    cmparallelpipes: "Create: More Parallel Pipes",
    createnewbeg: "Create: New Beginnings",
    createoreexcavation: "Create: Ore Excavation",
    createpickywheels: "Create: Picky Wheels",
    createrailwaysnavigator: "Create: Railways Navigator",
    createsifter: "Create: Sifter",
    createstockbridge: "Create: Stock Bridge",
    create_sa: "Create: Stuff n' Additions",
    createsa_tank_fix: "Create: Stuff n' Additions Tank Fix",
    createtouchpadscrollingfix: "Create: Touchpad Scrolling Fix",
    create_train_parts: "Create: Train Parts",
    trainutilities: "Create: Train Utilities",
    create_waystones_recipes: "Create: Waystones",
    mr_create_manofmanyplanes: "Create: Man of Many Planes",
    darkpaintings: "Dark Paintings",
    doubledoors: "Double Doors",
    emiprofessions: "EMI Professions",
    enchdesc: "Enchantment Descriptions",
    entityculling: "Entity Culling",
    exposure_polaroid: "Exposure: Polaroid",
    fallingleaves: "Falling Leaves",
    flowing_fluids: "Flowing Fluids",
    item_interactions_mod: "Item Interactions",
    mr_japanese_castle: "Japanese Castle",
    mr_japanese_offeringshrines: "Japanese Offering Shrines",
    mr_mycenae: "Mycenae",
    kubejsoffline: "KubeJS Offline",
    light_the_way: "Light the Way",
    me_beam_former: "ME Beam Former",
    megalosaio: "Megalo's AIO",
    mes: "Moog's End Structures",
    mmv: "Moog's Missing Villages",
    mns: "Moog's Nether Structures",
    mtr: "Moog's Temples Reimagined",
    mvs: "Moog's Voyager Structures",
    netherportalfix: "Nether Portal Fix",
    nopackcompatcheck: "No Pack Compat Check",
    notenoughanimations: "Not Enough Animations",
    nustone_crafting: "NuStone Crafting",
    oceanvillagertrader: "Ocean Villager Trader",
    rsec: "Rain Should Extinguish Campfires",
    reducedloot: "Reduced Loot",
    reducedores: "Reduced Ores",
    resourcefulconfig: "Resourceful Config",
    smallbiometowers: "Small Biome Towers",
    smithingtemplateviewer: "Smithing Template Viewer",
    spark: "Spark",
    sparsestructures: "Sparse Structures",
    spring_to_life: "Spring to Life Backport",
    survivalistessentials: "Survivalist Essentials",
    tclayer: "Trinkets Compatibility Layer",
    toomanyrecipeviewers: "Too Many Recipe Viewers",
    totw_modded: "Towers of The Wild",
    variantsandventures: "Variants & Ventures",
    whitenoise: "White Noise",
    yet_another_config_lib_v3: "Yet Another Config Lib"
}

const banned_mods = {
    ldlib2: "crashes on start",
    palladium: "same functionality already present, slows down the game",
    stoneholm: "long world generation pauses",
    terrablenderfix: "breaks many biomes",
    wildfields: "entities crash on creation",
    portaljs: "crashes on start"
}

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

    $.modify("minecraft:obsidian", (block) => block.setIsRandomlyTicking(true))
})

ItemEvents.modification(($) => {
    const $name = (name) => (item) => item.setItemName(name)

    $.modify("modern_industrialization:fire_clay_dust", $name("Refractory Compound"))
    $.modify("modern_industrialization:fire_clay_brick", $name("Refractory Brick"))
    $.modify("modern_industrialization:fire_clay_bricks", $name("Refractory Bricks"))

    $.modify("create:cinder_flour", $name("Netherrack Dust"))

    $.modify("minecraft:stone_pickaxe", (item) => item.setMaxDamage(8))
})