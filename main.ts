input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        nombre_1 += 1
        basic.showNumber(nombre_1)
    }
    if (_switch == 1) {
        nombre_2 += 1
        basic.showNumber(nombre_2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        basic.showNumber(nombre_1 + nombre_2)
    }
})
let _switch = 0
let nombre_2 = 0
let nombre_1 = 0
nombre_1 = 0
nombre_2 = 0
_switch = 0
