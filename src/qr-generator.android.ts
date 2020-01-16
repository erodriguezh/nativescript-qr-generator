import { QROptions } from './qr-generator.common';
import { Color } from 'tns-core-modules/color';

export class QrGenerator {
  render(value: string, options?: QROptions): UIImage {
    if (typeof options === 'undefined') options = {};

    const qr = new QRCodeGenerator({ string: value });

    if (options.size) {
      qr.size = CGSizeMake(options.size.width, options.size.height);
    }

    if (options.color) {
      const uiColor = new Color(options.color);
      qr.color = CIColor.colorWithRedGreenBlue(uiColor.r, uiColor.g, uiColor.b);
    }

    if (options.backgroundColor) {
      const uiBackgroundColor = new Color(options.backgroundColor);
      qr.backgroundColor = CIColor.colorWithRedGreenBlue(uiBackgroundColor.r, uiBackgroundColor.g, uiBackgroundColor.b);
    }

    return qr.getImage();
/* 
    Bitmap myBitmap = QRCode.from(this.qrCodeValue).withSize(this.size, this.size)
    .withColor(this.onColor, this.offColor).bitmap();

    mImageView.setImageBitmap(myBitmap);
     */
  }
}
