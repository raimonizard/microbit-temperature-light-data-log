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

def on_button_pressed_b():
    basic.show_string("" + str((sample)))
    if logging:
        basic.show_icon(IconNames.TARGET)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

logging = False
sample = 0
basic.clear_screen()
sample = 0
logging = False
basic.show_icon(IconNames.HAPPY)

def on_every_interval():
    global sample
    if logging:
        datalogger.log(datalogger.create_cv("sample-id", sample),
            datalogger.create_cv("temp", input.temperature()),
            datalogger.create_cv("light", input.light_level()),
            datalogger.create_cv("sound-level", input.sound_level()),
            datalogger.create_cv("acc-x", input.acceleration(Dimension.X)),
            datalogger.create_cv("acc-y", input.acceleration(Dimension.Y)),
            datalogger.create_cv("acc-z", input.acceleration(Dimension.Z)),
            datalogger.create_cv("compass-heading", input.compass_heading()))
        sample += 1
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.yawn),
            SoundExpressionPlayMode.IN_BACKGROUND)
        for index in range(2):
            basic.show_icon(IconNames.YES)
            basic.pause(200)
            basic.show_leds("""
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                """)
            basic.pause(200)
        basic.clear_screen()
        basic.show_icon(IconNames.TARGET)
loops.every_interval(30000, on_every_interval)
