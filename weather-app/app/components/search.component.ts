import {Component, OnInit} from "@angular/core";
import {WeatherService} from "../services/weather.service";
import {WeatherItem} from "../models/weather-item.model";
import {Subject} from "rxjs/Rx";
@Component({
    selector: 'weather-search',
    templateUrl: 'app/templates/search.component.html'
})

export class WeatherSearchComponent implements OnInit{
    private searchStream = new Subject<string>();
    data: any = {};

    constructor(private _weatherService: WeatherService) {}

    onSubmit() {
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
    }

    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }

    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => this.data = data
            );
    }
}