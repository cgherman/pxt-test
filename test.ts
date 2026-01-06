// tests go here; this will not be compiled when this package is used as an extension.
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . 0 0 0 0 0 0 0 . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . . 0 . . . . . . . . . 
. . . . . 0 . 0 . . . . . . . . 
. . . . 0 . . . 0 . . . . . . . 
. . . 0 . . . . . 0 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(7)

let number = game.askForNumber("Pick a number")
if (testing.TestingCheck(number)) {
    number = testing.TestingFlip(number)
}
game.showLongText("The negative version of your number is: " + number, DialogLayout.Bottom)

scene.setBackgroundColor(8)