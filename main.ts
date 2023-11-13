input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (sample))
    if (logging) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.clearScreen()
    }
})
let logging = false
let sample = 0
basic.clearScreen()
sample = 0
logging = false
basic.showIcon(IconNames.Happy)
loops.everyInterval(30000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("sample-id", sample),
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel()),
        datalogger.createCV("sound-level", input.soundLevel()),
        datalogger.createCV("acc-x", input.acceleration(Dimension.X)),
        datalogger.createCV("acc-y", input.acceleration(Dimension.Y)),
        datalogger.createCV("acc-z", input.acceleration(Dimension.Z)),
        datalogger.createCV("compass-heading", input.compassHeading())
        )
        sample += 1
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(200)
        }
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
    }
})
