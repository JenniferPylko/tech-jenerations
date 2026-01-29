const unification = {
    "armors/head": {
        brass: ["create_ironworks:brass_armor_helmet", "create_sa:brass_helmet"],
        emerald: ["project_echo:emeral_d_armor_helmet", "distantlandsmc:emerald_helmet"],
        ruby: ["project_echo:ruby_armor_helmet", "distantlandsmc:ruby_helmet"]
    },
    "armors/chest": {
        brass: ["create_ironworks:brass_armor_chestplate", "create_sa:brass_chestplate"],
        emerald: ["project_echo:emeral_d_armor_chestplate", "distantlandsmc:emerald_chestplate"],
        ruby: ["project_echo:ruby_armor_chestplate", "distantlandsmc:ruby_chestplate"]
    },
    "armors/leg": {
        brass: ["create_ironworks:brass_armor_leggings", "create_sa:brass_leggings"],
        emerald: ["project_echo:emeral_d_armor_leggings", "distantlandsmc:emerald_leggings"],
        ruby: ["project_echo:ruby_armor_leggings", "distantlandsmc:ruby_leggings"]
    },
    "armors/foot": {
        brass: ["create_ironworks:brass_armor_boots", "create_sa:brass_boots"],
        emerald: ["project_echo:emeral_d_armor_boots", "distantlandsmc:emerald_boots"],
        ruby: ["project_echo:ruby_armor_boots", "distantlandsmc:ruby_boots"]
    },
    axes: {
        aluminum: ["megalosaio:aluminium_axe", "tfmg:aluminum_axe"],
        brass: ["create_ironworks:brass_axe", "create_sa:brass_axe"],
        ruby: ["distantlandsmc:ruby_axe", "project_echo:ruby_axe"],
        emerald: ["distantlandsmc:emerald_axe", "project_echo:emeral_d_axe"]
    },
    dusts: {
        antimony: "megalosaio:antimony_dust",
        arsenic: "megalosaio:arsenic_dust",
        bauxite: "tfmg:bauxite_powder",
        emerald: "create_compat_core:emerald_dust",
        gallium: "megalosaio:gallium_dust",
        germanium: "megalosaio:germanium_dust",
        indium: "megalosaio:indium_dust",
        lithium: "megalosaio:lithium_dust",
        magnesium: ["project_echo:magnesium", "megalosaio:magnesium_dust"],
        manganese: "megalosaio:manganese_dust",
        nickel: ["megalosaio:nickel_dust", "remin:nickel_dust"],
        platinum: "megalosaio:platinum_dust",
        ruthenium: "megalosaio:ruthenium_dust",
        silicon: "megalosaio:silicon_dust",
        technetium: "megalosai:technetium_dust",
        vanadium: "megalosaio:vanadium_dust"
    },
    gearboxes: {
        "brass/horizontal": ["createcasing:brass_gearbox", "create_mpnt:brass_gearbox"],
        "brass/vertical": ["createcasing:vertical_brass_gearbox", "create_mpnt:vertical_brass_gearbox"]
    },
    gems: {
        ruby: [
            "remin:ruby",
            "project_echo:ruby",
            "distantlandsmc:ruby"
        ]
    },
    hoes: {
        aluminum: ["megalosaio:aluminium_hoe", "tfmg:aluminum_hoe"],
        brass: ["create_ironworks:brass_hoe", "create_sa:brass_hoe"],
        ruby: ["distantlandsmc:ruby_hoe", "project_echo:ruby_hoe"],
        emerald: ["distantlandsmc:emerald_hoe", "project_echo:emeral_d_hoe"]
    },
    ingots: {
        antimony: "megalosaio:antimony_ingot",
        arsenic: "megalosaio:arsenic_ingot",
        beryllium: "megalosaio:beryllium_ingot",
        germanium: "megalosaio:germanium_ingot",
        lithium: "megalosaio:lithium_ingot",
        magnesium: "megalosaio:magnesium_ingot",
        nickel: ["megalosaio:nickel_ingot", "remin:nickel_ingot"],
        platinum: "megalosaio:platinum_ingot",
        silicon: "megalosaio:silicon_ingot",
        vanadium: "megalosaio:vanadimu_ingot"
    },
    nuggets: {
        antimony: "megalosaio:antimony_nugget",
        arsenic: "megalosaio:arsenic_nugget",
        germanium: "megalosaio:germanium_nugget",
        lithium: "megalosaio:lithium_nugget",
        magnesium: "megalosaio:magnesium_nugget",
        platinum: "megalosaio:platinum_nugget",
        silicon: "megalosaio:silicon_nugget",
        vanadium: "megalosaio:vanadium_nugget"
    },
    ores: {
        aluminum: "megalosaio:aluminium_ore",
        arsenic: "megalosaio:arsenic_ore",
        antimony: "antimony_ore",
        cinnabar: ["remin:cinnabar_ore", "megalosaio:cinnabar_ore"],
        emerald: ["minecraft:emerald_ore", "remin:emerald_ore"],
        germanium: "megalosaio:germanium_ore",
        magnesium: "megalosaio:magnesium_ore",
        nickel: ["remin:nickel_ore", "megalosaio:nickel_ore"],
        ruby: [
            "remin:ruby_ore",
            "project_echo:ruby_ore",
            "distantlandsmc:ruby_ore",
            "distantlandsmc:ruby_deepslate_ore",
            "distantlandsmc:ruby_blackstone_ore"
        ],
        thorium: "create_new_age:thorium_ore",
        platinum: ["remin:platinum_ore", "megalosaio:platinum_ore", "modern_industrialization:platinum_ore"],
        vanadium: "megalosaio:vanadium_ore"
    },
    pickaxes: {
        aluminum: ["megalosaio:aluminium_pickaxe", "tfmg:aluminum_pickaxe"],
        brass: ["create_ironworks:brass_pickaxe", "create_sa:brass_pickaxe"],
        ruby: ["distantlandsmc:ruby_pickaxe", "project_echo:ruby_pickaxe", "distantlandsmc:ruby_shovel"],
        emerald: ["distantlandsmc:emerald_pickaxe", "project_echo:emeral_d_pickaxe"]
    },
    raw_materials: {
        antimony: "megalosaio:raw_antimony",
        arsenic: "megalosaio:raw_arsenic",
        cinnabar: ["remin:cinnabar", "megalosaio:raw_cinnabar"],
        germanium: "megalosaio:raw_germanium",
        magnesium: "megalosaio:raw_magnesium",
        nickel: ["remin:raw_nickel", "megalosaio:raw_nickel"],
        thorium: "create_new_age:thorium"
    },
    shovels: {
        aluminum: ["megalosaio:aluminium_shovel", "tfmg:aluminum_shovel"],
        brass: ["create_ironworks:brass_shovel", "create_sa:brass_shovel"],
        ruby: ["project_echo:ruby_shovel", "remin:ruby_shovel"],
        emerald: ["distantlandsmc:emerald_shovel", "project_echo:emeral_d_shovel"],
        cinnabar: ["remin:cinnabar_block", "megalosaio:raw_cinnabar_block"],
        lignite_coal: ["modern_industrialization:lignite_coal_block", "tfmg:lignite"],
        ruby: [
            "remin:ruby_block",
            "project_echo:ruby_block",
            "distantlandsmc:ruby_block"
        ]
    },
    storage_blocks: {
        aluminum: "remin:aluminium_block",
        antimony: "megalosaio:antimony_block",
        arsenic: "megalosaio:arsenic_block",
        germanium: "megalosaio:germanium_block",
        lithium: "megalosaio:lithium_block",
        nickel: ["megalosaio:nickel_block", "remin:nickel_block"],
        platinum: "megalosaio:platinum_block",
        raw_antimony: "megalosaio:raw_antimony_block",
        raw_arsenic: "megalosaio:raw_arsenic_block",
        raw_germanium: "megalosaio:raw_germanium_block",
        raw_lithium: "megalosaio:raw_lithium_block",
        raw_nickel: ["megalosaio:raw_nickel_block", "remin:raw_nickel_block"],
        raw_platinum: "megalosaio:raw_platinum_block"
    },
    swords: {
        aluminum: ["megalosaio:aluminium_swords", "tfmg:aluminum_sword"],
        brass: ["create_ironworks:brass_sword", "create_sa:brass_shovel"],
        ruby: ["project_echo:ruby_sword", "distantlandsmc:ruby_sword"],
        emerald: ["project_echo:emeral_d_sword", "distantlandsmc:emerald_sword"]
    }
}

