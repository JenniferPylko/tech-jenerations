// 90% of this is because mod authors don't use the standard tags
// and then there's alumin(i)um.....

global.unification = {
    //materials
    "armors/head": {
        brass: ["create_ironworks:brass_armor_helmet", "create_sa:brass_helmet"],
        copper: ["minecraft:copper_helmet", "charcoal_pit:copper_helmet", "create_ironworks:copper_armor_helmet", "create_sa:copper_helmet"],
        steel: ["remin:steel_armour_helmet", "charcoal_pit:steel_helmet", "create_ironworks:steel_armor_helmet"],
        titanium: ["remin:titanium_armour_helmet", "megalosaio:titanium_helmet"]
    },
    "armors/chest": {
        brass: ["create_ironworks:brass_armor_chestplate", "create_sa:brass_chestplate"],
        copper: ["minecraft:copper_chestplate", "charcoal_pit:copper_chestplate", "create_ironworks:copper_armor_chestplate", "create_sa:copper_chestplate"],
        steel: ["remin:steel_armour_chestplate", "charcoal_pit:steel_chestplate", "create_ironworks:steel_armor_chestplate"],
        titanium: ["remin:titanium_armour_chestplate", "megalosaio:titanium_chestplate"]
    },
    "armors/leg": {
        brass: ["create_ironworks:brass_armor_leggings", "create_sa:brass_leggings"],
        copper: ["minecraft:copper_leggings", "charcoal_pit:copper_leggings", "create_ironworks:copper_armor_leggings", "create_sa:copper_leggings"],
        steel: ["remin:steel_armour_leggings", "charcoal_pit:steel_leggings", "create_ironworks:steel_armor_leggings"],
        titanium: ["remin:titanium_armour_leggings", "megalosaio:titanium_leggings"]
    },
    "armors/foot": {
        brass: ["create_ironworks:brass_armor_boots", "create_sa:brass_boots"],
        copper: ["minecraft:copper_boots", "charcoal_pit:copper_boots", "create_ironworks:copper_armor_boots", "create_sa:copper_boots"],
        steel: ["remin:steel_armour_boots", "charcoal_pit:steel_boots", "create_ironworks:steel_armor_boots"],
        titanium: ["remin:titanium_armour_boots", "megalosaio:titanium_boots"]
    },
    axes: {
        aluminum: ["megalosaio:aluminium_axe", "tfmg:aluminum_axe"],
        brass: ["create_ironworks:brass_axe", "create_sa:brass_axe"],
        copper: ["minecraft:copper_axe", "charcoal_pit:copper_axe", "create_ironworks:copper_axe", "create_sa:copper_axe"],
        steel: ["remin:steel_axe", "charcoal_pit:steel_axe", "create_ironworks:steel_axe", "tfmg:steel_axe"],
        titanium: ["remin:titanium_axe", "megalosaio:titanium_axe"]
    },
    crushed_raw_materials: {
        silver: ["create:crushed_raw_silver", "create_more_additions:crushed_raw_silver"],
        tin: ["create:crushed_raw_tin", "create_ironworks:crushed_raw_tin"]
    },
    dusts: {
        aluminum: "megalosaio:aluminium_dust",
        antimony: ["megalosaio:antimony_dust", "chemicalscience:dust_antimony"],
        arsenic: "megalosaio:arsenic_dust",
        barium: ["megalosaio:barium_dust"],
        bauxite: "tfmg:bauxite_powder",
        beryllium: "megalosaio:beryllium_dust",
        bismuth: ["megalosaio:bismuth_dust"],
        brass: "megalosaio:cu_brass_dust",
        cadmium: ["megalosaio:cadmium_dust", "chemicalscience:dust_cadmium"],
        calcium: ["megalosaio:calcium_dust", "createchemistry:calcium_dust"],
        cesium: ["megalosaio:caesium_dust"],
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
        hafnium: ["megalosaio:hafnium_dust", "chemicalscience:dust_hafnium"],
        hsla_steel: "megalosaio:fe_hsla_steel_dust",
        indium: "megalosaio:indium_dust",
        invar: "megalosaio:fe_invar_dust",
        iridium: "megalosaio:iridium_dust",
        kanthal: "megalosaio:fe_kanthal_dust",
        lead: "megalosaio:lead_dust",
        lithium: "megalosaio:lithium_dust",
        magnesium: ["megalosaio:magnesium_dust"],
        manganese: "megalosaio:manganese_dust",
        molybdenum: "megalosaio:molybdenum_dust",
        netherrack: ["create:cinder_flour", "charcoal_pit:cinder_flour"],
        nickel: ["megalosaio:nickel_dust", "remin:nickel_dust"],
        niobium: ["megalosaio:niobium_dust"],
        osmium: ["megalosaio:osmium_dust", "chemicalscience:dust_osmium"],
        palladium: ["megalosaio:palladium_dust"],
        phosphorus: "megalosaio:phosphorus_dust",
        platinum: "megalosaio:platinum_dust",
        purpurite: "astrological:popped_purpurite",
        rhenium: ["megalosaio:rhenium_dust", "chemicalscience:dust_rhenium"],
        rubidium: ["megalosaio:rubidium_dust", "chemicalscience:dust_rubidium"],
        ruthenium: "megalosaio:ruthenium_dust",
        scandium: ["megalosaio:scandium_dust"],
        sculk: "create_deep_dark:sculk_flour",
        silicon: "megalosaio:silicon_dust",
        silver: "megalosaio:silver_dust",
        sodium: "megalosaio:sodium_dust",
        stainless_steel: "megalosaio:fe_stainless_steel_dust",
        steel: "megalosaio:fe_steel_dust",
        strontium: "megalosaio:strontium_dust",
        sulfur: ["createchemistry:sulfur_dust", "hybrid-aquatic:sulfur"],
        tantalum: "megalosaio:tantalum_dust",
        technetium: "megalosaio:technetium_dust",
        tellurium: ["megalosaio:tellurium_dust", "chemicalscience:dust_tellurium"],
        thorianite: "nuclearscience:thorianite_dust",
        tin: "megalosaio:tin_dust",
        titanium: "megalosaio:titanium_dust",
        tungsten: "megalosaio:tungsten_dust",
        tungsten_carbide: ["chemicalscience:dust_tungstencarbide"],
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
        ruby: ["remin:ruby"]
    },
    hoes: {
        aluminum: ["megalosaio:aluminium_hoe", "tfmg:aluminum_hoe"],
        brass: ["create_ironworks:brass_hoe", "create_sa:brass_hoe"],
        copper: ["minecraft:copper_hoe", "charcoal_pit:copper_hoe", "create_ironworks:copper_hoe", "create_sa:copper_hoe"],
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
        cobalt: ["megalosaio:cobalt_ingot"],
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
        osmium: ["megalosaio:osmium_ingot"],
        palladium: ["megalosaio:paladium_ingot"],
        platinum: "megalosaio:platinum_ingot",
        rose_gold: ["megalosaio:au_rose_gold_ingot"],
        silicon: "megalosaio:silicon_ingot",
        silver: "megalosaio:silver_ingot",
        sodium: "megalosaio:sodium_ingot",
        stainless_steel: "megalosaio:fe_stainless_steel_ingot",
        steel: "megalosaio:fe_steel_ingot",
        tantalum: "megalosaio:tantalum_ingot",
        tin: "megalosaio:tin_ingot",
        titanium: "megalosaio:titanium_ingot",
        tungsten: "megalosaio:tungsten_ingot",
        tungsten_carbide: ["chemicalscience:ingot_tungstencarbide"],
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
        cobalt: ["megalosaio:cobalt_nugget"],
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
        rose_gold: ["megalosaio:au_rose_gold_nugget"],
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
        cobalt: ["megalosaio:cobalt_ore", "chemica:deepslate_cobalt_ore"],
        electrum: [],
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
        ruby: ["remin:ruby_ore","betternether:nether_ruby_ore"],
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
        silicon: ["megalosaio:raw_silicon"],
        silver: ["create_more_additions:raw_silver", "megalosaio:raw_silver"],
        thorianite: ["create_new_age:thorium", "electrodynamics:raworethorium"],
        tin: ["remin:raw_tin", "megalosaio:raw_tin", "umines:cassiterite"],
        titanium: ["megalosaio:raw_titanium", "umines:rutile"],
        tungsten: ["megalosaio:raw_tungsten"],
        vanadium: "megalosaio:raw_vanadium",
        zinc: "megalosaio:raw_zinc"
    },
    shards: {
        ender: ["create_compat_core:ender_shard", "betterend:ender_shard"]
    },
    shovels: {
        aluminum: ["megalosaio:aluminium_shovel", "tfmg:aluminum_shovel"],
        brass: ["create_ironworks:brass_shovel", "create_sa:brass_shovel"],
        cinnabar: ["remin:cinnabar_block", "megalosaio:raw_cinnabar_block"],
        copper: ["minecraft:copper_shovel", "charcoal_pit:copper_shovel", "create_ironworks:copper_shovel", "create_sa:copper_shovel"],
        ruby: ["remin:ruby_shovel"],
        lignite_coal: ["modern_industrialization:lignite_coal_block", "tfmg:lignite"],
        ruby: ["remin:ruby_block"],
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
        amethyst: ["minecraft:amethyst_block", "remin:amethyst_block"],
        antimony: "megalosaio:antimony_block",
        arsenic: "megalosaio:arsenic_block",
        ash: ["charcoal_pit:ash_block", "regions_unexplored:ash"],
        basalt: ["minecraft:basalt", "charcoal_pit:basalt"],
        basalt_smooth: ["minecraft:smooth_basalt", "charcoal_pit:basalt_polished"],
        basalt_pillar: ["minecraft:polished_basalt", "charcoal_pit:basalt_pillar"],
        bauxite: ["tfmg:bauxite", "megalosaio:raw_aluminium_block"],
        beryllium: "megalosaio:beryllium_block",
        brass: "megalosaio:cu_brass_block",
        bronze: "megalosaio:cu_bronze_block",
        chromium: "megalosaio:chromium_block",
        cobalt: ["megalosaio:cobalt_block"],
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
        magnesium: ["megalosaio:magnesium_block"],
        nickel: ["megalosaio:nickel_block", "remin:nickel_block"],
        obsidian: ["remin:obsidian", "minecraft:obsidian"],
        platinum: ["megalosaio:platinum_block", "chemica:platinum_block"],
        purpurite: "astrological:purpurite",
        rose_gold: ["megalosaio:au_rose_gold_block"],
        rose_quartz: ["remin:rose_quartz_block", "create_ironworks:rose_quartz_block", "create:rose_quartz_block"],
        silver: "megalosaio:silver_block",
        stainless_steel: ["megalosaio:fe_stainless_steel_block", "electrodynamics:resourceblockstainlesssteel"],
        steel: ["megalosaio:fe_steel_block"],
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
        steel: ["remin:steel_sword", "charcoal_pit:steel_sword", "create_ironworks:steel_sword", "tfmg:steel_sword"],
        titanium: ["remin:titanium_sword", "megalosaio:titanium_sword"]
    },/*
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
    },*/
    //components
    components: {
        fluid_pipes: ["tfmg:aluminum_pipe", "create_mpnt:brass_fluid_pipe",
            "tfmg:brass_pipe", "create:fluid_pipe", "moderndynamics:fluid_pipe",
            "create:fluid_pipe", "create_mpnt:golden_fluid_pipe",
            "create_mpnt:iron_fluid_pipe", "create_mpnt:zinc_fluid_pipe",
            "create_mpnt:rose_golden_fluid_pipe", "tfmg:plastic_pipe"],
        item_pipes: ["moderndynamics:item_pipe", "#modern_industrialization:item_pipes"]
    },
    //colors
    pink: {
        sand: ["natures_spirit:pink_sand", "biomeswevegone:pink_sand"]
    },
    white: {
        sand: ["biomesoplenty:white_sand", "biomeswevegone:white_sand"]
    },
    black: {
        sand: ["biomesoplenty:black_sand", "biomeswevegone:black_sand"]
    }
}

