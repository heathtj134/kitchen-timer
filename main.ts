let time = 0
let started = false
input.onButtonPressed(Button.A, function () {
    time += 1
})
input.onButtonPressed(Button.AB, function () {
    if (started == true) {
    	
    } else {
        if (started == false) {
            time = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    time += -1
})
input.onPinPressed(TouchPin.P1, function () {
    started = true
})
loops.everyInterval(1000, function () {
    if (time >= 0) {
        if (started == false) {
        	
        }
        time += -1
    } else {
        if (time == -1) {
            time = 0
            music.playMelody("- C - - - - - - ", 120)
            started = false
        }
    }
})
loops.everyInterval(100, function () {
    basic.showNumber(time)
})
