import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {SearchComponent} from "./search.component";
import {AboutComponent} from "./about.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    precompile: [SearchComponent, AboutComponent]
})
export class AppComponent {

}