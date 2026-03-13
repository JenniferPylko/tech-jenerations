const $FlowingFluids = Java.loadClass("traben.flowing_fluids.FlowingFluids")
const $FFConfig = Java.loadClass("traben.flowing_fluids.config.FFConfig")

ServerEvents.generateData("after_mods", () => {
    const conf = $FlowingFluids.config
    conf.evaporationChanceV2 = 0.5
    conf.encloseAllFluidOnWorldGen = false
    conf.rainFillsWaterHigherV2 = true
    conf.minLavaLevelForObsidian = 8
    conf.autoPerformanceMSPTargetMultiplier = 0.75
    conf.autoPerformanceMode = $FFConfig.AutoPerformance.LOW_QUALITY
})