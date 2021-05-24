//% weight=20 color=#Ffbc11 icon="\uf0d2" block="B_旋转编码器"
namespace RotaryEncoder {

    /**
     * rotary encoder was rotated.
     */
    //% blockId=rotary_ky_rotated_left_event
    //% block="当旋转向 |%dir" shim=RotaryEncoder::onRotateEvent
    export function onRotateEvent(dir: RotationDirection, body: () => void): void{
        return;
    }

    /**
     * rotary encoder button was pressed.
     */
    //% blockId=rotary_ky_pressed_event
    //% block="当旋钮被按下" shim=RotaryEncoder::onPressEvent
    export function onPressEvent(body: () => void): void{
        return;
    }

    /**
     * initialises local variables and enables the rotary encoder.
     */ 
    //% blockId=rotary_ky_init
    //% block="连接 CLK %clk|DT %dt|SW %sw"
    //% icon="\uf1ec" shim=RotaryEncoder::init
    export function init(clk: Pins, dt: Pins, sw: Pins): void{
        return;
    }
}
