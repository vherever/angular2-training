import {provideRouter, RouterConfig} from '@angular/router';
import {SearchComponent} from './components/search.component';
import {AboutComponent} from './components/about.component';
import {ArtistComponent} from './components/artist.component';

const routes: RouterConfig = [
    {path: '', component: SearchComponent},
    {path: 'about', component: AboutComponent},
    {path: 'artist/:id', component: ArtistComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];