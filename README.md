# nativescript-qr-generator

NativeScript-Qr-Generator is a plugin for NativeScript which generates Qr code images.

## Installation

Go to your app's root folder and execute:

```javascript
tns plugin add nativescript-qr-generator
```



## Usage

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo">

    <ActionBar title="My App" icon="" />

    <GridLayout rows="*,*,*" columns="*" class="qr-example">
        <Label row="0" col="0" text="Color and size" ></Label>
        <Image src="" row="1" col="0" loaded="{{onImageLoadedBasic}}"></Image>
    </GridLayout>
</Page>
```

```ts
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

```

## Usage Angular
	
	```typescript
    import { Component } from "@angular/core";
    import { ImageSource } from "@nativescript/core";
    import { Image } from "@nativescript/core";
    import { QrGenerator } from "nativescript-qr-generator";

    @Component({
        selector: "ns-main",
        template: "<Image src="" (loaded)="onImageLoaded($event)"></Image>"
    })
    export class AppComponent {

        constructor() {} 
        
        onImageLoaded(){
            const image = args.object as Image;
            const result = new QrGenerator().generate('Hello World');
            image.imageSource = new ImageSource(result);
        }
    }
    ```)

## API
    
| Property | Default | Description |
| --- | --- | --- |
| value | - | Value to generate Qr code |
| size.width | 200 | The image's width |
| size.height | 200 | The image's height |
| color | '#000000' | The Qr's color |
| backgroundColor | '#FFFFFFF' | The background's color |
| logo | none | This new property will add your logo on top of the generated qr-code, the plugin will manage to center the logo, you may want to play with the `ratio` property in case of more complex qr-code  |
| logo.path| none | if path not set the plugin will take the appIcon as logo|
| logo.ratio.w| none | set the width of the logo|
| logo.ratio.h| none | set the height of the logo|
| logo.ratio.x| none | set the x cordinate to position the logo|
| logo.ratio.x| none | set the y cordinate to position the logo|

## Acknowledgements

This plugin wraps the following native Qr generators libraries:

**Android:** [https://github.com/kenglxn/QRGen](https://github.com/kenglxn/QRGen)<br />
**iOS:** [https://github.com/gscarrone/iOS-QR-Code-Generator](https://github.com/gscarrone/iOS-QR-Code-Generator)