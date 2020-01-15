/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/qr-code-generator.ios.d.ts" />

import { Common, QROptions } from './qr-generator.common';

export class QrGenerator extends Common {

  render(value: string, options?: QROptions): UIImage {
    const qr = new QRCodeGenerator({ string: value });

    if (options.size) {
      qr.size = CGSizeMake(options.size.width, options.size.height);
    }

    if (options.color) {
      qr.color = CIColor.colorWithString(options.color);
    }

    if (options.backgroundColor) {
      qr.backgroundColor = CIColor.colorWithString(options.backgroundColor);
    }

    return qr.getImage();
/*       qr.size = CGSizeMake(width, height);
    qr.color = CIColor.colorWithRGBA(color);
    qr.backgroundColor = CIColor.colorWithRGBA(color); */
    // return <NativeQRCode bgColor={backgroundColor} fgColor={foregroundColor} {...props} style={{ width: props.size, height: props.size, ...props.style }} />
/*
    QRCodeGenerator *qr = [[QRCodeGenerator alloc] initWithString:@"Hello World"];
    qr.size = CGSizeMake(400.0f, 400.0f); // 400x400 size
    qr.color = [CIColor colorWithRGBA:@"#FFFFFF"]; // white QR Code color
    qr.backgroundColor = [CIColor colorWithRGBA:@"#000000"]; // black background color

    imageView.image = [qr getImage];
*/
  }


}
