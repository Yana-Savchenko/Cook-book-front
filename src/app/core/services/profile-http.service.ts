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


  constructor(private http: HttpClient) { }

  getUserData() {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/users/profile`, { headers: headersConfig });
  }
  updateUserData(user:any) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.put(`${this.servUrl}/users/profile`, user, { headers: headersConfig });
  }

  updateAvatar(newAvatar:FormData) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.put(`${this.servUrl}/users/profile/avatar`, newAvatar, { headers: headersConfig });
  }
}
