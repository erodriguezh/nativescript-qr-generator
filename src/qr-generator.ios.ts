import { Common } from './qr-generator.common';

export class QrGenerator extends Common {

    render(value: string, width?: number, height?: number, color?: string, backgroundColor?: string): any {
      return QRCodeGenerator.initWithString(value);
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
