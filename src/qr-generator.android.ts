import { QROptions } from './qr-generator.common';
import { Color, ImageSource, zeroLength } from '@nativescript/core';

export class QrGenerator {
  private _width = 200;
  private _height = 200;
  private _color = '#000000';
  private _backgroundColor = '#FFFFFF';

  generate(value: string, options?: QROptions): android.graphics.Bitmap {
    if (typeof options === 'undefined') options = {};

    if (options.size) {
      this._width = options.size.width;
      this._height = options.size.height;
    }

    if (options.color) {
      this._color = options.color;
    }

    if (options.backgroundColor) {
      this._backgroundColor = options.backgroundColor;
    }

    if(options.logo) {
        try {
            let logo: android.graphics.Bitmap ;
            if(options?.logo?.path) {
                logo = ImageSource.fromFileSync(options.logo.path).android;
            } else {
                logo = ImageSource.fromResourceSync('logo.png').android;
            }

            // Get your images from their files
            let qrImg = net.glxn.qrgen.android.QRCode.from(value)
                            .withSize(this._width, this._height)
                            .withColor(new Color(this._color).android, new Color(this._backgroundColor).android)
                            .bitmap();
 
            const centerRatio = {
                x: options.logo?.ratio?.x ? options.logo.ratio.x : options.logo?.ratio?.w ? (qrImg.getWidth() / 2) - (options.logo.ratio.w / 2) : (qrImg.getWidth() / 4),
                y: options.logo?.ratio?.y ? options.logo.ratio.y : options.logo?.ratio?.h ?  (qrImg.getHeight() / 2) - (options.logo.ratio.h / 2) : (qrImg.getHeight() / 4),
                w: options.logo?.ratio?.w ? options.logo.ratio.w : (qrImg.getWidth() / 2),
                h: options.logo?.ratio?.h ? options.logo.ratio.h : (qrImg.getHeight() / 2)
            };

            let cancvas: android.graphics.Canvas = new android.graphics.Canvas(qrImg);
            let resizedLogo = android.graphics.Bitmap.createScaledBitmap(
                logo, centerRatio.w, centerRatio.h, true);
            logo.recycle();
            cancvas.drawBitmap(resizedLogo, centerRatio.x, centerRatio.y, null);
            
            return qrImg;
        } catch(e) {
            console.error(e)
        }
    }
    return net.glxn.qrgen.android.QRCode.from(value)
        .withSize(this._width, this._height)
        .withColor(new Color(this._color).android, new Color(this._backgroundColor).android)
        .bitmap();
  }
}
