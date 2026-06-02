// priority: 6969

(() => {

// if this function looks weird it's cos rhino is weird
const load_classes = (packages) => Object.assign.apply(
        null,
        Object.entries(packages)
        .map(([pkg, classes]) => Object.assign.apply(null, classes.map(
            (id) => {
                const entry = {}
                entry["$" + id] = Java.loadClass(`${pkg}.${id}`)
                return entry
            }
        )))
    )

global.classes = load_classes({
    "dev.elrol.arrow.modernelements": ["ModernElements"],
    "dev.elrol.arrow.modernelements.data": ["CompoundDefinition", "CompoundType", "Formula", "MatterState", "IChemicalObject"],
    "net.kyrptonaught.customportalapi.api": ["CustomPortalBuilder"],
    "dev.latvian.mods.rhino.type": ["TypeInfo"],
    "appeng.api.networking": ["GridHelper"]
})

global.events = load_classes({
    "dev.elrol.arrow.modernelements.api.events": ["CompoundRegistryEvent"]
})

const {$TypeInfo} = global.classes
const {$CompoundRegistryEvent} = global.events

global.events.architectury_listen = (event_interface, listener_loop, listener) => {
    if (typeof listener_loop === "string") {
        listener_loop = event_interface[listener_loop]
    }

    listener_loop.register(
        Java.makeFunctionProxy(
            $TypeInfo.of(event_interface),
            listener
        )
    )
}

global.events.architectury_listen($CompoundRegistryEvent, "EVENT", ($) => {
    console.log("AMOGG")
    console.log($)
})

})()
