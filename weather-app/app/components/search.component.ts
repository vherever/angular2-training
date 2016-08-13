import {Component} from "@angular/core";
import {ControlGroup} from "@angular/common";
import {WeatherService} from "../services/weather.service";
import {WeatherItem} from "../models/weather-item.model";
@Component({
    selector: 'weather-search',
    templateUrl: 'app/templates/search.component.html'
})

export class WeatherSearchComponent {
    constructor(private _weatherService: WeatherService) {}

    onSubmit(form: ControlGroup) {
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }
}