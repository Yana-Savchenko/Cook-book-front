import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  servUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getHome() {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/home`, { headers: headersConfig });
  }
}
