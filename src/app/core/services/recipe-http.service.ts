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
  category_id: number,
  complexity:number,
  cookingTime:string,
  cookingTimeText:string,
  dishPhoto: {
    name:string,
    path:string,
  },
  isLiked?:boolean;
  isEdit?:boolean;
  userId?:number;
  userName?: {
    firstName:string,
    lastName:string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  servUrl = environment.serverUrl;
  headersConfig = new HttpHeaders();


  constructor(private http: HttpClient) { }

  getMyRecipes() {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/recipes/my-recipes`, { headers: headersConfig });
  }

  getUserRecipes(userId) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    const params = new HttpParams().set('user_id', userId);
    return this.http.get(`${this.servUrl}/recipes`, { headers: headersConfig, params });
  }

  getCategryRecipes(category) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    const params = new HttpParams().set('category_id', category);
    return this.http.get(`${this.servUrl}/recipes`, {headers: headersConfig, params});
  }

  getAllRecipes() {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/recipes`, { headers: headersConfig });
  }

  getRecipeDetails(id) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/recipes/recipe/${id}`, { headers: headersConfig });
  }

  updateRecipeDetails(id, body) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.put(`${this.servUrl}/recipes/recipe/${id}`, body, { headers: headersConfig });
  }

  // interaction with favorite recipes

  getFavoriteRecipes() {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.get(`${this.servUrl}/recipes/favorite`, { headers: headersConfig });
  }
  postFavoriteRecipes(body) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    return this.http.post(`${this.servUrl}/recipes/favorite`,  body, { headers: headersConfig });
  }
  deleteFavoriteRecipes(id) {
    const headersConfig = new HttpHeaders({'Authorization': localStorage.getItem('token') || ''});
    const params = new HttpParams().set('recipe_id', id);
    return this.http.delete(`${this.servUrl}/recipes/favorite`, { headers: headersConfig, params });
  }
}
