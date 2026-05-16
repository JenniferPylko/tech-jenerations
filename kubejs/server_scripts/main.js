(() => { // stop polluting my scope!

const lightning_summon = (dimension, chance) => ($) => {
    if ($.getLevel().dimension.toString().endsWith(dimension) && Math.random() < chance) {
        $.getBlock().spawnLightning()
    }
}

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

BlockEvents.randomTick("biomesoplenty:thermal_calcite_vent", ($) => {
    if (Math.random() > 0.99) {
        for (let block = $.getBlock().getUp(), tick = 0
            ;(block.getId().endsWith("air") || block.getId().endsWith("water") || block.getId().endsWith("ice")) && Math.random() > 0.1
            ;block = block.getUp(), ++tick) {
            (() => {
                const position = block.getPos()
                setTimeout(() => $.getLevel().setBlock(position, "minecraft:water", 10), tick*tick / 2)
            })()
            if (block.getId().endsWith("ice")) {
                break
            }
        }
    }
})

BlockEvents.randomTick("northstar:venus_plume", lightning_summon("venus", 1))
BlockEvents.randomTick("betterend:aurora_crystal", lightning_summon("end", 0.05))
BlockEvents.randomTick("betterend:neon_cactus", lightning_summon("end", 0.05))
BlockEvents.randomTick("betterend:pallidium_full", lightning_summon("end", 0.1))
BlockEvents.randomTick("biomesoplenty:anomaly", lightning_summon("end", 0.05))
BlockEvents.randomTick("astrological:pearlescent_selenite", lightning_summon("end", 0.1))
BlockEvents.randomTick("minecraft:crying_obsidian", lightning_summon("end", 0.1))

BlockEvents.randomTick("betterend:brimstone", ($) => {
    if (Math.random() < 0.01) {
        const neighbors = [
            $.getBlock().getNorth(), $.getBlock().getSouth(),
            $.getBlock().getEast(), $.getBlock().getWest()
        ]
        for (const neighbor of neighbors) {
            if (neighbor.getId().endsWith("water") || neighbor.getId().endsWith("air")) {
                neighbor.spawnLightning()
                $.getLevel().destroyBlock(neighbor.getPos(), false)
                $.getLevel().setBlock(neighbor.getPos(), "northstar:sulfuric_acid", 10)
                return
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
BlockEvents.randomTick("minecraft:sculk_catalyst", ($) => {
    const neighbors = [
        $.getBlock().getUp(), $.getBlock().getDown(),
        $.getBlock().getNorth(), $.getBlock().getSouth(),
        $.getBlock().getEast(), $.getBlock().getWest()
    ].filter((neighbor) => neighbor.getId() === "minecraft:sculk")
    if (neighbors.length > 0) {
        const position = BlockPos.findClosestMatch(
            $.getBlock().getPos(),128,128, (testBlock) => testBlock.getId() !== "minecraft:sculk")
        SculkCatalystBlock.
    }
    //SculkCatalystBlock.bloom($.getBlockState(), $.random)
})

/* not performant enough, rethink algo or be more vanilla
BlockEvents.randomTick("minecraft:sculk_catalyst", ($) => {
    if (Math.random() > 0.01) {
        return
    }
    console.log("sculk tick")
    const neighbors = [
        $.getBlock().getUp(), $.getBlock().getDown(),
        $.getBlock().getNorth(), $.getBlock().getSouth(),
        $.getBlock().getEast(), $.getBlock().getWest()
    ].filter((neighbor) => neighbor.getId() === "minecraft:sculk")
    const candidates = []
    let i = 0
    let n
    let sculk_block
    let no_sculk = true
    let new_neighbors = []
    let dupe = false
    while (i < neighbors.length) {
        n = neighbors[i]
        if(n.getId() === "minecraft:sculk") {
            new_neighbors = [n.getUp(), n.getDown(),
                n.getNorth(), n.getSouth(),
                n.getEast(), n.getWest()]
                for (const neighbor of new_neighbors) {
                    for (let j = neighbors.length; j > 0; --j) {
                        if (neighbor.getPos().getX() === neighbors[j-1].getPos().getX()
                            && neighbor.getPos().getY() === neighbors[j-1].getPos().getY()
                            && neighbor.getPos().getZ() === neighbors[j-1].getPos().getZ()) {
                            dupe = true
                            break
                        }
                    }
                    if (!dupe) {
                        neighbors.push(neighbor)
                    } else {
                        dupe = false
                    }
                }
            if (!sculk_block) {
                no_sculk = false
                sculk_block = n.getBlock()
            }
        } else if (!n.getId().includes("sculk") && n.getBlockState().isSolid() && !n.getBlockState().isAir()) {
            candidates.push(n)
        }
        ++i
    }
    if (no_sculk) { return }
    for (const block of candidates) {
        block.set(sculk_block)
    }
})
/*
BlockEvents.broken("minecraft:stone", ($) => {
    $.block.set("minecraft:cobblestone")
    $.cancel()
})
*/
//BlockEvents.drops()
const ore_loot_overrides = {
    "electrodynamics:orealuminum": "megalosaio:raw_aluminium",
    "tfmg:bauxite_powder": "megalosaio:raw_aluminium",
    "megalosaio:aluminium_ore": "megalosaio:raw_aluminium",
    "minecraft:glowstone_dust": "northstar:raw_glowstone_ore",
    "modern_industrialization:monazite_dust": ["umines:monazite-sm", "umines:monazite-ce"],
    "minecraft:redstone": "createoreexcavation:raw_redstone",
    "minecraft:andesite": "createsifter:andesite_pebble"
}

const count_overrides = {
    "minecraft:andesite": 4
}

LootJS.modifiers(($) => {
    $.addBlockModifier("#minecraft:mineable/pickaxe").modifyLoot(ItemFilter.custom(() => true), (item) => {
        console.log(item.id)
        const override = ore_loot_overrides[item.id]
        if (typeof override !== "undefined") {
            if (Array.isArray(override)) {
                return LootEntry.of(override[
                    Math.floor(Math.random() * override.length)
                ], count_overrides[item.id] || item.getCount()).getItem()
            }
            return LootEntry.of(override, count_overrides[item.id] || item.getCount()).getItem()
        }
        const replacement = AlmostUnified.getVariantItemTarget(item);
        if (!replacement.isEmpty()) {
            replacement.setCount(item.getCount());
            return replacement
        }
            return item
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
/*
const $KnownTiers = Java.loadClass("dev.lukebemish.excavatedvariants.impl.KnownTiers")
    $KnownTiers.KNOWN_TIERS.remove(null)
    console.log($KnownTiers.KNOWN_TIERS.keySet())
    console.log(JSON.stringify($KnownTiers.KNOWN_TIERS))*/

PlayerEvents.loggedIn(($) => {
    const difficulty = $.server.getWorldData().getDifficulty().name()
    if (!$.player.stages.has("first_login_all")) {
        $.player.stages.add("first_login_all")
        $.server.runCommandSilent(`give ${$.entity.username} kubejs:guide`)
    }
    if ((difficulty === "NORMAL" || difficulty === "EASY" || difficulty === "PEACEFUL") && !$.player.stages.has("first_login_normal")) {
        $.player.stages.add("first_login_normal")
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:stick`)
        $.server.runCommandSilent(`give ${$.entity.username} sleeping_bags:${sleeping_bag_colors[Math.floor(Math.random() * sleeping_bag_colors.length)]}_sleeping_bag`)
        $.server.runCommandSilent(`give ${$.entity.username} hardcore_torches:lit_lantern`)
    }
    if ((difficulty === "EASY" || difficulty === "PEACEFUL") && !$.player.stages.has("first_login_easy")) {
        $.player.stages.add("first_login_easy")
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:iron_pickaxe`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:iron_axe`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:iron_sword`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:flint_and_steel`)
        $.server.runCommandSilent(`give ${$.entity.username} redstonepen:quill`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:cooked_beef 64`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:crafting_table`)
        $.server.runCommandSilent(`give ${$.entity.username} charcoal_pit:bloomery_brick`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:coal 64`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:iron_ingot 64`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:copper_ingot 64`)
        $.server.runCommandSilent(`give ${$.entity.username} chemica:tin_ingot 64`)
        $.server.runCommandSilent(`give ${$.entity.username} createhorsepower:hores_crank`)
        $.server.runCommandSilent(`give ${$.entity.username} minecraft:lead`)
        $.server.runCommandSilent(`give ${$.entity.username} modern_industrialization:bronze_boiler`)
        $.server.runCommandSilent(`give ${$.entity.username} moderndynamics:fluid_pipe 64`)
        $.server.runCommandSilent(`give ${$.entity.username} sculktransporting:sculk_barrel`)
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

PlayerEvents.tick(($) => {
    if ($.level.getDimensionKey() === "minecraft:overworld" && $.entity.getPos().y() > 512) {
        //entity.changeDimension($.server.getLevel("northstar:earth_orbit"))
        //$.server.runCommand(`execute in northstar:earth_orbit run tp ${$.entity.getStringUUID()} ~ 64 ~`)
        $.server.runCommand(`execute as ${$.entity.username} run drivetransfer northstar:earth_orbit`)
    } else if ($.level.getLevel().getDimensionKey() === "northstar:earth_orbit" && $.entity.getPos().y() < -32) {
        //entity.changeDimension($.server.getLevel("minecraft:overworld"))
        $.server.runCommand(`execute as ${$.entity.username} run drivetransfer minecraft:overworld`)
    }
})
/*
LevelEvents.tick(($) => {
    const entities = $.level.getEntities()
    for (const entity of entities) {
        //console.log(JSON.stringify(entity.getPassengers().length))
        if (entity.getPassengers().length > 0) {
            try {
            if (entity.getLevel().getDimensionKey() === "minecraft:overworld" && entity.getPos().y() > 512) {
                //entity.changeDimension($.server.getLevel("northstar:earth_orbit"))
                $.server.runCommand(`execute in northstar:earth_orbit run tp ${$.entity.getStringUUID()} ~ 64 ~`)
            } else if (entity.getLevel().getDimensionKey() === "northstar:earth_orbit" && entity.getPos().y() < -32) {
                //entity.changeDimension($.server.getLevel("minecraft:overworld"))
                $.server.runCommand(`execute in minecraft:overworld run tp ${$.entity.getStringUUID()} ~ 480 ~`)
            }
        } catch (e) {}
        }
    }
    return
    console.log($.entity.getStringUUID())
    console.log($.entity.getPassengers())   
})*/
})()