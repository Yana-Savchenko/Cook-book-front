import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { tap } from 'rxjs/operators';

import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class AuthHttpService {
    servUrl = environment.serverUrl;

    private user: BehaviorSubject<any> = null;
    private TOKEN_KEY = 'token';
    public user$: Observable<boolean>;

    constructor(private http: HttpClient) {
        const user = localStorage.getItem(this.TOKEN_KEY) || false;
        this.user = new BehaviorSubject(user);
        this.user$ = this.user.asObservable();
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (token) {
            return true;
        }
        return false;
    }

    setAuth(user: boolean) {
        this.user.next(user);
    }

    postRegister(user: any) {
        return this.http.post(`${this.servUrl}/auth/register`, user).pipe(
            tap((data: any) => {
                localStorage.setItem('token', data.token);
                if (data.token) {
                    this.setAuth(true);
                }
            })
        )
    }

    postLogin(user: any) {
        return this.http.post(`${this.servUrl}/auth/login`, user).pipe(
            tap((data: any) => {
                localStorage.setItem('token', data.token);
                if (data.token) {
                    this.setAuth(true);
                }
            })
        )
    }
}