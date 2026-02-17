ServerEvents.recipes(($) => {
    const $forEachRecipe = (filter, callback) => {
        try { $.forEachRecipe(filter, (recipe) => {
            try { callback(recipe) } catch (e) {}
        }) } catch (e) {}
    }

    const $shaped_2x2 = (output, input) => $.shaped(output, ["AA ", "AA ", "   "], {A: input})
    const $shaped_3x3_blend = (output, axis_input, diagonal_input, center_input) => $.shaped(output, ["ABA", "BCB", "ABA"], {A: diagonal_input, B: axis_input, C: center_input ?? diagonal_input})

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

    for (const rule of global.replacement_rules.ITEM) {
        for (const original of rule.originals) {
            try { $.replaceInput({input: original}, original, rule.replacement) } catch (e) {}
            try { $.replaceOutput({output: original}, original, rule.replacement) } catch (e) {}
        }
    }

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

    $.replaceOutput({output: "minecraft:wheat_seeds", mod: "emi_loot"}, "minecraft:wheat", "minecraft:air")
    $.replaceOutput({input: "#c:ingots/aluminum", output: "#c:ingots/bronze"}, "#c:ingots/bronze", "megalosaio:cu_aluminium_bronze_ingot")

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
        {output: "ceramicbucket:ceramic_bucket", type: "minecraft:smelting"},
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
        {output: "minecraft:blast_furnace"},
        {output: "modern_industrialization:fire_clay_dust"}
    ])

    $.shaped(Item.of("tfmg:fireclay_ball", 3), ["AB ", "BA ", "   "], {A: "minecraft:clay_ball", B: "#c:dusts/bauxite"})
    $.shaped(Item.of("minecraft:blast_furnace"), ["AAA", "ABA", "CCC"], {A: "tfmg:fireproof_bricks", B: "minecraft:furnace", C: "#c:cobblestones"})
    $.shaped(Item.of("createhorsepower:horse_crank"), [" A ", "BAB", "CCC"], {A: "#c:weak_crafting_shaft", B: "survivalistessentials:rock_stone", C: "#c:cobblestones"})

    $.recipes.create.crushing("waystones:warp_dust", "waystones:warp_stone")

    $shaped_3x3_blend(Item.of("minecraft:cobblestone"), "#c:clay_balls", "#c:pebbles")
    $shaped_3x3_blend(Item.of("minecraft:bricks"), "#c:clay_balls", "minecraft:brick")
    $shaped_3x3_blend(Item.of("tfmg:fireproof_bricks"), "minecraft:brick", "tfmg:fireclay_ball")
    $shaped_3x3_blend(Item.of("modern_industrialization:fire_clay_dust"), "tfmg:fireclay_ball", "tfmg:fireclay_ball", "#c:dusts/bauxite")
    $shaped_3x3_blend(Item.of("modern_industrialization:fire_clay_bricks"), "modern_industrialization:fire_clay_brick", "tfmg:fireclay_ball")
    $shaped_3x3_blend(Item.of("minecraft:furnace"), "minecraft:bricks", "minecraft:bricks", "#c:furnace_cavity")
    $shaped_3x3_blend(Item.of("create:andesite_alloy"), "#c:nuggets/titanium", "#c:nuggets/steel", "minecraft:andesite")

    $.replaceOutput({output: "minecraft:torch"}, "minecraft:torch", "hardcore_torches:unlit_torch")

    $.campfireCooking("minecraft:brick", "#c:clay_balls", 0.35, 12000)

    $.blasting("tfmg:fireproof_brick", "tfmg:fireclay_ball", 0.35, 600)

    $.custom({
        "type": "charcoal_pit:blooming",
        "temperature": 900,
        "cooking_time": 1600,
        "experience": 0.7,
        "ingredient": {
            "tag": "c:storage_blocks/raw_copper"
        },
        "result": {
            "count": 9,
            "id": "remin:copper_ingot"
        }
    })
    $.custom({
        "type": "charcoal_pit:blooming",
        "temperature": 500,
        "cooking_time": 600,
        "experience": 0.7,
        "ingredient": {
            "tag": "c:storage_blocks/raw_tin"
        },
        "result": {
            "count": 9,
            "id": "remin:tin_ingot"
        }
    })
})

