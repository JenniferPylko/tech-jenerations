// 90% of this is because mod authors don't use the standard tags
// and then there's aluminum.....

const unification = {
    //materials
    "armors/head": {
        brass: ["create_ironworks:brass_armor_helmet", "create_sa:brass_helmet"],
        copper: ["minecraft:copper_helmet", "charcoal_pit:copper_helmet", "create_ironworks:copper_armor_helmet", "create_sa:copper_helmet"],
        emerald: ["project_echo:emeral_d_armor_helmet"],
        ruby: ["project_echo:ruby_armor_helmet"],
        steel: ["remin:steel_armour_helmet", "charcoal_pit:steel_helmet", "create_ironworks:steel_armor_helmet"],
        titanium: ["remin:titanium_armour_helmet", "megalosaio:titanium_helmet"]
    },
    "armors/chest": {
        brass: ["create_ironworks:brass_armor_chestplate", "create_sa:brass_chestplate"],
        copper: ["minecraft:copper_chestplate", "charcoal_pit:copper_chestplate", "create_ironworks:copper_armor_chestplate", "create_sa:copper_chestplate"],
        emerald: ["project_echo:emeral_d_armor_chestplate"],
        ruby: ["project_echo:ruby_armor_chestplate"],
        steel: ["remin:steel_armour_chestplate", "charcoal_pit:steel_chestplate", "create_ironworks:steel_armor_chestplate"],
        titanium: ["remin:titanium_armour_chestplate", "megalosaio:titanium_chestplate"]
    },
    "armors/leg": {
        brass: ["create_ironworks:brass_armor_leggings", "create_sa:brass_leggings"],
        copper: ["minecraft:copper_leggings", "charcoal_pit:copper_leggings", "create_ironworks:copper_armor_leggings", "create_sa:copper_leggings"],
        emerald: ["project_echo:emeral_d_armor_leggings"],
        ruby: ["project_echo:ruby_armor_leggings"],
        steel: ["remin:steel_armour_leggings", "charcoal_pit:steel_leggings", "create_ironworks:steel_armor_leggings"],
        titanium: ["remin:titanium_armour_leggings", "megalosaio:titanium_leggings"]
    },
    "armors/foot": {
        brass: ["create_ironworks:brass_armor_boots", "create_sa:brass_boots"],
        copper: ["minecraft:copper_boots", "charcoal_pit:copper_boots", "create_ironworks:copper_armor_boots", "create_sa:copper_boots"],
        emerald: ["project_echo:emeral_d_armor_boots"],
        ruby: ["project_echo:ruby_armor_boots"],
        steel: ["remin:steel_armour_boots", "charcoal_pit:steel_boots", "create_ironworks:steel_armor_boots"],
        titanium: ["remin:titanium_armour_boots", "megalosaio:titanium_boots"]
    },
    axes: {
        aluminum: ["megalosaio:aluminium_axe", "tfmg:aluminum_axe"],
        brass: ["create_ironworks:brass_axe", "create_sa:brass_axe"],
        copper: ["minecraft:copper_axe", "charcoal_pit:copper_axe", "create_ironworks:copper_axe", "create_sa:copper_axe"],
        emerald: ["project_echo:emeral_d_axe"],
        ruby: ["project_echo:ruby_axe"],
        steel: ["remin:steel_axe", "charcoal_pit:steel_axe", "create_ironworks:steel_axe", "tfmg:steel_axe"],
        titanium: ["remin:titanium_axe", "megalosaio:titanium_axe"]
    },
    crushed_raw_materials: {
        silver: ["create:crushed_raw_silver", "create_more_additions:crushed_raw_silver"],
        tin: ["create:crushed_raw_tin", "create_ironworks:crushed_raw_tin"]
    },
    dusts: {
        aluminum: "megalosaio:aluminium_dust",
        antimony: "megalosaio:antimony_dust",
        arsenic: "megalosaio:arsenic_dust",
        bauxite: "tfmg:bauxite_powder",
        beryllium: "megalosaio:beryllium_dust",
        brass: "megalosaio:cu_brass_dust",
        cadmium: "megalosaio:cadmium_dust",
        calcium: ["megalosaio:calcium_dust", "createchemistry:calcium_dust"],
        chromium: "megalosaio:chromium_dust",
        cobalt: "megalosaio:cobalt_dust",
        coke: "tfmg:coal_coke_dust",
        copper: "megalosaio:copper_dust",
        cupronickel: "megalosaio:ni_cupronickel_dust",
        diamond: "create_compat_core:diamond_dust",
        electrum: "megalosaio:au_electrum_dust",
        emerald: "create_compat_core:emerald_dust",
        ender_pearl: ["electrodynamics:dustendereye", "betterend:ender_dust"],
        gallium: "megalosaio:gallium_dust",
        germanium: "megalosaio:germanium_dust",
        gold: "megalosaio:gold_dust",
        hsla_steel: "megalosaio:fe_hsla_steel_dust",
        indium: "megalosaio:indium_dust",
        invar: "megalosaio:fe_invar_dust",
        iridium: "megalosaio:iridium_dust",
        kanthal: "megalosaio:fe_kanthal_dust",
        lead: "megalosaio:lead_dust",
        lithium: "megalosaio:lithium_dust",
        magnesium: ["project_echo:magnesium", "megalosaio:magnesium_dust"],
        manganese: "megalosaio:manganese_dust",
        molybdenum: "megalosaio:molybdenum_dust",
        netherrack: ["create:cinder_flour", "charcoal_pit:cinder_flour"],
        nickel: ["megalosaio:nickel_dust", "remin:nickel_dust"],
        phosphorus: "megalosaio:phosphorus_dust",
        platinum: "megalosaio:platinum_dust",
        purpurite: "astrological:popped_purpurite",
        ruthenium: "megalosaio:ruthenium_dust",
        salt: "project_echo:salt",
        silicon: "megalosaio:silicon_dust",
        silver: "megalosaio:silver_dust",
        sodium: "megalosaio:sodium_dust",
        stainless_steel: "megalosaio:fe_stainless_steel_dust",
        steel: "megalosaio:fe_steel_dust",
        sulfur: "createchemistry:sulfur_dust",
        tantalum: "megalosaio:tantalum_dust",
        technetium: "megalosaio:technetium_dust",
        thorianite: "nuclearscience:thorianite_dust",
        tin: "megalosaio:tin_dust",
        titanium: "megalosaio:titanium_dust",
        tungsten: "megalosaio:tungsten_dust",
        vanadium: "megalosaio:vanadium_dust",
        yttrium: "megalosaio:yttrium_dust",
        zinc: "megalosaio:zinc_dust"
    },
    gearboxes: {
        "brass/horizontal": ["createcasing:brass_gearbox", "create_mpnt:brass_gearbox"],
        "brass/vertical": ["createcasing:vertical_brass_gearbox", "create_mpnt:vertical_brass_gearbox"]
    },
    gems: {
        rose_quartz: ["remin:rose_quartz", "create:rose_quartz"],
        ruby: [
            "remin:ruby",
            "project_echo:ruby"
        ]
    },
    hoes: {
        aluminum: ["megalosaio:aluminium_hoe", "tfmg:aluminum_hoe"],
        brass: ["create_ironworks:brass_hoe", "create_sa:brass_hoe"],
        copper: ["minecraft:copper_hoe", "charcoal_pit:copper_hoe", "create_ironworks:copper_hoe", "create_sa:copper_hoe"],
        emerald: ["project_echo:emeral_d_hoe"],
        ruby: ["project_echo:ruby_hoe"],
        steel: ["remin:steel_hoe", "charcoal_pit:steel_hoe", "create_ironworks:steel_hoe", "tfmg:steel_hoe"],
        titanium: ["remin:titanium_hoe", "megalosaio:titanium_hoe"]
    },
    ingots: {
        antimony: "megalosaio:antimony_ingot",
        arsenic: "megalosaio:arsenic_ingot",
        beryllium: "megalosaio:beryllium_ingot",
        brass: "megalosaio:cu_brass_ingot",
        bronze: "megalosaio:cu_bronze_ingot",
        cadmium: "megalosaio:cadmium_ingot",
        chromium: "megalosaio:chromium_ingot",
        cobalt: ["megalosaio:cobalt_ingot", "project_echo:cobalt_ingot"],
        cupronickel: "megalosaio:ni_cupronickel_nugget",
        electrum: "megalosaio:au_electrum_ingot",
        germanium: "megalosaio:germanium_ingot",
        hsla_steel: "megalosaio:fe_hsla_steel_ingot",
        kanthal: "megalosaio:fe_kanthal_ingot",
        invar: "megalosaio:fe_invar_ingot",
        iridium: "megalosaio:iridium_ingot",
        lead: "megalosaio:lead_ingot",
        lithium: "megalosaio:lithium_ingot",
        magnesium: "megalosaio:magnesium_ingot",
        molybdenum: "megalosaio:molybdenum_ingot",
        nickel: ["megalosaio:nickel_ingot", "remin:nickel_ingot"],
        platinum: "megalosaio:platinum_ingot",
        rose_gold: ["megalosaio:au_rose_gold_ingot", "project_echo:rose_gold_ingot"],
        silicon: "megalosaio:silicon_ingot",
        silver: "megalosaio:silver_ingot",
        sodium: "megalosaio:sodium_ingot",
        stainless_steel: "megalosaio:fe_stainless_steel_ingot",
        steel: "megalosaio:fe_steel_ingot",
        tantalum: "megalosaio:tantalum_ingot",
        tin: "megalosaio:tin_ingot",
        titanium: "megalosaio:titanium_ingot",
        tungsten: "megalosaio:tungsten_ingot",
        vanadium: "megalosaio:vanadium_ingot",
        zinc: "megalosaio:zinc_ingot"
    },
    lumps: {
        coke: ["charcoal_pit:coke", "electrodynamics:coalcoke", "tfmg:coal_coke", "modern_industrialization:coke"]
    },
    nuggets: {
        antimony: "megalosaio:antimony_nugget",
        arsenic: "megalosaio:arsenic_nugget",
        beryllium: "megalosaio:beryllium_nugget",
        brass: "megalosaio:cu_brass_nugget",
        chromium: "megalosaio:chromium_nugget",
        cobalt: ["megalosaio:cobalt_nugget", "project_echo:cobalt_nugget"],
        cupronickel: "megalosaio:ni_cupronickel_nugget",
        electrum: "megalosaio:au_electrum_nugget",
        germanium: "megalosaio:germanium_nugget",
        hsla_steel: "megalosaio:fe_hsla_steel_nugget",
        invar: "megalosaio:fe_invar_nugget",
        iridium: "megalosaio:iridium_nugget",
        kanthal: "megalosaio:fe_kanthal_nugget",
        lead: "megalosaio:lead_nugget",
        lithium: "megalosaio:lithium_nugget",
        magnesium: "megalosaio:magnesium_nugget",
        molybdenum: "megalosaio:molybdenum_nugget",
        platinum: "megalosaio:platinum_nugget",
        rose_gold: ["megalosaio:au_rose_gold_nugget", "project_echo:rose_gold_nugget"],
        silicon: "megalosaio:silicon_nugget",
        silver: "megalosaio:silver_nugget",
        stainless_steel: "megalosaio:fe_stainless_steel_nugget",
        steel: "megalosaio:fe_steel_nugget",
        tantalum: "megalosaio:tantalum_nugget",
        tin: "megalosaio:tin_nugget",
        titanium: "megalosaio:titanium_nugget",
        tungsten: "megalosaio:tungsten_nugget",
        vanadium: "megalosaio:vanadium_nugget",
        zinc: "megalosaio:zinc_nugget"
    },
    ores: {
        amber: "betterend:amber_ore",
        bauxite: ["megalosaio:aluminium_ore", "#c:ores/aluminum", "#c:ores/aluminium"],
        antimony: ["megalosaio:antimony_ore", "chemica:deepslate_antimony_ore"],
        arsenic: "megalosaio:arsenic_ore",
        chromium: ["remin:chromite_ore", "megalosaio:chromium_ore", "chemica:deepslate_chromite_ore"],
        cinnabar: ["remin:cinnabar_ore", "megalosaio:cinnabar_ore"],
        cobalt: ["project_echo:cobalt_ore", "megalosaio:cobalt_ore", "chemica:deepslate_cobalt_ore"],
        electrum: ["remin:silver_gold_ore"],
        emerald: ["minecraft:emerald_ore", "remin:emerald_ore"],
        fluorite: "chemica:deepslate_fluorite_ore",
        germanium: "megalosaio:germanium_ore",
        iridium: "megalosaio:iridium_ore",
        lapis: "betternether:nether_lapis_ore",
        lead: ["tfmg:galena", "megalosaio:lead_ore", "remin:end_lead_ore"],
        lithium: ["megalosaio:lithium_ore"],
        magnesium: "megalosaio:magnesium_ore",
        molybdenum: ["megalosaio:molybdenum_ore", "chemica:deepslate_molybdenum_ore"],
        nickel: ["remin:nickel_ore", "megalosaio:nickel_ore"],
        phosphorus: ["megalosaio:phosphorus_ore", "chemica:phosphorus_ore", "chemica:deepslate_phosphorus_ore"],
        platinum: ["remin:platinum_ore", "megalosaio:platinum_ore", "modern_industrialization:platinum_ore", "chemica:deepslate_platinum_ore"],
        redstone: "betternether:nether_redstone_ore",
        ruby: [
            "remin:ruby_ore",
            "project_echo:ruby_ore",
            "betternether:nether_ruby_ore"
        ],
        silver: ["create_more_additions:silver_ore", "create_more_additions:deepslate_silver_ore", "megalosaio:silver_ore", "chemica:deepslate_silver_ore"],
        sulfur: ["createchemistry:sulfur_ore", "createchemistry:deepslate_sulfur_ore"],
        thorianite: "create_new_age:thorium_ore",
        tin: ["remin:tin_ore", "megalosaio:tin_ore", "chemica:tin_ore", "chemica:deepslate_tin_ore"],
        titanium: ["megalosaio:titanium_ore", "chemica:deepslate_rutile_ore"],
        tungsten: "megalosaio:tungsten_ore",
        vanadium: ["megalosaio:vanadium_ore", "chemica:deepslate_vanadium_ore"],
        zinc: "megalosaio:zinc_ore"
    },
    pickaxes: {
        aluminum: ["megalosaio:aluminium_pickaxe", "tfmg:aluminum_pickaxe"],
        brass: ["create_ironworks:brass_pickaxe", "create_sa:brass_pickaxe"],
        bronze: ["charcoal_pit:bronze_pickaxe", "remin:bronze_pickaxe", "create_ironworks:bronze_pickaxe"],
        copper: ["minecraft:copper_pickaxe", "charcoal_pit:copper_pickaxe", "create_ironworks:copper_pickaxe", "create_sa:copper_pickaxe"],
        emerald: ["project_echo:emeral_d_pickaxe"],
        ruby: ["project_echo:ruby_pickaxe"],
        steel: ["remin:steel_pickaxe", "charcoal_pit:steel_pickaxe", "create_ironworks:steel_pickaxe", "tfmg:steel_pickaxe"],
        titanium: ["remin:titanium_pickaxe", "megalosaio:titanium_pickaxe"]
    },
    plates: {
        andesite_alloy: ["createdeco:andesite_sheet", "create_mpnt:andesite_alloy_sheet"]
    },
    raw_materials: {
        antimony: "megalosaio:raw_antimony",
        arsenic: "megalosaio:raw_arsenic",
        bauxite: ["megalosaio:raw_aluminium", "umines:bauxite"],
        chromium: ["remin:chromite", "megalosaio:raw_chromium", "umines:chromite"],
        cinnabar: ["remin:cinnabar", "megalosaio:raw_cinnabar"],
        cobaltite: ["megalosaio:raw_cobalt", "chemica:raw_cobalt"],
        germanium: "megalosaio:raw_germanium",
        iridium: "megalosaio:raw_iridium",
        lead: ["remin:galena", "umines:galena", "megalosaio:raw_lead"],
        lithium: "megalosaio:raw_lithium",
        magnesium: "megalosaio:raw_magnesium",
        malachite: ["remin:malachite", "umines:malachite"],
        molybdenum: "megalosaio:raw_molybdenum",
        nickel: ["remin:raw_nickel", "megalosaio:raw_nickel"],
        platinum: "megalosaio:raw_platinum",
        phosphorus: "megalosaio:raw_phosphorus",
        purpurite: "astrological:purpurite_blob",
        salt: "umines:halite",
        silver: ["create_more_additions:raw_silver", "megalosaio:raw_silver"],
        thorianite: "create_new_age:thorium",
        tin: ["remin:raw_tin", "megalosaio:raw_tin", "umines:cassiterite"],
        titanium: ["megalosaio:raw_titanium", "umines:rutile"],
        tungsten: ["megalosaio:raw_tungsten"],
        vanadium: "megalosaio:raw_vanadium",
        zinc: "megalosaio:raw_zinc"
    },
    rods: {
        steel: "project_echo:steel_stick"
    },
    shards: {
        ender: ["create_compat_core:ender_shard", "betterend:ender_shard"]
    },
    shovels: {
        aluminum: ["megalosaio:aluminium_shovel", "tfmg:aluminum_shovel"],
        brass: ["create_ironworks:brass_shovel", "create_sa:brass_shovel"],
        cinnabar: ["remin:cinnabar_block", "megalosaio:raw_cinnabar_block"],
        copper: ["minecraft:copper_shovel", "charcoal_pit:copper_shovel", "create_ironworks:copper_shovel", "create_sa:copper_shovel"],
        emerald: ["project_echo:emeral_d_shovel"],
        ruby: ["project_echo:ruby_shovel", "remin:ruby_shovel"],
        lignite_coal: ["modern_industrialization:lignite_coal_block", "tfmg:lignite"],
        ruby: [
            "remin:ruby_block",
            "project_echo:ruby_block"
        ],
        steel: ["remin:steel_shovel", "charcoal_pit:steel_shovel", "create_ironworks:steel_shovel", "tfmg:steel_shovel"],
        titanium: ["remin:titanium_shovel", "megalosaio:titanium_shovel"]
    },
    slabs: {
        white_chalk: ["natures_spirit:white_chalk_slab", "regions_unexplored:chalk_slab"]
    },
    stairs: {
        white_chalk: ["natures_spirit:white_chalk_stairs", "regions_unexplored:chalk_stairs"]
    },
    storage_blocks: {
        aluminum: ["remin:aluminium_block", "megalosaio:aluminium_block"],
        amethyst: ["minecraft:amethyst_block", "project_echo:amethyst_block", "remin:amethyst_block"],
        antimony: "megalosaio:antimony_block",
        arsenic: "megalosaio:arsenic_block",
        ash: ["charcoal_pit:ash_block", "regions_unexplored:ash"],
        bauxite: ["tfmg:bauxite", "megalosaio:raw_aluminium_block"],
        beryllium: "megalosaio:beryllium_block",
        brass: "megalosaio:cu_brass_block",
        chromium: "megalosaio:chromium_block",
        cobalt: ["megalosaio:cobalt_block", "project_echo:cobalt_block"],
        cobaltite: "megalosaio:raw_cobalt_block",
        coke: "tfmg:coal_coke_block",
        cupronickel: "megalosaio:ni_cupronickel_block",
        electrum: "megalosaio:au_electrum_block",
        germanium: "megalosaio:germanium_block",
        hsla_steel: ["megalosaio:fe_hsla_steel_block", "electrodynamics:resourceblockhslasteel"],
        invar: "megalosaio:fe_invar_block",
        iridium: "megalosaio:iridium_block",
        kanthal: "megalosaio:fe_kanthal_block",
        lead: "megalosaio:lead_block",
        lithium: "megalosaio:lithium_block",
        magnesium: ["project_echo:magnesium_block", "megalosaio:magnesium_block"],
        nickel: ["megalosaio:nickel_block", "remin:nickel_block"],
        obsidian: ["remin:obsidian", "minecraft:obsidian"],
        platinum: ["megalosaio:platinum_block", "chemica:platinum_block"],
        purpurite: "astrological:purpurite",
        rose_gold: ["megalosaio:au_rose_gold_block", "project_echo:rose_gold_block"],
        rose_quartz: ["remin:rose_quartz_block", "create_ironworks:rose_quartz_block", "create:rose_quartz_block"],
        silver: "megalosaio:silver_block",
        stainless_steel: ["megalosaio:fe_stainless_steel_block", "electrodynamics:resourceblockstainlesssteel"],
        steel: ["megalosaio:fe_steel_block", "project_echo:steel_block"],
        sulfur: "tfmg:sulfur",
        thorianite: ["nuclearscience:raworeblockthorium"],
        titanium: ["megalosaio:titanium_block"],
        tungsten: ["megalosaio:tungsten_block", "remin:tungsten_block"],
        volcanic_ash: ["northstar:volcanic_ash", "regions_unexplored:volcanic_ash"],
        white_chalk: ["natures_spirit:white_chalk", "regions_unexplored:chalk"],
        yttrium: "megalosaio:yttrium_block",
        zinc: "megalosaio:zinc_block",
        raw_antimony: "megalosaio:raw_antimony_block",
        raw_arsenic: "megalosaio:raw_arsenic_block",
        raw_chromium: ["remin:chromite_block", "megalosaio:raw_chromium_block"],
        raw_germanium: "megalosaio:raw_germanium_block",
        raw_iridium: "megalosaio:raw_iridium_block",
        raw_lead: ["electrodynamics:raworeblocklead", "megalosaio:raw_lead_block"],
        raw_lithium: "megalosaio:raw_lithium_block",
        raw_nickel: ["megalosaio:raw_nickel_block", "remin:raw_nickel_block"],
        raw_platinum: ["megalosaio:raw_platinum_block", "chemica:raw_platinum_block"],
        raw_silver: ["electrodynamics:raworeblocksilver", "create_more_additions:raw_silver_block", "megalosaio:raw_silver_block"],
        raw_tin: ["remin:raw_tin_block", "megalosaio:raw_tin_block", "electrodynamics:raworeblocktin"],
        raw_titanium: ["megalosaio:raw_titanium_block", "electrodynamics:raworeblocktitanium"],
        raw_tungsten: "megalosaio:raw_tungsten_block",
        raw_zinc: "megalosaio:raw_zinc_block"
    },
    swords: {
        aluminum: ["megalosaio:aluminium_sword", "tfmg:aluminum_sword"],
        brass: ["create_ironworks:brass_sword", "create_sa:brass_sword"],
        copper: ["minecraft:copper_sword", "charcoal_pit:copper_sword", "create_ironworks:copper_sword", "create_sa:copper_sword"],
        emerald: ["project_echo:emeral_d_sword"],
        ruby: ["project_echo:ruby_sword"],
        steel: ["remin:steel_sword", "charcoal_pit:steel_sword", "create_ironworks:steel_sword", "tfmg:steel_sword"],
        titanium: ["remin:titanium_sword", "megalosaio:titanium_sword"]
    },
    //compute tiers
    circuits: {
        analog: [
            "create_new_age:copper_circuit",
            "electrodynamics:circuitbasic",
            "modern_industrialization:analog_circuit",
            "tfmg:circuit_board",
            "trainutilities:processing_unit"
        ],
        electronic: [
            "ae2:logic_processor",
            "chemica:electronic_circuit",
            "electrodynamics:circuitadvanced",
            "modern_industrialization:electronic_circuit",
            "northstar:circuit"
        ],
        digital: [
            "ae2:calculation_processor",
            "chemica:advanced_circuit_board",
            "electrodynamics:circuitelite",
            "modern_industrialization:digital_circuit",
            "northstar:advanced_circuit"
        ],
        quantum: [
            "ae2:engineering_processor",
            "electrodynamics:circuitultimate",
            "modern_industrialization:quantum_circuit"
        ]
    },
    circuit_boards: {
        analog: [
            "create_new_age:blank_circuit",
            "modern_industrialization:analog_circuit_board",
            "tfmg:etched_circuit_board"
        ],
        electronic: [
            "ae2:printed_logic_processor",
            "chemica:etched_pvc_circuit_board",
            "modern_industrialization:electronic_circuit_board"
        ],
        digital: [
            "ae2:printed_calculation_processor",
            "chemica:etched_epoxy_circuit_board",
            "modern_industrialization:digital_circuit_board"
        ],
        quantum: [
            "ae2:printed_engineering_processor",
            "modern_industrialization:quantum_circuit_board"
        ]
    },
    //components
    fluid_pipes: {
        aluminum: ["tfmg:aluminum_pipe"],
        brass: ["create_mpnt:brass_fluid_pipe", "tfmg:brass_pipe"],
        copper: ["create:fluid_pipe", "moderndynamics:fluid_pipe"],
        gold: "create_mpnt:golden_fluid_pipe",
        iron: "create_mpnt:iron_fluid_pipe",
        plastic: "tfmg:plastic_pipe"
    },
    item_pipes: {
        iron: ["modern_dynamics:iron_pipe"]
    }
}

