import {Component} from "@angular/core";
import {ControlGroup} from "@angular/common";
@Component({
    selector: 'weather-search',
    templateUrl: 'app/templates/search.component.html'
})

export class WeatherSearchComponent {
    onSubmit(form: ControlGroup) {
        console.log(form);
    }
}