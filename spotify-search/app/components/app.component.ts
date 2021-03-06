import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {SearchComponent} from "./search.component";
import {AboutComponent} from "./about.component";
import {AlbumComponent} from "./album.component";
import {ArtistComponent} from "./artist.component";
import {HTTP_PROVIDERS} from '@angular/http';
import {SpotifyService} from "../services/spotify.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    precompile: [SearchComponent, AboutComponent, ArtistComponent, AlbumComponent],
    providers: [HTTP_PROVIDERS, SpotifyService]
})
export class AppComponent {

}