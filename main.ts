/**
* This is a Test Namespace
*/
//% weight=70 icon="\uf185" color=#EC7505
namespace testing {
    /**
     * Check if your number is greater than zero.
     */
    //% blockId=testing_check block="pick an %inputValue"
    //% help=testing/check
    export function TestingCheck(inputValue: number): boolean {
        return inputValue > 0
    }

    /**
     * Get the opposite of your number
     */
    //% blockId=testing_flip block="Flip your %inputValue"
    //% help=testing/flip
    export function TestingFlip(inputValue: number): number {
        return -inputValue;
    }
}