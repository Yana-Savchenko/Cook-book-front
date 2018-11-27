import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  isLiked?:boolean;
  isEdit?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders({ 'Authorization': localStorage.getItem('token') || '' });


  constructor(private http: HttpClient) { }

  getMyRecipes() {

    return this.http.get(`${this.servUrl}/recipes/my-recipes`, { headers: this.headersConfig });

  }

  getCategryRecipes(category) {

    const params = new HttpParams().set('category_id', category);

    return this.http.get(`${this.servUrl}/recipes`, {headers: this.headersConfig, params});

  }

  getAllRecipes() {
    return this.http.get(`${this.servUrl}/recipes`, { headers: this.headersConfig });
  }

  getRecipeDetails(id) {
    return this.http.get(`${this.servUrl}/recipes/recipe/${id}`, { headers: this.headersConfig });
  }

  // interaction with favorite recipes

  getFavoriteRecipes() {
    return this.http.get(`${this.servUrl}/recipes/favorite`, { headers: this.headersConfig });
  }
  postFavoriteRecipes(body) {
    return this.http.post(`${this.servUrl}/recipes/favorite`,  body, { headers: this.headersConfig });
  }
  deleteFavoriteRecipes(id) {
    const params = new HttpParams().set('recipe_id', id);
    return this.http.delete(`${this.servUrl}/recipes/favorite`, { headers: this.headersConfig, params });
  }
}
