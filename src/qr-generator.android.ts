import { QROptions } from './qr-generator.common';
import { Color } from '@nativescript/core';

export class QrGenerator {
  private _width = 200;
  private _height = 200;
  private _color = '#000000';
  private _backgroundColor = '#FFFFFF';

  generate(value: string, options?: QROptions): globalAndroid.graphics.Bitmap {
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

    return net.glxn.qrgen.android.QRCode.from(value)
        .withSize(this._width, this._height)
        .withColor(new Color(this._color).android, new Color(this._backgroundColor).android)
        .bitmap();
  }
}
