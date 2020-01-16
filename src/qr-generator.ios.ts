/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/qr-code-generator.ios.d.ts" />

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
  }


}
