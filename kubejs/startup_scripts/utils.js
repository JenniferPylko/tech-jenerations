// priority: 9999999
console.log("∫Tech Jenerations initializing...")

global.utils = {}

global.utils.get_or_direct = (registry, key_or_object) => {
    if (typeof key_or_object === "string") {
        return registry.get(key_or_object)
    }
    return key_or_object
}

global.utils.open_registry = (registry) => {
    try {
        return Registry.of(registry)
    } catch (e) {
        console.warn(`couldn't access the ${registry} registry, either it's fine or something is horribly wrong and it's not our problem 💅`)
        console.debug(e)
        return
    }
}