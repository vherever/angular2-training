import {Component} from "@angular/core";
import {WeatherItem} from "../models/weather-item";

@Component ({
    selector: 'weather-item',
    templateUrl: 'app/templates/weather-item.component.html'
})

export class WeatherItemComponent {
    weatherItem: WeatherItem;
    constructor() {
        this.weatherItem = new WeatherItem('London', 'Rainy', 17);
    }
}