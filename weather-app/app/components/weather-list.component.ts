import {Component, OnInit} from "@angular/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "../models/weather-item.model";
import {WeatherService} from "../services/weather.service";

@Component ({
    selector: 'weather-list',
    templateUrl: 'app/templates/weather-list.component.html',
    directives : [WeatherItemComponent]
})

export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService) {

    }
    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
 }