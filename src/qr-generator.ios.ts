import { QROptions } from './qr-generator.common';
import { Color, ImageSource } from '@nativescript/core';

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
    if(options.logo) {

        try {
            let logo: UIImage;

            if(options?.logo?.path) {
                logo = ImageSource.fromFileSync(options.logo.path).ios;
            } else {
                logo = ImageSource.fromResourceSync('AppIcon60x60').ios;
            }

            let qrImg  = qr.getImage();
    
            let size: CGSize = CGSizeMake(qrImg.size.width, qrImg.size.height);
            const centerRatio = {
                x: options.logo?.ratio?.x ? options.logo.ratio.x : options.logo?.ratio?.w ? (qrImg.size.width / 2) - (options.logo.ratio.w / 2) : (qrImg.size.width / 4),
                y: options.logo?.ratio?.y ? options.logo.ratio.y : options.logo?.ratio?.h ?  (qrImg.size.height / 2) - (options.logo.ratio.h / 2) : (qrImg.size.height / 4),
                w: options.logo?.ratio?.w ? options.logo.ratio.w : (qrImg.size.width / 2),
                h: options.logo?.ratio?.h ? options.logo.ratio.h : (qrImg.size.height / 2)
            };
            
            UIGraphicsBeginImageContext(size);
        
            qrImg.drawInRect(CGRectMake(0, 0, size.width, qrImg.size.width));
            logo.drawInRect(CGRectMake(centerRatio.x, centerRatio.y, centerRatio.w, centerRatio.h));
        
            let img: UIImage = UIGraphicsGetImageFromCurrentImageContext();
    
            return img;
        } catch(e) {
            console.error(e);
        }
    }

    return qr.getImage();
  }

}
