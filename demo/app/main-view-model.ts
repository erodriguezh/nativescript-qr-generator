import { Observable, ImageSource, Image } from '@nativescript/core';
import { QrGenerator } from 'nativescript-qr-generator';

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super();
  }

  onImageLoadedBasic(args) {
        const image = args.object as Image;
        const result = new QrGenerator().generate(`Hello World`, {
            logo: {
                path: "~/assets/fb.png",
                ratio: {
                    w: 50, h: 50
                }
            }
        });
        image.imageSource = new ImageSource(result);
    }

    onImageLoadedColors(args) {
        const image = args.object as Image;
        const result = new QrGenerator().generate('Hello World with colors', { color: '#4183d7', backgroundColor: '#67809f' });
        image.imageSource = new ImageSource(result);
    }

    onImageLoadedColorsSize(args) {
        const image = args.object as Image;
        const result = new QrGenerator().generate('Hello World with colors and custom size', { size: { width: 100, height: 100 }, color: '#fbd90e', backgroundColor: '#0d0c0c' });
        image.imageSource = new ImageSource(result);
    }
}
