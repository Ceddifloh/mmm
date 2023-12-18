input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("Cedric Papentin")
})
input.onGesture(Gesture.Shake, function () {
    basic.setLedColor(0xff0000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
	
})
