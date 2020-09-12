import { QROptions } from './qr-generator.common';
import { Color } from '@nativescript/core';

export class QrGenerator {

  generate(value: string, options?: QROptions): UIImage {
    if (typeof options === 'undefined') options = {};

    const qr = new QRCodeGenerator({ string: value });

    if (options.size) {
      qr.size = CGSizeMake(options.size.width, options.size.height);
    }

    if (options.color) {
      const uiColor = new Color(options.color);
      qr.color = new CIColor({ CGColor: uiColor.ios.CGColor });
    }

    if (options.backgroundColor) {
      const uiBackgroundColor = new Color(options.backgroundColor);
      qr.backgroundColor = new CIColor({ CGColor: uiBackgroundColor.ios.CGColor });
    }

    return qr.getImage();
  }


}
