
/**
* This is a Test Namespace
*/
//% weight=70 icon="\uf185" color=#EC7505
namespace testing {

    export const SpriteKindToolbar = SpriteKind.create()
    export const SpriteKindDialog = SpriteKind.create()
    export const SpriteKindBoundary = SpriteKind.create()

    /**
     * Check if your number is greater than zero.
     */
    //% blockId=testing_CheckPositivity block="pick an %inputValue"
    //% help=testing/CheckPositivity
    export function CheckPositivity(inputValue: number): boolean {
        return inputValue > 0
    }

    /**
     * Get the opposite of your number
     */
    //% blockId=testing_Positivity block="Flip your %inputValue"
    //% help=testing/FlipPositivity
    export function FlipPositivity(inputValue: number): number {
        return -inputValue;
    }

    /**
     * Draw a rectangle
     */
    //% blockId=testing_DrawRectangle block="Draw a rectangle centered at x %x and %y of width %width and height %height of color %fillcolor"
    //% help=testing/DrawRectangle
    export function DrawRectangle(xCenter: number, yCenter: number, width: number, height: number, fillColor: number) {
        let tempSprite = sprites.create(image.create(width, height))
        tempSprite.setPosition(xCenter, yCenter)
        tempSprite.image.fill(fillColor)
        return tempSprite
    }
}