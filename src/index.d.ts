import { Common, QROptions } from './qr-generator.common';
export declare class QrGenerator extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  render (value: string, options?: QROptions): UIImage;
}
