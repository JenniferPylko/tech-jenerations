const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder")

StartupEvents.postInit(() => {
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("deeperdarker:gloomslate")
        .lightWithItem("operation_starcleave:firmament_rejuvenator")
        .destDimID("undergarden:undergarden")
        .returnDim("deeperdarker:otherside", true)
        .tintColor(2871808)
        .registerPortal()
    
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("minecraft:quartz_bricks")
        .lightWithWater()
        .flatPortal()
        .destDimID("minecraft:overworld")
        .returnDim("bro:void", true)
        .tintColor(5223679)
        .registerPortal()
    
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("operation_starcleave:nucleic_fissureroot")
        .lightWithItem("minecraft:nether_star")
        .flatPortal()
        .destDimID("chronodawn:chronodawn")
        .returnDim("minecraft:the_end", true)
        .tintColor(16777215)
        .registerPortal()
})