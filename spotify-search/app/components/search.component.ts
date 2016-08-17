import {Component} from "@angular/core";
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../models/artist";
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: 'app/templates/search.component.html',
    providers: [SpotifyService],
    directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent {
    searchStr: string;
    searchRes: Artist[];

    constructor(private _spotifyService: SpotifyService) {

    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })
    }
}