import {Component, Input} from "@angular/core";
import {WeatherItem} from "../models/weather-item";

@Component ({
    selector: 'weather-item',
    templateUrl: 'app/templates/weather-item.component.html',
    // inputs: ['weatherItem: item'] // the second way of input
})

export class WeatherItemComponent {
    @Input('item') weatherItem: WeatherItem;
}