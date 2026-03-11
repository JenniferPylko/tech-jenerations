const $FlowingFluids = Java.loadClass("traben.flowing_fluids.FlowingFluids")

ServerEvents.generateData("after_mods", () => {
    const conf = $FlowingFluids.config
    conf.evaporationChanceV2 = 0.5
    conf.encloseAllFluidOnWorldGen = false
    conf.rainFillsWaterHigherV2 = true
    conf.minLavaLevelForObsidian = 8
    conf.autoPerformanceUpdateRateSeconds = 5
    conf.autoPerformanceMSPTargetMultiplier = 0.75
})