import { bootstrap }    from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import { AppComponent } from './components/app.component';

bootstrap(AppComponent, [appRouterProviders]);