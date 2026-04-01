(() => { // stop polluting my scope!
const { unification, manual_unification, utils } = global
const $common_items = () => [
    Ingredient.of("@megalosaio").getItemIds().toArray(),
    Ingredient.of("@remin").getItemIds().toArray()
]
const copy_tags = ($, source, dest) => {
    const blockTags = Block.getBlock(source).getTags()
    const itemTags = Block.getBlock(source).asItem().getTags()

    for (const tag of blockTags) {
        $.add(tag, dest)
    }
    for (const tag of itemTags) {
        $.add(tag, dest)
    }
}

const $tags_common = ($, remin_items) => {
    $.add("c:ores", remin_items.filter((v) => v.match(/.*ore.*/)))

    copy_tags($, "minecraft:stone", "kubejs:shale")
    copy_tags($, "minecraft:stone", "kubejs:quartzite")

    for (const category of Object.keys(unification)) {
        for (const material of Object.keys(unification[category])) {
            //console.log(`Adding unity tags for ${material} ${category}`)
            $.add(`c:${category}`, unification[category][material])
            $.add(`c:${material}`, unification[category][material])
            $.add(`c:${category}/${material}`, unification[category][material])
        }
    }

    $.remove("c:ores/aluminum", "#c:ores/aluminum")
    $.remove("c:ores/aluminium", "#c:ores/aluminium")

    $.remove("c:raw_materials/aluminum", "#c:raw_materials/aluminum")
    $.remove("c:raw_materials/aluminium", "#c:raw_materials/aluminium")


    $.add("c:planks", "#forge/planks")

    $.add("hardcore_torches:damage_torch_light_items", "hardcore_torches:lit_torch")
    $.add("hardcore_torches:damage_lantern_light_items", "hardcore_torches:lit_torch")

    $.add("minecraft:smelts_to_glass", "#c:sands")
    $.add("minecraft:smelts_to_glass", "#minecraft:sand")

    $.add("amendments:sets_on_fire", "#hardcore_torches:active_torches")
    $.add("lit_on_fire:can_lit_campfire", "#hardcore_torches:active_torches")

    $.add("c:hidden_from_recipe_viewers", [
        "#create_mpnt:fluid_pipes",
        "#create_mpnt:pumps",
        "#modern_industrialization:fluid_pipes",
        "create_mpnt:copper_encased_shaft",
        "create_mpnt:railway_encased_shaft",
        "create_mpnt:zinc_encased_shaft",
        "create_mpnt:gold_encased_shaft",
        "create_mpnt:iron_encased_shaft",
        "create_mpnt:netherite_encased_shaft",
        "create_mpnt:rose_gold_encased_shaft",
        "create_mpnt:rosarite_encased_shaft",
        "create_mpnt:valkyrum_encased_shaft",
        "create_mpnt:pyral_encased_shaft",
        "create_mpnt:zinc_ladder",
        "create_mpnt:golden_ladder",
        "create_mpnt:iron_ladder",
        "create_mpnt:netherite_ladder",
        "create_mpnt:rose_golden_ladder",
        "create_mpnt:rosarite_ladder",
        "create_mpnt:pyral_fluid_pipe",
        "create_mpnt:pyral_mechanical_pump",
        "create:smart_fluid_pipe",
        "copycats:copycat_fluid_pipe",
        "tfmg:electric_pump",
        "tfmg:brass_mechanical_pump",
        "tfmg:steel_mechanical_pump",
        "tfmg:aluminum_mechanical_pump",
        "tfmg:cast_iron_mechanical_pump",
        "tfmg:plastic_mechanical_pump",
        "tfmg:steel_pipe",
        "tfmg:brass_smart_fluid_pipe",
        "tfmg:steel_smart_fluid_pipe",
        "tfmg:aluminum_smart_fluid_pipe",
        "tfmg:cast_iron_pipe",
        "tfmg:cast_iron_smart_fluid_pipe",
        "tfmg:plastic_smart_fluid_pipe"
    ])
}

for (const [k, v] of Object.entries(manual_unification)) {
    ServerEvents.tags(k, ($) => utils.hide_all($, v))
}

ServerEvents.tags("item", ($) => {
    const [megalos_items, remin_items] = $common_items()

    $tags_common($, remin_items)

    $.add("c:hidden_from_recipe_viewers", [
        "createdieselgenerators:ethanol_bucket",
        "charcoal_pit:ethanol_bucket",
        "charcoal_pit:ethanol_bottle",
        "createaddition:bioethanol_bucket",
        "createchemistry:ethanol_bottle",
        "modern_industrialization:ethanol_bucket",
        "megacells:mega_emc_interface",
        "megacells:cable_mega_emc_interface",
        "fulleng:transmutation_terminal",
        "fulleng:requester_terminal",
        "fulleng:extended_pattern_access_terminal",
        "megacells:sky_osmium_ingot",
        "megacells:mega_chemical_cell_housing",
        "megacells:chemical_storage_cell_1m",
        "megacells:chemical_storage_cell_4m",
        "megacells:chemical_storage_cell_16m",
        "megacells:chemical_storage_cell_64m",
        "megacells:chemical_storage_cell_256m",
        "megacells:portable_chemical_cell_1m",
        "megacells:portable_chemical_cell_4m",
        "megacells:portable_chemical_cell_16m",
        "megacells:portable_chemical_cell_64m",
        "megacells:portable_chemical_cell_256m",
        "megacells:radioactive_cell_component",
        "megacells:radioactive_chemical_cell",
        "megacells:mega_source_cell_housing",
        "megacells:source_storage_cell_1m",
        "megacells:source_storage_cell_4m",
        "megacells:source_storage_cell_16m",
        "megacells:source_storage_cell_64m",
        "megacells:source_storage_cell_256m",
        "megacells:portable_source_cell_1m",
        "megacells:portable_source_cell_4m",
        "megacells:portable_source_cell_16m",
        "megacells:portable_source_cell_64m",
        "megacells:portable_source_cell_256m",
        "megacells:mega_experience_cell_housing",
        "megacells:experience_storage_cell_1m",
        "megacells:experience_storage_cell_4m",
        "megacells:experience_storage_cell_16m",
        "megacells:experience_storage_cell_64m",
        "megacells:experience_storage_cell_256m",
        "megacells:portable_experience_cell_1m",
        "megacells:portable_experience_cell_4m",
        "megacells:portable_experience_cell_16m",
        "megacells:portable_experience_cell_64m",
        "megacells:portable_experience_cell_256m",
        "megacells:sky_osmium_block",
        "remin:silver_gold_ore"
    ])

    $.add("c:ingots", megalos_items.filter((v) => v.match(/.*ingot.*/)))
    $.add("c:nuggets", megalos_items.filter((v) => v.match(/.*nugget.*/)))

    $.add("c:ingots", "remin:aluminium_ingot")
    $.add("c:ingots", "remin:albemet_ingot")
    $.add("c:ingots", "tfmg:magnetic_alloy_ingot")
    $.add("c:ingots", "world_expansion:titanium_ingot")

    $.add("c:ingots/aluminum", "#c:ingots/aluminium")
    $.add("c:ingots/aluminum", "megalosaio:aluminium_ingot")
    $.add("c:nuggets/aluminum", "megalosaio:aluminium_nugget")

    $.add("hardcore_torches:consume_torch_light_items", "hardcore_torches:fire_starter")
    $.add("hardcore_torches:consume_lantern_light_items", "hardcore_torches:fire_starter")

    $.add("kubejs:simple_handles", "minecraft:stick")
    $.add("kubejs:simple_handles", "minecraft:bamboo")

    $.add("c:tools", "hardcore_torches:fire_starter")
    $.add("c:tools/igniter", "hardcore_torches:fire_starter")
    $.add("supplementaries:fire_sources", "hardcore_torches:fire_starter")
    $.add("amendments:sets_on_fire", "hardcore_torches:fire_starter")
    $.add("lit_on_fire:can_lit_campfire", "hardcore_torches:fire_starter")

    $.add("c:strings", "survivalistessentials:plant_string")
    $.add("c:pebbles", "#survivalistessentials:rock")

    $.add("c:clay_balls", "minecraft:clay_ball")
    $.add("c:clay_balls", "tfmg:fireclay_ball")
    $.add("c:clay_balls", "modern_industrialization:fire_clay_dust")
    $.add("c:furnace_cavity", "minecraft:bucket")
    $.add("c:furnace_cavity", "remin:bronze_bucket")
    $.add("c:furnace_cavity", "ceramicbucket:ceramic_bucket")
    $.add("c:furnace_cavity", "ceramicbucket:unfired_clay_bucket")
    $.add("c:furnace_cavity", "undergarden:cloggrum_bucket")
    $.add("c:furnace_cavity", "#minecraft:copper_chests")
    $.add("c:furnace_cavity", "ae2:sky_stone_chest")
    $.add("c:furnace_cavity", "ae2:smooth_sky_stone_chest")
    $.add("c:furnace_cavity", "pneumaticcraft:reinforced_chest")
    $.add("c:furnace_cavity", "minecraft:cauldron")
    $.add("c:furnace_cavity", "create:basin")

    $.remove("c:ingots/gold", "remin:rose_gold")
    $.add("c:ingots/rose_gold", "remin:rose_gold")
    $.add("c:coal_coke", "modern_industrialization:coke")
    $.add("charcoal_pit:jei_fuels", "modern_industrialization:coke")
    $.add("charcoal_pit:jei_fuels", "modern_industrialization:coke_block")
    $.add("charcoal_pit:jei_fuels", "modern_industrialization:lignite_coal")
    $.add("charcoal_pit:jei_fuels", "modern_industrialization:lignite_coal_block")
    $.add("charcoal_pit:jei_fuels", "#minecraft:logs_that_burn")
    $.add("charcoal_pit:jei_fuels", "#minecraft:saplings")

    $.add("c:crafting_shaft", "create:shaft")
    $.add("c:crafting_shaft", "createcasing:brass_shaft")
    $.add("c:crafting_shaft", "#c:rods/steel")
    $.add("c:crafting_shaft", "#c:rods/stainless_steel")
    $.add("c:crafting_shaft", "#c:rods/hsla_steel")
    $.add("c:crafting_shaft", "#c:rods/titanium_carbide")
    $.add("c:crafting_shaft", "#c:rods/iron")
    $.add("c:crafting_shaft", "#c:rods/invar")
    $.add("c:crafting_shaft", "#c:rods/titanium")
    $.add("c:crafting_shaft", "#c:rods/copper")
    $.add("c:crafting_shaft", "#c:rods/bronze")
    $.add("c:crafting_shaft", "#c:rods/brass")
    $.add("c:weak_crafting_shaft", "#c:crafting_shaft")
    $.add("c:weak_crafting_shaft", "#c:rods")
    $.add("c:weak_crafting_shaft", "createcasing:acacia_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:birch_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:bamboo_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:cherry_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:crimson_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:dark_oak_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:oak_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:jungle_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:mangrove_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:warped_shaft")
    $.add("c:weak_crafting_shaft", "createcasing:spruce_shaft")
    $.add("c:weak_crafting_shaft", "minecraft:bamboo")
    $.add("c:weak_crafting_shaft", "minecraft:stick")
    $.add("c:weak_crafting_shaft", "minecraft:end_rod")
    $.add("c:weak_crafting_shaft", "#minecraft:lightning_rods")

    $.add("c:em_coil_item", "#createaddition:spools")
    $.add("c:em_coil_item", "tfmg:copper_spool")
    $.add("c:em_coil_item", "tfmg:aluminum_spool")
    $.add("c:em_coil_item", "tfmg:constantan_spool")
    $.add("c:em_coil_item", "electrodynamics:coil")
    $.add("c:em_coil_item", "electrodynamics:laminatedcoil")
    $.add("c:em_coil_item", "tfmg:electromagnetic_coil")
    $.add("c:em_coil_item", "tfmg:large_coil")
    $.add("c:em_coil_item", "modern_industrialization:cupronickel_coil")
    $.add("c:em_coil_item", "modern_industrialization:kanthal_coil")
    $.add("c:em_coil_item", "modern_industrialization:superconductor_coil")
})

ServerEvents.tags("block", ($) => {
    const [megalos_items, remin_items] = $common_items()

    $tags_common($, remin_items)

    $.add("minecraft:needs_diamond_tool", "#waystones:waystones")
    $.add("minecraft:needs_diamond_tool", "waystones:waystone")
    $.add("minecraft:needs_iron_tool", "minecraft:stone")
    $.add("minecraft:incorrect_for_gold_tool", "minecraft:stone")
    $.add("minecraft:incorrect_for_stone_tool", "minecraft:stone")
    $.add("minecraft.incorrect_for_wooden_tool", "minecraft:stone")
    $.add("megalosaio:incorrect_for_technetium_tool", "minecraft:stone")
    $.add("megalosaio:incorrect_for_silver_tool", "minecraft:stone")
    $.remove("megalosaio:needs_aluminium_tool", "minecraft:stone")

    $.add("sculktransporting:sculk_emitter_can_extract_from", "minecraft:ender_chest")

    $.add("c:thorianite_bearing", "minecraft:granite")
    $.add("c:thorianite_bearing", "remin:feldspar")
    $.add("c:thorianite_bearing", "yungscavebiomes:ancient_sandstone")
    $.add("c:thorianite_bearing", "yungscavebiomes:layered_ancient_sandstone")

    $.add("c:chests", "copperagebackport:copper_chests")
    $.add("deeperdarker:transmittable", ["#c:chests",
        "ae2:terminal", "ae2:crafting_terminal", "ae2:pattern_access_terminal", "ae2:pattern_encoding_terminal",
        "fulleng:terminal", "fulleng:crafting_terminal", "fulleng:pattern_access_terminal", "fulleng:pattern_encoding_terminal",
        "ae2:pattern_provider", "ae2:cable_pattern_provider", "ae2:molecular_assembler", "ae2:chest", "ae2:import_bus", "ae2:export_bus",
        "ae2:inscriber", "ae2:drive", "ae2:interface", "ae2:cell_workbench", "ae2:io_port"
    ])

    $.add("thickair:red_air_providers", "#burnt:on_fire")
    $.add("burnt:will_burn", [
        "biomesoplenty:hanging_cobweb", "biomesoplenty:hanging_cobweb_strand", "biomesoplenty:stringy_cobweb",
        "regions_unexplored:cobalt_webbing", "atmospheric:grimweb", "#woodworks:leaf_piles", "#dynamictrees:foliage",
        "#greeneries:reeds", "#wover:vegetation/plant", "#wover:vegetation/vine", "#wover:vegetation/seeds",
        "#c:lignite_coal", "#c:ores/lignite_coal", "#c:coke", "#c:ores/oil", "tfmg:oil_deposit",
        "minecraft:cartography_table", "minecraft:crafting_table", "minecraft:loom"
    ])
    $.add("survivalistessentials:fiber_plants", [
        "#dynamictrees:foliage", "#greeneries:grass", "#greeneries:fern", "#greeneries:reeds", "#wover:vegetation/vine"
    ])
})

ServerEvents.tags("structure", ($) => {
    $.add("minecraft:villages", "minecraft:village_plains")
    $.add("minecraft:villages", "natures_spirit:village_desert")
})

ServerEvents.tags("worldgen/biome", ($) => {
    $.add("stellaris:mercury_biomes", [
        "northstar:mercury_basins",
        "northstar:mercury_hills",
        "northstar:mercury_icy_caverns",
        "northstar:mercury_magmatic_caverns"
    ])
    $.add("stellaris:venus_biomes", [
        "northstar:venus_fungal_caverns",
        "northstar:venus_fungal_forest",
        "northstar:venus_lava_caves",
        "northstar:venus_sulfuric_caverns",
        "northstar:venusian_plains",
        "northstar:venusian_wastes"
    ])
    $.add("stellaris:moon_biomes", [
        "northstar:lunar_asurine_caves",
        "northstar:lunar_cooled_lava_cave",
        "northstar:lunar_crater_fields",
        "northstar:lunar_glowstone_cavern",
        "northstar:lunar_hills",
        "northstar:lunar_ice_caves",
        "northstar:lunar_plains"
    ])
    $.add("stellaris:mars_biomes", [
        "northstar:martian_crimsite_caverns",
        "northstar:martian_dunes",
        "northstar:martian_highlands",
        "northstar:martian_magmatic_caves",
        "northstar:martian_overgrown_caverns",
        "northstar:martian_peaks"
    ])
})
})()