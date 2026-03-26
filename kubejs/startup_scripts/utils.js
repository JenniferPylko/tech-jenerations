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
        console.warn(`couldn't access the ${registry} registry, either it's fine or something is horribly wrong`)
        console.debug(e)
        return
    }
}

global.utils.hide_all = ($, set) => {
    const hidden_sets = set.map((v) => v.replace)
    for (const hidden_set of hidden_sets) {
        $.add("c:hidden_from_recipe_viewers", hidden_set)
    }
}