const $common_items = () => [
    Ingredient.of("@megalosaio").getItemIds().toArray(),
    Ingredient.of("@project_echo").getItemIds().toArray(),
    Ingredient.of("@remin").getItemIds().toArray()
]

const $tags_common = ($, project_echo_items, remin_items) => {
    $.add("c:ores", remin_items.filter((v) => v.match(/.*ore.*/)))
    $.add("c:ores", project_echo_items.filter((v) => v.match(/.*ore.*/)))

    for (const category of Object.keys(unification)) {
        for (const material of Object.keys(unification[category])) {
            console.log(`Adding unity tags for ${material} ${category}`)
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
}

ServerEvents.tags("item", ($) => {
    const [megalos_items, project_echo_items, remin_items] = $common_items()

    $tags_common($, project_echo_items, remin_items)

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

    $.add("c:unfinished_resistors", "tfmg:unfinished_resistor")
    $.add("c:unfinished_resistors", "modern_industrialization:resistor")
    $.add("c:transistors", "trainutilities:transistor")
    $.add("c:transistors", "modern_industrialization:transistor")
    $.add("c:transistors", "tfmg:transistor_item")
})

ServerEvents.tags("block", ($) => {
    const [megalos_items, project_echo_items, remin_items] = $common_items()

    $tags_common($, project_echo_items, remin_items)

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
})

ServerEvents.tags("structure", ($) => {
    $.add("minecraft:villages", "minecraft:village_plains")
    $.add("minecraft:villages", "natures_spirit:village_desert")
})