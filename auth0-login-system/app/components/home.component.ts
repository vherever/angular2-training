import {Component} from "@angular/core";
import {Auth} from "../services/auth.service";
@Component({
    selector: 'home',
    templateUrl: 'app/templates/home.component.html'
})
export class HomeComponent {
    constructor(private auth: Auth) {}
}
