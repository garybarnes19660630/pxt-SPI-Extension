// Add SPI functionality not available in the default code.
namespace pins {

    //% blockId="SPI_WRITE_PROCEDURE" block="spi write %x"
    export function spiWriteProc(x: number) {
        let placebo = 0
        placebo = pins.spiWrite(0)
    }
}