import { Component, OnInit } from "@angular/core";
import { QrGenerator } from 'nativescript-qr-generator';
import { ImageSource } from "@nativescript/core";
import { Image } from "@nativescript/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    onImageLoadedBasic(args) {
        const image = args.object as Image;
        const result = new QrGenerator().generate('Hello World');
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
