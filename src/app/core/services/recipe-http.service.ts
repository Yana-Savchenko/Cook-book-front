import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

export interface Recipe {
  title:string,
  content:string,
};

export interface RecipeDetails {
  title:string,
  content:string,
  category:string,
  complexity:string,
  cookingTime:string,
  dishPhoto: {
    name:string,
    path:string,
  },
}

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

  getRecipeDetails(id) {

    return this.http.get(`${this.servUrl}/recipes/recipe/${id}`);

  }
}
