
/**
* This is a Test Namespace
*/
//% weight=70 icon="\uf185" color=#EC7505
namespace testing {

    /**
     * Check if your number is greater than zero.
     */
    //% blockId=testing_CheckPositivity block="Check the positivity of %inputValue"
    //% help=testing/CheckPositivity
    //% inputValue.defl=-100
    export function CheckPositivity(inputValue: number): boolean {
        return inputValue > 0
    }

    /**
     * Get the opposite of your number
     */
    //% blockId=testing_Positivity block="Flip the positivity of %inputValue"
    //% help=testing/FlipPositivity
    //% inputValue.defl=-100
    export function FlipPositivity(inputValue: number): number {
        return -inputValue;
    }

    /**
     * Draw a rectangle
     */
    //% blockId=testing_DrawRectangle block="Draw a rectangle centered at x %xCenter and %yCenter of width %width and height %height of color %fillcolor"
    //% help=testing/DrawRectangle
    //% xCenter.defl=80 yCenter.defl=60 width.defl=50 height.defl=50 fillColor.defl=1 width.min=0 height.min=0 fillColor.min=0 fillColor.max=15
    export function DrawRectangle(xCenter: number = 80, yCenter: number = 60, width: number = 50, height: number = 50, fillColor: number = 1) {
        let tempSprite = sprites.create(image.create(width, height))
        tempSprite.setPosition(xCenter, yCenter)
        tempSprite.image.fill(fillColor)
        return tempSprite
    }
}