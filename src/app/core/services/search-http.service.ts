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

  searchRecipes(data, category = '0', complexity = '', cookingTime = '') {

    let params = new HttpParams().set('search_data', data);

    if (category !=='0') {
      params = params.append('category_id', category);
    }
    if (complexity) {
      params = params.append('sort_complexity', complexity);
    }
    if (cookingTime) {
      params = params.append('sort_cooking_time', cookingTime);
    }
    return this.http.get(`${this.servUrl}/recipes/search`, { headers: this.headersConfig, params });

  }
}