const $common_items = () => [
    Ingredient.of("@megalosaio").getItemIds().toArray(),
    Ingredient.of("@project_echo").getItemIds().toArray(),
    Ingredient.of("@remin").getItemIds().toArray(),
    Ingredient.of("@distantlandsmc").getItemIds().toArray()
]

const $tags_common = ($, project_echo_items, remin_items, distantlands_items) => {
    $.add("c:ores", remin_items.filter((v) => v.match(/.*ore.*/)))
    $.add("c:ores", project_echo_items.filter((v) => v.match(/.*ore.*/)))
    $.add("c:ores", distantlands_items.filter((v) => v.match(/.*ore.*/)))

    for (const category of Object.keys(unification)) {
        for (const material of Object.keys(unification[category])) {
            console.log(`Adding unity tags for ${material} ${category}`)
            $.add(`c:${category}`, unification[category][material])
            $.add(`c:${material}`, unification[category][material])
            $.add(`c:${category}/${material}`, unification[category][material])
        }
    }


    $.add("c:planks", "#forge/planks")

    $.add("hardcore_torches:damage_torch_light_items", "hardcore_torches:lit_torch")
    $.add("hardcore_torches:damage_lantern_light_items", "hardcore_torches:lit_torch")

    $.add("minecraft:smelts_to_glass", "#c:sands")
    $.add("minecraft:smelts_to_glass", "#minecraft:sand")

    $.add("amendments:sets_on_fire", "#hardcore_torches:active_torches")
    $.add("lit_on_fire:can_lit_campfire", "#hardcore_torches:active_torches")
}

