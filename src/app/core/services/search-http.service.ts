import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SearchHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders({ 'Authorization': localStorage.getItem('token') || '' });

  constructor(private http: HttpClient) { }

  searchRecipes(data) {

    const params = new HttpParams().set('search_data', data);
    return this.http.get(`${this.servUrl}/recipes/search`, { headers: this.headersConfig, params });

  }
}
