import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class AuthHttpService {
    servUrl = environment.serverUrl;

    private isAuth: BehaviorSubject<any> = null;
    private TOKEN_KEY = 'token';
    public isAuth$: Observable<boolean>;

    constructor(private http: HttpClient) {
        const isAuth = localStorage.getItem(this.TOKEN_KEY) || false;
        this.isAuth = new BehaviorSubject(isAuth);
        this.isAuth$ = this.isAuth.asObservable();
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (token) {
            return true;
        }
        return false;
    }

    setAuth(isAuth: boolean) {
        this.isAuth.next(isAuth);
    }

    postRegister(user: any) {
        return this.http.post(`${this.servUrl}/auth/register`, user);
    }

    postLogin(user: any) {
        return this.http.post(`${this.servUrl}/auth/login`, user);
    }
}