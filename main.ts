input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Würfeltyp += -1
    if (Würfeltyp < 0) {
        Würfeltyp = 0
    }
    Zeige_Würfel()
})
function Zeige_Würfel () {
    Ausgabe = "W" + WürfelMax[Würfeltyp]
    display.writeString(Ausgabe, 0, 0)
    basic.showString("" + (Würfeltext[Würfeltyp]))
}
function Zeige_Ergebnis (Wert: number) {
    basic.setLedColor(0x00ff00)
    Ausgabe = "W" + WürfelMax[Würfeltyp] + (" -> " + Wert)
    display.writeString(Ausgabe, 0, 0)
    basic.showNumber(Wert)
    basic.pause(500)
}
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    music.playTone(698, music.beat(BeatFraction.Whole))
    Dice = randint(1, WürfelMax[Würfeltyp])
    if (Würfeltyp == 0) {
        Dice += -1
    }
    Zeige_Ergebnis(Dice)
    basic.setLedColor(0xff0000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
    Würfeltyp += 1
    if (Würfeltyp >= Würfeltext.length) {
        Würfeltyp = Würfeltext.length - 1
    }
    Zeige_Würfel()
})
let Dice = 0
let Würfeltext: string[] = []
let WürfelMax: number[] = []
let Würfeltyp = 0
let Ausgabe = ""
Ausgabe = ""
basic.pause(1000)
music.play(music.stringPlayable("C D F E G F A - ", 240), music.PlaybackMode.UntilDone)
basic.setLedColor(0xff0000)
Würfeltyp = 0
WürfelMax = [
4,
6,
8,
10,
12,
20,
100
]
Würfeltext = [
"A",
"B",
"C",
"D",
"E",
"F",
"G"
]
Zeige_Würfel()
basic.forever(function () {
    basic.pause(randint(25, 55))
})
