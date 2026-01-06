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

let num = game.askForNumber("Pick a number")
if (testing.CheckPositivity(num)) {
    num = testing.FlipPositivity(num)
}
game.showLongText("The negative version of your number is: " + num, DialogLayout.Bottom)

scene.setBackgroundColor(8)

let squareSize = -num % 120
let backSprite = testing.DrawRectangle()
if (squareSize < 50) {
    backSprite.sayText("Size: " + convertToText(backSprite.width))
}
let sqareSprite = testing.DrawRectangle(80, 60, squareSize, squareSize, 4)

let centerSprite = testing.DrawRectangle(80, 60, 2, 2, 0)
centerSprite.sayText("Size: " + convertToText(squareSize))
