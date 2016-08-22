import {Component} from '@angular/core';
import {AppBar} from "../ui";
import {Notes} from "./notes";

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes
    ],
    templateUrl: 'app/containers/main.html'
})
export class Main {}