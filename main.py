def on_button_pressed_a():
    global logging
    logging = not (logging)
    if logging:
        basic.show_icon(IconNames.TARGET)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.hello),
            SoundExpressionPlayMode.UNTIL_DONE)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

logging = False
basic.clear_screen()
logging = False

def on_every_interval():
    if logging:
        datalogger.log(datalogger.create_cv("temp", input.temperature()),
            datalogger.create_cv("light", input.light_level()))
        basic.show_icon(IconNames.YES)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.yawn),
            SoundExpressionPlayMode.UNTIL_DONE)
    basic.show_icon(IconNames.TARGET)
loops.every_interval(30000, on_every_interval)
