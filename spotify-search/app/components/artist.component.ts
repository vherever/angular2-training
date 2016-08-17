import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../models/artist";
import {Album} from "../models/album";
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'artist',
    templateUrl: 'app/templates/artist.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ArtistComponent implements OnInit{
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
            })
    }
}