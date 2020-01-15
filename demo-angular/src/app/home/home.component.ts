import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { QrGenerator } from 'nativescript-qr-generator';
import { Image } from 'tns-core-modules/ui/image';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    @ViewChild('grid', { static: false }) gridRef: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        let grid = this.gridRef.nativeElement;
        const result = new QrGenerator().render('Hello World');
        alert(result);
        grid.addChild(result);
    }
}
