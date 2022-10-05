input.onButtonPressed(Button.A, function () {
    if (n1 == 0) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else if (n1 > n2 && n1 > n3) {
        mayor = n1
        if (n2 > n3) {
            medio = n2
            menor = n3
        } else {
            menor = n2
            medio = n3
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    } else if (n1 > n2 || n1 > n3) {
        medio = n1
        if (n2 > n3) {
            mayor = n2
            menor = n3
        } else {
            menor = n2
            menor = n3
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    } else {
        menor = n1
        if (n2 > n3) {
            mayor = n2
            medio = n3
        } else {
            medio = n2
            mayor = n3
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    mayor = 0
    medio = 0
    menor = 0
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 162, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    n1 = randint(1, 9)
    n2 = randint(1, 9)
    n3 = randint(1, 9)
    if (n2 == n3 || (n1 == n3 || n2 == n1)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.No)
        n1 = 0
        n2 = 0
        n3 = 0
        basic.clearScreen()
    } else {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Yes)
        basic.showNumber(n1)
        basic.showNumber(n2)
        basic.showNumber(n3)
        basic.clearScreen()
    }
})
let menor = 0
let medio = 0
let mayor = 0
let n3 = 0
let n2 = 0
let n1 = 0
n1 = 0
n2 = 0
n3 = 0
