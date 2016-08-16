import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {SearchComponent} from "./search.component";
import {AboutComponent} from "./about.component";
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    precompile: [SearchComponent, AboutComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {

}