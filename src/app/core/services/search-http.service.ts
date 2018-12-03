import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SearchHttpService {

  servUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  searchRecipes(searchParams) {
    
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    let params = new HttpParams().set('search_data', searchParams.search_data);

    if (searchParams.sortCategory !=='0') {
      params = params.append('category_id', searchParams.sortCategory);
    }
    if (searchParams.sortComplexity) {
      params = params.append('sort_complexity', searchParams.sortComplexity);
    }
    if (searchParams.sortTime) {
      params = params.append('sort_cooking_time', searchParams.sortTime);
    }
    if (searchParams.complexityFilter) {
      params = params.append('filter_complexity', searchParams.complexityFilter.toString());
    }
    if (searchParams.timeFilter) {
      params = params.append('filter_time', searchParams.timeFilter);
    }
    return this.http.get(`${this.servUrl}/recipes/search`, { headers: headersConfig, params });

  }
}
