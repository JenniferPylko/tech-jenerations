const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder")

StartupEvents.postInit(() => {
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("deeperdarker:gloomslate")
        .lightWithItem("operation_starcleave:firmament_rejuvenator")
        .destDimID("undergarden:undergarden")
        .returnDim("deeperdarker:otherside", true)
        .tintColor(40, 255, 25)
        .registerPortal()
    
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("minecraft:quartz_bricks")
        .lightWithWater()
        .flatPortal()
        .destDimID("yggdrasil:ginnungagap")
        .returnDim("bro:void", true)
        .tintColor(255, 255, 255)
        .registerPortal()
    
    $CustomPortalBuilder
        .beginPortal()
        .frameBlock("minecraft:end_rod")
        .lightWithItem("minecraft:nether_star")
        .flatPortal()
        .destDimID("chronodawn:chronodawn")
        .returnDim("minecraft:the_end", true)
        .tintColor(0, 0, 0)
        .registerPortal()
})