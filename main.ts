function openRight () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 90)
}
function Doclosed () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 183)
}
function doopen () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 270)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 90)
}
Doclosed()
basic.pause(3000)
basic.forever(function () {
    if (ModuleWorld_Digital.PIR(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enPIR.OPIR) || ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P8P9, ModuleWorld_Digital.enButton.Press)) {
        doopen()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(3000)
        Doclosed()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) > 254 && (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG) < 12 && Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB) < 6)) {
        openRight()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(3000)
        Doclosed()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
