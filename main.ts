input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let logging = false
basic.clearScreen()
logging = false
loops.everyInterval(30000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel()),
        datalogger.createCV("sound-level", input.soundLevel()),
        datalogger.createCV("acc-x", input.acceleration(Dimension.X)),
        datalogger.createCV("acc-y", input.acceleration(Dimension.Y)),
        datalogger.createCV("acc-z", input.acceleration(Dimension.Z)),
        datalogger.createCV("compass-heading", input.compassHeading())
        )
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    }
    basic.showIcon(IconNames.Target)
})