ServerEvents.tags("item", ($) => {
    const [megalos_items, project_echo_items, remin_items, distantlands_items] = $common_items()

    $tags_common($, project_echo_items, remin_items, distantlands_items)

    $.add("c:ingots", megalos_items.filter((v) => v.match(/.*ingot.*/)))
    $.add("c:nuggets", megalos_items.filter((v) => v.match(/.*nugget.*/)))
    $.add("c:ingots", project_echo_items.filter((v) => v.match(/.*ingot.*/)))
    $.add("c:nuggets", project_echo_items.filter((v) => v.match(/.*nugget.*/)))

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
    $.add("c:clay_balls", "modernindustrialization:fire_clay_dust")
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
})

ServerEvents.tags("block", ($) => {
    const [megalos_items, project_echo_items, remin_items, distantlands_items] = $common_items()

    $tags_common($, project_echo_items, remin_items, distantlands_items)

    $.add("minecraft:needs_diamond_tool", "#waystones:waystones")
    $.add("minecraft:needs_diamond_tool", "waystones:waystone")
    $.add("minecraft:needs_iron_tool", "minecraft:stone")
    $.add("minecraft:incorrect_for_gold_tool", "minecraft:stone")
    $.add("minecraft:incorrect_for_stone_tool", "minecraft:stone")
    $.add("minecraft.incorrect_for_wooden_tool", "minecraft:stone")
    $.add("megalosaio:incorrect_for_technetium_tool", "minecraft:stone")
    $.add("megalosaio:incorrect_for_silver_tool", "minecraft:stone")
    $.remove("megalosaio:needs_aluminium_tool", "minecraft:stone")
})

ServerEvents.tags("structure", ($) => {
    $.add("minecraft:villages", "minecraft:village_plains")
    $.add("minecraft:villages", "natures_spirit:village_desert")
})