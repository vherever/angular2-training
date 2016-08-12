import {Component, OnInit} from "@angular/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "../models/weather-item";
import {WEATHER_ITEMS} from "../weather-data";

@Component ({
    selector: 'weather-list',
    templateUrl: 'app/templates/weather-list.component.html',
    directives : [WeatherItemComponent]
})

export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    ngOnInit():any {
        this.weatherItems = WEATHER_ITEMS;
    }
 }