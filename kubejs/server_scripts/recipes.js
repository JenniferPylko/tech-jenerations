(() => {
const {manual_unification} = global

ServerEvents.recipes(($) => {
    const $forEachRecipe = (filter, callback) => {
        try { $.forEachRecipe(filter, (recipe) => {
            try { callback(recipe) } catch (e) {}
        }) } catch (e) {}
    }

    const $shaped_2x2 = (output, input) => $.shaped(output, ["AA ", "AA ", "   "], {A: input})
    const $shaped_3x3_blend = (output, axis_input, diagonal_input, center_input) => $.shaped(output, ["ABA", "BCB", "ABA"], {A: diagonal_input, B: axis_input, C: center_input ?? diagonal_input})

    for (const rule of manual_unification.item) {
        for (const ingredient of rule.replace) {
            $.replaceInput({input: ingredient}, ingredient, rule.main)
            $.replaceOutput({output: ingredient}, ingredient, rule.main)
        }
    }
    for (const rule of manual_unification.fluid) {
        for (const ingredient of rule.replace) {
            console.log(`processing ${ingredient}`)
            $.replaceInput({input: Fluid.of(ingredient, 1)}, Fluid.of(ingredient, 1), Fluid.of(rule.main, 1))
            $.replaceOutput({output: Fluid.of(ingredient, 1)}, Fluid.of(ingredient, 1), Fluid.of(rule.main, 1))
        }
    }

    $forEachRecipe({
        output: "#minecraft:planks",
        input: "#minecraft:logs",
        type: "minecraft:crafting_shapeless",
        not: {input: "#survivalistessentials:saw_tools"}
    }, (recipe) => {
        $.shapeless(recipe.originalRecipeResult.withCount(2), [recipe.originalRecipeIngredients[0], "survivalistessentials:crude_saw"]).damageIngredient("survivalistessentials:crude_saw")
        $.shapeless(recipe.originalRecipeResult.withCount(4), [recipe.originalRecipeIngredients[0], "#survivalistessentials:advanced_saw_tools"]).damageIngredient("#survivalistessentials:advanced_saw_tools")
        recipe.remove()
    })

//    $forEachRecipe({input: "#c:stones"}, (recipe) => {
//        if (recipe.originalRecipeResult.getItemId().match(/.*(smooth|polished).*/)) {
//            $.recipes.create.sanding([Output.of(recipe.originalRecipeResult.withCount(1))], recipe.originalRecipeIngredients[0])
//            recipe.remove()
//        }
//    })

    $shaped_2x2(Item.of("kubejs:basic_mesh", 1), "minecraft:stick")

    $.recipes.createsifter.sifting([Output.of("minecraft:coarse_dirt", 0.15)], "minecraft:dirt", "kubejs:basic_mesh")
    $.recipes.createsifter.sifting([Output.of("minecraft:gravel", 0.15)], "minecraft:coarse_dirt", "kubejs:basic_mesh")
    $.recipes.createsifter.sifting([Output.of("minecraft:flint", 0.15)], "minecraft:gravel", "kubejs:basic_mesh")

    $.replaceInput({output: "modern_industrialization:fire_clay_dust"}, "modern_industrialization:brick_dust", "tfmg:fireclay_ball")
    $.replaceInput({}, "waystones:warp_stone", "waystones:warp_dust")
    $.replaceInput({output: "waystones:warp_stone"}, "minecraft:emerald", "minecraft:lodestone")
    $.replaceInput({input: "minecraft:stick", mod: "survivalistessentials"}, "minecraft:stick", "#kubejs:simple_handles")
    $.replaceInput({input: "survivalistessentials:plant_string"}, "survivalistessentials:plant_string", "#c:strings")
    $.replaceInput({output: "minecraft:arrow"}, "minecraft:flint", "survivalistessentials:flint_shard")
    $.replaceInput({output: "minecraft:map"}, "minecraft:compass", "#supplementaries:way_signs")
    $.replaceInput({output: "minecraft:lodestone"}, "#c:ingots/tungsten", "create_new_age:fluxuated_magnetite")
    $.replaceInput({output: "hardcore_torches:fire_starter"}, "minecraft:string", "#c:strings")
    $.replaceInput({output: "survivalistessentials:crude_hatchet"}, "survivalistessentials:rock_stone", "minecraft:flint")
    $.replaceInput({input: "create:shaft"}, "create:shaft", "#c:crafting_shaft")
    $.replaceInput({input: "modern_industrialization:brick_dust", output: "minecraft:brick"}, "modern_industrialization:brick_dust", "minecraft:clay_ball")
    $.replaceInput({mod: "ae2", input: "#c:gems/quartz"}, "#c:gems/quartz", "minecraft:quartz")
    $.replaceInput({mod: "remin", input: "#c:gems/quartz"}, "#c:gems/quartz", "minecraft:quartz")
    $.replaceInput({mod: "electrodynamics", input: "#c:gems/quartz"}, "#c:gems/quartz", "#c:gems/rose_quartz")
    $.replaceInput({mod: "create", output: "#c:gems/rose_quartz", input: "#c:gems/quartz"}, "#c:gems/quartz", "minecraft:quartz")
    $.replaceInput({output: "create_new_age:generator_coil"}, "#c:ingots/copper", "#c:em_coil_item")
    $.replaceInput({input: "ae2:quartz_fiber", not: {output: "fiberopticcables:fiber_optic_cable"}}, "ae2:quartz_fiber", "fiberopticcables:fiber_optic_cable")
    $.replaceInput({output: "fiberopticcables:fiber_optic_cable"}, "#c:gems/quartz", "ae2:quartz_fiber")
    $.replaceInput({output: "fiberopticcables:fiber_optic_transformer"}, "#c:gems/quartz", "ae2:quartz_fiber")
    $.replaceInput({output: "operation_starcleave:firmament_rejuvenator"}, Ingredient.of("minecraft:air"), "minecraft:nether_star")

    $.replaceOutput({output: "minecraft:wheat_seeds", mod: "emi_loot"}, "minecraft:wheat", "minecraft:air")
    $.replaceOutput({input: "#c:ingots/aluminum", output: "#c:ingots/bronze"}, "#c:ingots/bronze", "megalosaio:cu_aluminium_bronze_ingot")
    $.replaceOutput({input: "minecraft:granite", output: "minecraft:red_sand"}, "minecraft:red_sand", "biomesoplenty:white_sand")

    $.remove([
        {input: "#c:cobblestones", type: "minecraft:smelting"},
        {input: "#c:ores", type: "minecraft:smelting"},
        {input: "#c:sandstone/blocks", type: "minecraft:smelting"},
        {input: "#c:stones", type: "minecraft:smelting"},
        {input: "#minecraft:logs", output: "minecraft:chest"},
        {input: "#minecraft:terracotta", type: "minecraft:smelting"},
        {input: "ae2:sky_dust", type: "minecraft:smelting"},
        {input: "minecraft:iron_ingot", output: "minecraft:lodestone"},
        {input: "minecraft:raw_iron", output: "minecraft:flint_and_steel"},
        {input: "tfmg:unfired_insulator", type: "minecraft:smelting"},
        {input: "minecraft:glowstone_dust", output: "minecraft:torch"},
        {output: "#c:glass_blocks", type: "minecraft:smelting"},
        {output: "#c:glass_pane", type: "minecraft:smelting"},
        {output: "#c:glass_panes", type: "minecraft:smelting"},
        {output: "#c:glass", type: "minecraft:smelting"},
        {output: "#c:ingots", type: "minecraft:smelting"},
        {output: "#c:nuggets", type: "minecraft:smelting"},
        {output: "minecraft:charcoal", type: "minecraft:smelting"},
        {output: "minecraft:diamond", type: "create:automatic_shapeless"},
        {output: "minecraft:diamond", type: "minecraft:smelting"},
        {output: "minecraft:glowstone_dust", type: "minecraft:smelting"},
        {output: "minecraft:lapis_lazuli", type: "minecraft:smelting"},
        {output: "minecraft:nether_brick", type: "minecraft:smelting"},
        {output: "minecraft:quartz", type: "minecraft:smelting"},
        {output: "minecraft:redstone", type: "minecraft:smelting"},
        {output: "minecraft:terracotta", type: "minecraft:smelting"},
        {output: "minecraft:wooden_pickaxe"},
        {output: "minecraft:wooden_shovel"},
        {output: "modern_industrialization:fire_clay_brick", type: "minecraft:smelting"},
        {output: "modern_industrialization:fire_clay_bricks"},
        {output: "tfmg:fireproof_brick", type: "minecraft:smelting"},
        {output: "tfmg:fireproof_bricks"},
        {output: "waystones:warp_dust"},
        {output: "ae2:silicon"},
        {output: "#c:cobblestones"},
        {output: "minecraft:furnace"},
        {output: "survivalistessentials:book"},
        {output: "create:andesite_alloy", input: "minecraft:andesite"},
        {id: "remin:bronze_ingot_recipe"},
        {id: "remin:aluminium_bronze_ingot_recipe"},
        {id: "minecraft:bricks"},
        {id: "minecraft:bread"},
        {output: "minecraft:blast_furnace"},
        {output: "modern_industrialization:fire_clay_dust"},
        {output: "#create_ironworks:tools/paxels"},
        {output: "#c:dusts", mod: "megalosaio"},
        {output: "minecraft:ender_chest"},
        {output: "moderndynamics:item_pipe", type: "minecraft:crafting", not: {id: "modern_industrialization:steam_age/item_pipe_asbl"}},
        {output: "moderndynamics:fluid_pipe", type: "minecraft:crafting", not: {mod: "moderndynamics"}},
        {output: "create:water_wheel"},
        {output: "create:large_water_wheel"},
        {output: "create:mechanical_crafter"},
        {mod: "electrodynamics", output: "#c:gears"},
        {type: "create:crushing", output: "minecraft:redstone"},
        {output: "create:millstone"}
    ])

    $.shaped(Item.of("create:mechanical_crafter", 9), [
        " A ",
        " B ",
        " C "
    ], {
        A: "minecraft:redstone",
        B: "create:brass_casing",
        C: "minecraft:crafting_table"
    })

    $.recipes.create.mechanical_crafting("create:water_wheel", [
        "SSSSS",
        "SPAPS",
        "SPCPS",
        "SPPPS",
        "SSSSS"
    ], {
        S: "#minecraft:wooden_slabs",
        P: "#minecraft:planks",
        A: "#c:crafting_shaft",
        C: "#create:casing"
    })

    $.recipes.create.mechanical_crafting("create:large_water_wheel", [
        "  SSS  ",
        " SPPPS ",
        "SPAF PS",
        "SPFCFPS",
        "SP F PS",
        " SPPPS ",
        "  SSS  "
    ], {
        S: "#minecraft:wooden_slabs",
        P: "#minecraft:planks",
        A: "#c:crafting_shaft",
        F: "#c:fences",
        C: "#create:casing"
    })

    $.shaped(Item.of("tfmg:fireclay_ball", 3), ["AB ", "BA ", "   "], {A: "minecraft:clay_ball", B: "#c:dusts/bauxite"})
    $.shaped(Item.of("minecraft:blast_furnace"), ["AAA", "ABA", "CCC"], {A: "tfmg:fireproof_bricks", B: "minecraft:furnace", C: "#c:cobblestones"})
    $.shaped(Item.of("createhorsepower:horse_crank"), [" A ", "BAB", "CCC"], {A: "#c:weak_crafting_shaft", B: "survivalistessentials:rock_stone", C: "#c:cobblestones"})
    $.shaped(Item.of("create:millstone"), [" A ", "BCB", "DDD"], {A: "#c:weak_crafting_shaft", B: "survivalistessentials:rock_stone", C: "#c:chests", D: "#c:cobblestones"})

    $.recipes.create.crushing("waystones:warp_dust", "waystones:warp_stone")
    $.recipes.create.milling("waystones:warp_dust", "waystones:warp_stone")
    $.recipes.create.crushing(Output.of("kubejs:andesite_dust", 4), "minecraft:andesite")
    $.recipes.create.milling(Output.of("kubejs:andesite_dust", 4), "minecraft:andesite")
    $.recipes.create.crushing("kubejs:andesite_dust", "createsifter:andesite_pebble")
    $.recipes.create.milling("kubejs:andesite_dust", "createsifter:andesite_pebble")

    $shaped_3x3_blend(Item.of("minecraft:cobblestone"), "#c:clay_balls", "#c:pebbles")
    $shaped_3x3_blend(Item.of("minecraft:bricks"), "#c:clay_balls", "minecraft:brick")
    $shaped_3x3_blend(Item.of("tfmg:fireproof_bricks"), "minecraft:brick", "tfmg:fireclay_ball")
    $shaped_3x3_blend(Item.of("modern_industrialization:fire_clay_dust"), "tfmg:fireclay_ball", "tfmg:fireclay_ball", "#c:dusts/bauxite")
    $shaped_3x3_blend(Item.of("modern_industrialization:fire_clay_bricks"), "modern_industrialization:fire_clay_brick", "tfmg:fireclay_ball")
    $shaped_3x3_blend(Item.of("minecraft:furnace"), "#c:cobblestones", "#c:cobblestones", "#c:furnace_cavity")
    //$shaped_3x3_blend(Item.of("create:andesite_alloy"), "#c:raw_materials/tin", "#c:clay_balls", "minecraft:andesite")

    $.replaceOutput({output: "minecraft:torch"}, "minecraft:torch", "hardcore_torches:unlit_torch")

    $.campfireCooking("minecraft:brick", "minecraft:clay_ball", 0.35, 1800)
    $.campfireCooking("ceramicbucket:ceramic_bucket", "ceramicbucket:unfired_clay_bucket", 0.35, 2400)

    $.blasting("tfmg:fireproof_brick", "tfmg:fireclay_ball", 0.35, 600)

    $.custom({
        "type": "charcoal_pit:blooming",
        "temperature": 900,
        "cooking_time": 1600,
        "experience": 0.7,
        "ingredient": {
            "tag": "c:crushed_raw_materials/copper"
        },
        "result": {
            "count": 1,
            "id": "minecraft:copper_ingot"
        }
    })
    $.custom({
        "type": "charcoal_pit:blooming",
        "temperature": 500,
        "cooking_time": 600,
        "experience": 0.7,
        "ingredient": {
            "tag": "c:crushed_raw_materials/tin"
        },
        "result": {
            "count": 1,
            "id": "chemica:tin_ingot"
        }
    })
    $.custom({
        "type": "charcoal_pit:alloy_mold",
        "category": "misc",
        "ingredients": [{
            "tag": "c:crushed_raw_materials/copper"
        }, {
            "tag": "c:crushed_raw_materials/copper"
        }, {
            "tag": "c:crushed_raw_materials/tin"
        }, {
            "tag": "c:dusts/andesite"
        }, {
            "item": "charcoal_pit:alloy_mold"
        }],
        "result": {
            "item": "create:andesite_alloy"
        },
        "count": 4
    })
})
})()