import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather-list.component";
import {WeatherSearchComponent} from "./search.component";

@Component ({
    selector: 'my-app',
    templateUrl: './app/templates/app.component.html',
    directives: [WeatherListComponent, WeatherSearchComponent]
})

export class AppComponent {
    constructor() {}
}