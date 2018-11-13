import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders({ 'Authorization': localStorage.getItem('token') });


  constructor(private http: HttpClient) { }

  getMyRecipes() {

    return this.http.get(`${this.servUrl}/recipes/my-recipes`, { headers: this.headersConfig });

  }

  getCategryRecipes(category) {

    return this.http.get(`${this.servUrl}/recipes/${category}`);

  }

  getAllRecipes() {

    return this.http.get(`${this.servUrl}/recipes`);

  }
}
