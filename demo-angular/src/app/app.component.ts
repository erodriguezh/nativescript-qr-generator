import { QrGenerator } from 'nativescript-qr-generator';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    ngOnInit() {
        console.log(new QrGenerator().render('Hello World'));
    }

}
