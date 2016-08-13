import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {WeatherService} from "./services/weather.service";

bootstrap(AppComponent, [HTTP_PROVIDERS, WeatherService]);