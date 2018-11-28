import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  avatar?: string;
};


@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders({ 'Authorization': localStorage.getItem('token') || "" });


  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(`${this.servUrl}/users/profile`, { headers: this.headersConfig });
  }
  updateUserData(user:any) {
    return this.http.put(`${this.servUrl}/users/profile`, user, { headers: this.headersConfig });
  }

  updateAvatar(newAvatar:FormData) {
    return this.http.put(`${this.servUrl}/users/profile/avatar`, newAvatar, { headers: this.headersConfig });
  }
}
