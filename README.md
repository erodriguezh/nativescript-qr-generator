# nativescript-qr-generator

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

Then describe what's the purpose of your plugin. 

## Installation

Go to your app's root folder and execute:

```javascript
tns plugin add nativescript-qr-generator
```

## Usage 
	
	```typescript
    import { Component } from "@angular/core";
    import { QrGenerator } from "nativescript-drop-down";

    @Component({
        selector: "ns-main",
        template: "<Image [src]="imageSrc" (loaded)="onImageLoaded($event)"></Image>"
    })
    export class AppComponent {

        public imageSrc: ImageSource;

        constructor() {} 
        
        onImageLoaded(){
            const result = new QrGenerator().render('Hello World');
            this.imageSrc = new ImageSource(result);
        }
    }
    ```)

## API
    
| Property | Default | Description |
| --- | --- | --- |
| size.width | 200 | The image's width |
| size.height | 200 | The image's height |
| color | '#000000' | The Qr's color |
| backgroundColor | '#FFFFFFF' | The background's color |
    
## License

Apache License Version 2.0, January 2004
