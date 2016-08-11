import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather-list.component";

@Component ({
    selector: 'my-app',
    templateUrl: './app/templates/app.component.html',
    directives: [WeatherListComponent]
})

export class AppComponent {
    constructor() {}
}