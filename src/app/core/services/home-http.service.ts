import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders({ 'Authorization': localStorage.getItem('token') });

  constructor(private http: HttpClient) { }

  getHome() {

    return this.http.get(`${this.servUrl}/recipes/home`, { headers: this.headersConfig });
  }
}
