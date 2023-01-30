input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    Player_1 += 1
    show_scoreboard()
})
function show_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 Score:" + Player_1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 Score:" + Player_2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    show_scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    Player_2 += 1
    show_scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    Player_1 = 0
    Player_2 = 0
    Ties = 0
    Rounds = 0
    show_scoreboard()
})
let Rounds = 0
let Ties = 0
let Player_2 = 0
let Player_1 = 0
OLED.init(128, 64)
Player_1 = 0
Player_2 = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("Shall we play a game")
basic.pause(2000)
show_scoreboard()
