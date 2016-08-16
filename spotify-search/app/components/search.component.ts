import {Component} from "@angular/core";
import {SpotifyService} from "../services/spotify.service";

@Component({
    selector: 'search',
    templateUrl: 'app/templates/search.component.html',
    providers: [SpotifyService]
})
export class SearchComponent {
    searchStr: string;

    constructor(private _spotifyService: SpotifyService) {

    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                console.log(res.artists.items);
            })
    }
}