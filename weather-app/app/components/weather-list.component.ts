import {Component} from "@angular/core";
import {WeatherItemComponent} from "./weather-item.component";

@Component ({
    selector: 'weather-list',
    templateUrl: 'app/templates/weather-list.component.html',
    directives : [WeatherItemComponent]
})

export class WeatherListComponent {

}