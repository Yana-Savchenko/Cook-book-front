import { Injectable } from '@angular/core';
import {
    CanLoad,
    Route,
    Router,
} from '@angular/router';
import { AuthHttpService } from '../services/auth-http.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    constructor(
        private authService: AuthHttpService,
        private router: Router,
    ) { }

    canLoad(route: Route): boolean {
        return this.checkLogin();
    }

    checkLogin(): boolean {
        const isLoggedIn = this.authService.isAuthenticated();
        if (isLoggedIn) { return true; }
        this.authService.setAuth(false);
        this.router.navigate(['home']);
        return false;
    }
}
