import { Component, OnInit } from "@angular/core";
import { QrGenerator } from 'nativescript-qr-generator';
import { ImageSource } from "tns-core-modules/image-source";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public imageSrc: ImageSource;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    onImageLoaded(args) {
        const result = new QrGenerator().render('Hello World', { color: '#FF0000', backgroundColor: '#FFFF00', size: { width: 300, height: 300 } });
        this.imageSrc = new ImageSource(result);
    }
}
