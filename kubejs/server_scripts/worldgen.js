const $HolderSet$Direct = Java.loadClass("net.minecraft.core.HolderSet$Direct")
const $Holder$Direct = Java.loadClass("net.minecraft.core.Holder$Direct")

const get_or_direct = (registry, key_or_object) => {
    if (typeof key_or_object === "string") {
        return registry.get(key_or_object)
    }
    return key_or_object
}

const inject_features = (biome, features, after) => {
    const biome_registry = Registry.of("minecraft:worldgen/biome")
    const feature_registry = Registry.of("minecraft:worldgen/placed_feature")
    const generation_settings = biome_registry.get(biome).getGenerationSettings()
    const feature_sets = []
    const patched_sets = []
    generation_settings.features().listIterator().forEachRemaining((v) => feature_sets.push(v))
    let set_iterator
    let feature_holder
    let after_index
    let $temp_set
    for (const feature_set of feature_sets) {
        set_iterator = []
        feature_set.iterator().forEachRemaining((v) => set_iterator.push(v))
        for (const feature of features) {
            feature_holder = $Holder$Direct.direct(get_or_direct(feature_registry, feature))
            after_index = -1
            set_iterator.forEach((tester, index) => {
                if (typeof after !== "undefined" && tester.is(after)) { after_index = index}
            })
            if (after_index === -1 && typeof after === "undefined") {
                set_iterator.push(feature_holder)
            } else {
                set_iterator.splice(after_index + 1, 0, feature_holder)
            }
        }
        $temp_set = Utils.newList()
        for (const feature of set_iterator) {
            $temp_set.add(feature)
        }
        patched_sets.push($HolderSet$Direct["direct(java.util.List)"]($temp_set))
    }
    const patched_list = Utils.newList()
    for (const set of patched_sets) {
        patched_list.add(Java.cast($HolderSet$Direct, set))
    }
    generation_settings.wover_setFeatures(patched_list)
}

ServerEvents.generateData("after_mods", ($) => {
    inject_features("terralith:savanna_badlands", ["natures_spirit:kaolin_layers"], "terralith:savanna/terracotta")
})