import { Component, OnInit } from "@angular/core";
import { QrGenerator } from 'nativescript-qr-generator';

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

    onImageLoaded(args) {
        const image = args.object.ios as UIImageView;
        const result = new QrGenerator().render('Hello World', { color: '#FF0000' });
        image.image = result;
    }
}
