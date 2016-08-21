import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Config, NavbarComponent, ToolbarComponent } from './shared/index';
import {NameListService} from "./shared/name-list/name-list.service";
import {SearchService} from "./shared/services/search.service";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  viewProviders: [NameListService, SearchService]
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
