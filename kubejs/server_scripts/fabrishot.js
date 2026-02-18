try {

const $fabrishot = Java.loadClass("me.ramidzkh.fabrishot.Fabrishot")

const fabrishot = () => {
    $fabrishot.startCapture()
    while($fabrishot.isInCapture()) {}
}

ServerEvents.basicCommand("fabrishot", fabrishot)

const $fabrishot_config = Java.loadClass("me.ramidzkh.fabrishot.config.Config")

ServerEvents.basicCommand("panoramashot", ($) => {
    const configured_filename = $fabrishot_config.CUSTOM_FILE_NAME
    const configured_hide_hud = $fabrishot_config.HIDE_HUD
    const configured_width = $fabrishot_config.CAPTURE_WIDTH
    const configured_height = $fabrishot_config.CAPTURE_HEIGHT
    $fabrishot_config.CUSTOM_FILE_NAME = "panorama_0"
    $fabrishot_config.HIDE_HUD = true
    $fabrishot_config.CAPTURE_WIDTH = 2160
    $fabrishot_config.CAPTURE_HEIGHT = 2160
    $.player.runCommand("tick freeze")
    $.player.runCommand("teleport @p ~ ~ ~ ~ 0")
    const delay = 500
    setTimeout(() => {
        $.player.runCommand("fabrishot")
        $fabrishot_config.CUSTOM_FILE_NAME = "panorama_1"
        $.player.runCommand("teleport @p ~ ~ ~ ~90 0")
        setTimeout(() => {
            $.player.runCommand("fabrishot")
            $fabrishot_config.CUSTOM_FILE_NAME = "panorama_2"
            $.player.runCommand("teleport @p ~ ~ ~ ~90 0")
            setTimeout(() => {
                $.player.runCommand("fabrishot")
                $fabrishot_config.CUSTOM_FILE_NAME = "panorama_3"
                $.player.runCommand("teleport @p ~ ~ ~ ~90 0")
                setTimeout(() => {
                $.player.runCommand("fabrishot")
                    $fabrishot_config.CUSTOM_FILE_NAME = "panorama_4"
                    $.player.runCommand("teleport @p ~ ~ ~ ~90 -90")
                    setTimeout(() => {
                        $.player.runCommand("fabrishot")
                        $fabrishot_config.CUSTOM_FILE_NAME = "panorama_5"
                        $.player.runCommand("teleport @p ~ ~ ~ ~ 90")
                        setTimeout(() => {
                            $.player.runCommand("fabrishot")
                            $fabrishot_config.CUSTOM_FILE_NAME = configured_filename
                            $fabrishot_config.HIDE_HUD = configured_hide_hud
                            $fabrishot_config.CAPTURE_WIDTH = configured_width
                            $fabrishot_config.CAPTURE_HEIGHT = configured_height
                            $.player.runCommand("teleport @p ~ ~ ~ ~ 0")
                            $.player.runCommand("tick unfreeze")
                        }, delay)
                    }, delay)
                }, delay)
            }, delay)
        }, delay)
    }, delay)
})

} catch (e) {
    console.warn("not registering fabrishot commands, this is probably a dedicated server")
}