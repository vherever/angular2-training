import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, appRoutingProviders} from "./app.routing";
import {AUTH_PROVIDERS} from "angular2-jwt";

import {AppComponent}  from './components/app.component';
import {HomeComponent} from "./components/home.component";
import {ProfileComponent} from "./components/profile.component";

import {Auth} from "./services/auth.service";
import {AuthGuard} from "./auth.guard";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent
    ],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        Auth,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
