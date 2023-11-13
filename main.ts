input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    logging = !logging
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
loops.everyInterval(30000, function on_every_interval() {
    if (logging) {
        datalogger.log(datalogger.createCV("temp", input.temperature()), datalogger.createCV("light", input.lightLevel()))
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    }
    
    basic.showIcon(IconNames.Target)
})
