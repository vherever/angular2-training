import {Component} from "@angular/core";
import {Profile} from "../profile";
import {ProfileService} from "../services/profile.service";
import {WeatherService} from "../services/weather.service";
import {OnInit} from "@angular/core/esm";
import {WeatherItem} from "../models/weather-item.model";
@Component({
    selector: 'sidebar',
    templateUrl: 'app/templates/sidebar.component.html',
    providers: [ProfileService]
})
export class SidebarComponent implements OnInit{
    profiles: Profile[];

    constructor(private _profileService: ProfileService, private _weatherService: WeatherService) {}

    onSaveNew() {
        const cities = this._weatherService.getWeatherItems().map(function (element: WeatherItem) {
            return element.cityName;
        });
        this._profileService.saveNewProfile(cities);
    }

    onLoadProfile(profile: Profile) {
        this._weatherService.clearWeatherItems();
        for (let i = 0; i < profile.cities.length; i ++) {
            this._weatherService.searchWeatherData(profile.cities[i])
                .retry()
                .subscribe(
                    data => {
                        const weatherItem = new WeatherItem(
                            data.name,
                            data.weather[0].description,
                            data.main.temp
                        );
                        this._weatherService.addWeatherItem(weatherItem);
                    }
                );
        }
    }

    onDeleteProfile(event: Event, profile: Profile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    }

    ngOnInit() {
        this.profiles = this._profileService.getProfiles();
    }
}