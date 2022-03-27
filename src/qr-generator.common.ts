export interface QROptions {
  /**
   * Width and Height
   */
  size?: { width: number, height: number };

  /**
   * Color of the Qr code.
   */
  color?: string;

  /**
   * Background color of the Qr code.
   */
  backgroundColor?: string;

  /**
   * Add a logo on the center at the top of the Qr-Code
   * path: the path to the logo image (doesn't use the resources folder) an image from app folder
   * ratio: x, y: set the cordinate x and y from the top left point of the qr-code
   *        w, h: are the width and the height of the logo
   * Play with ratio to resize the logo for a more complex qr-code
   */
  logo?: {
    path?: string,
    ratio?: {
        w: number,
        h: number,
        x?: number,
        y?: number,
    }
  };
}