BlockEvents.randomTick("minecraft:obsidian", ($) => {
    if (Math.random() < 0.02) {
        const neighbors = [
            $.getBlock().getUp(), $.getBlock().getDown(),
            $.getBlock().getNorth(), $.getBlock().getSouth(),
            $.getBlock().getEast(), $.getBlock().getWest()
        ]
        for (const neighbor of neighbors) {
            if (neighbor.getId().endsWith("nether_portal")) {
                $.getBlock().spawnLightning()
                $.getLevel().destroyBlock($.getBlock().getPos(), false)
            }
        }
    }
})

const $Firmament = Java.loadClass("phanastrae.operation_starcleave.world.firmament.Firmament")
const $FirmamentManipulator = Java.loadClass("phanastrae.operation_starcleave.item.FirmamentManipulatorItem")

BlockEvents.randomTick("operation_starcleave:nucleosyntheseed", ($) => {
    const firmament = $Firmament.fromLevel($.getLevel())
    const x= $.getBlock().getPos().getX()
    const z = $.getBlock().getPos().getZ()
    if (firmament && Math.random() < 0.001 && firmament.getFirmamentRegion(x, z).getDrip(x, z) > 0) {
        $FirmamentManipulator.fractureFirmament(firmament, x, z, $.random)
    }
})
/*
BlockEvents.broken("minecraft:stone", ($) => {
    $.block.set("minecraft:cobblestone")
    $.cancel()
})
*/
//BlockEvents.drops()

LootJS.modifiers(($) => {
    $.addBlockModifier('#c:ores').modifyLoot('#c:raw_materials', (item) => {
        const replacement = AlmostUnified.getVariantItemTarget(item);
        if (replacement.isEmpty()) {
            return item
        }
        replacement.setCount(item.getCount());
        return replacement
    })
    $.addTableModifier(LootType.BLOCK).customAction((context, loot) => {
        //console.log(JSON.stringify(context))
        //console.log(JSON.stringify(loot))
        if (!context.id.getPath().match(/.*wheat.*/) && loot.hasItem("minecraft:wheat_seeds")) {
            loot.remove("minecraft:wheat_seeds")
        }
        if (loot.hasItem("ecological:mixed_seeds")) {
            loot.remove("ecological:mixed_seeds")
        }
    })
    $.addBlockModifier(["#c:stones", "#c:cobblestones", "distantlandsmc:rock"]).replaceLoot("#c:cobblestones", LootEntry.of("survivalistessentials:rock_stone", [0, 4]), false)
    $.addBlockModifier(["distantlandsmc:pabble", "distantlandsmc:pabble_1", "distantlandsmc:pabble_2"]).replaceLoot("distantlandsmc:small_stone", LootEntry.of("survivalistessentials:rock_stone", 1), false)
})

const stone_loot_tables = ["minecraft:blocks/stone", "minecraft:blocks/cobblestone"]

LootJS.lootTables(($) => {
    //for (const table_name of $.getLootTableIds(/.*/)) {
//
//        console.log(table_name)
//    }
    // :(
    $.getBlockTable("minecraft:stone").modifyEntry(($entry) => {
        console.log($entry.item.id)
        $entry.setItem("survivalistessentials:rock_stone")
        $entry.setCount([0, 4])
        return $entry
    })
})

const sleeping_bag_colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "lime",
    "yellow",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
]

PlayerEvents.loggedIn(($) => {
    if (!$.player.stages.has("first_login")) {
        $.player.stages.add("first_login")
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:stick`)
        $.server.runCommandSilent(`give ${$.entity.username} kubejs:guide`)
        $.server.runCommandSilent(`give ${$.entity.username} sleeping_bags:${sleeping_bag_colors[Math.floor(Math.random() * sleeping_bag_colors.length)]}_sleeping_bag`)
        $.server.runCommandSilent(`give ${$.entity.username} hardcore_torches:lit_lantern`)
    }
})

PlayerEvents.respawned(($) => {
    $.server.runCommandSilent(`effect give ${$.entity.username} minecraft:glowing 120`)
})

for (const sleeping_bag of Ingredient.of("@sleeping_bags").getItemIds()) {
    ItemEvents.rightClicked(sleeping_bag, ($) => {
        $.item.setDamage($.item.getDamageValue() + 1)
        if ($.item.getDamageValue() >= $.item.getMaxDamage()) {
            $.item.shrink(1)
        }
    })
}