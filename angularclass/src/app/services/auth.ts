import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    JWT_KEY: string = 'retain_token';

    constructor(private router: Router) {}

    isAutorized(): boolean {
        return Boolean(window.localStorage.getItem(this.JWT_KEY));
    }

    canActivate(): boolean {
        const isAuth = this.isAutorized();

        if(!isAuth) {
            this.router.navigate(['', 'auth']);
        }
        return isAuth;
    }
}