global.manual_unification = {
    block: [],
    item: [],
    // almostunified said unifying fluids is hard
    // i said i have a theoretical degree in physics
    fluid: [{
        main: "chemica:ethanol",
        replace: [
            "electrodynamics:fluidethanol",
            "modern_industrialization:ethanol",
            "createchemistry:ethanol",
            "createaddition:bioethanol",
            "charcoal_pit:ethanol",
            "createdieselgenerators:ethanol",
            "northstar:biofuel"
        ]
    }, {
        main: "chemicalscience:methanol",
        replace: ["nuclearscience:methanol"]
    }, {
        main: "modern_industrialization:steam",
        replace: ["chemica:steam"]
    }, {
        main: "northstar:hydrogen",
        replace: ["tfmg:hydrogen", "modern_industrialization:hydrogen", "chemica:hydrogen_fuel"]
    }, {
        main: "northstar:liquid_hydrogen",
        replace: ["chemica:liquid_hydrogen", "electrodynamics:fluidhydrogen"]
    }, {
        main: "modern_industrialization:helium",
        replace: ["chemica:helium", "chemicalscience:helium"]
    }, {
        main: "chemica:carbon_monoxide",
        replace: ["chemicalscience:carbonmonoxide"]
    }, {
        main: "chemica:nitrogen",
        replace: ["modern_industrialization:nitrogen"]
    }, {
        main: "northstar:oxygen",
        replace: ["chemica:oxygen", "modern_industrialization:oxygen"]
    }, {
        main: "northstar:liquid_oxygen",
        replace: ["electrodynamics:fluidoxygen"]
    }, {
        main: "chemica:fluorine",
        replace: ["chemicalscience:fluorine"]
    }, {
        main: "chemicalscience:neon",
        replace: ["tfmg:neon"]
    }, {
        main: "modern_industrialization:sodium_hydroxide",
        replace: []
    }, {
        main: "chemica:phosphoric_acid",
        replace: ["extended_industrialization:phosphoric_acid", "chemicalscience:phosphoricacid"]
    }, {
        main: "northstar:sulfuric_acid",
        replace: ["createchemistry:sulfuric_acid", "tfmg:sulfuric_acid", "modern_industrialization:sulfuric_acid", "electrodynamics:fluidsulfuricacid"]
    }, {
        main: "modern_industrialization:chlorine",
        replace: ["northstar:chlorine", "chemica:chlorine", "chemicalscience:chlorine"]
    }, {
        main: "chemica:argon",
        replace: ["modern_industrialization:argon"]
    }, {
        main: "extended_industrialization:potassium_chloride",
        replace: ["chemicalscience:potassiumchloride"]
    }, {
        main: "northstar:titanium_tetrachloride",
        replace: ["chemica:titanium_tetrachloride", "chemicalscience:titaniumchloride"]
    }, {
        main: "remin:mercury",
        replace: ["chemica:mercury", "chemicalscience:mercury"]
    }, {
        main: "chemica:hydrochloric_acid",
        replace: ["modern_industrialization:hydrochloric_acid", "electrodynamics:fluidhydrochloricacid"]
    }, {
        main: "chemica:nitric_acid",
        replace: ["createchemistry:nitric_acid", "electrodynamics:fluidnitricacid"]
    }, {
        main: "chemica:hydrofluoric_acid",
        replace: ["electrodynamics:fluidhydrofluoricacid"]
    }, {
        main: "modern_industrialization:sodium_hydroxide",
        replace: ["chemicalscience:sodiumhydroxide"]
    }, {
        main: "chemica:ammonia",
        replace: ["electrodynamics:fluidammonia"]
    }, {
        main: "modern_industrialization:diesel",
        replace: ["createdieselgenerators:diesel", "tfmg:diesel", "chemicalscience:diesel"]
    }, {
        main: "chemica:biodiesel",
        replace: ["createdieselgenerators:biodiesel", "charcoal_pit:biodiesel", "modern_industrialization:biodiesel"]
    }, {
        main: "tfmg:gasoline",
        replace: ["createdieselgenerators:gasoline", "chemicalscience:fuel"]
    }, {
        main: "modern_industrialization:naphtha",
        replace: ["tfmg:naphtha", "chemicalscience:naphta"]
    }, {
        main: "charcoal_pit:creosote",
        replace: ["tfmg:creosote", "modern_industrialization:creosote"]
    }, {
        main: "tfmg:crude_oil",
        replace: ["createdieselgenerators:crude_oil", "modern_industrialization:crude_oil", "chemicalscience:crudeoil"]
    }, {
        main: "chemica:polyvinyl_chloride",
        replace: ["modern_industrialization:polyvinyl_chloride"]
    }, {
        main: "chemica:vinyl_chloride_monomer",
        replace: ["modern_industrialization:vinyl_chloride", "chemicalscience:vinylchloride"]
    }, {
        main: "chemica:brine",
        replace: ["northstar:brine"]
    }, {
        main: "chemica:methane",
        replace: ["northstar:methane", "modern_industrialization:methane", "chemicalscience:methane"]
    }, {
        main: "tfmg:butane",
        replace: ["chemicalscience:butane"]
    }, {
        main: "tfmg:propane",
        replace: ["chemicalscience:propane"]
    }, {
        main: "chemica:toluene",
        replace: ["modern_industrialization:toluene", "chemicalscience:toluene"]
    }, {
        main: "chemicalscience:benzene",
        replace: ["modern_industrialization:benzene", "chemica:benzene"]
    }, {
        main: "chemica:ethylbenzene",
        replace: ["modern_industrialization:ethylbenzene", "chemicalscience:ethylbenzene"]
    }, {
        main: "tfmg:ethylene",
        replace: ["modern_industrialization:ethylene", "chemicalscience:ethylene"]
    }, {
        main: "electrodynamics:fluidpolyethylene",
        replace: ["modern_industrialization:polyethylene", "chemica:polyethylene"]
    }, {
        main: "modern_industrialization:acetylene",
        replace: ["chemicalscience:acetylene"]
    }, {
        main: "chemica:propene",
        replace: ["modern_industrialization:propene"]
    }, {
        main: "tfmg:propylene",
        replace: ["chemicalscience:propylene"]
    }, {
        main: "modern_industrialization:styrene",
        replace: ["chemicalscience:styrene"]
    }, {
        main: "chemica:acetone",
        replace: ["chemicalscience:acetone"]
    }, {
        main: "create:honey",
        replace: ["extended_industrialization:honey"]
    }, {
        main: "chemica:sucrose_solution",
        replace: ["modern_industrialization:sugar_solution"]
    }]
}