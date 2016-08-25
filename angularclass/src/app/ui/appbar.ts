import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'app-bar',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/ui/appbar.css'],
    templateUrl: 'app/ui/appbar.html'
})
export class AppBar {}