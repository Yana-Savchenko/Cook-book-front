import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'

export interface RecipeDetails {
  title: string;
  content: string;
  category: string;
  category_id: number;
  complexity: number;
  cookingTime: string;
  cookingTimeText: string;
  dishPhoto: {
    name: string,
    path: string,
  };
  isLiked?: boolean;
  isEdit?: boolean;
  userId?: number;
  userName?: {
    firstName: string,
    lastName: string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  servUrl = environment.serverUrl;


  constructor(private http: HttpClient) { }

  getMyRecipes() {

    return this.http.get(`${this.servUrl}/recipes/my-recipes`);
  }

  getUserRecipes(userId) {

    const params = new HttpParams().set('user_id', userId);
    return this.http.get(`${this.servUrl}/recipes`, {params});
  }

  getCategryRecipes(category) {

    const params = new HttpParams().set('category_id', category);
    return this.http.get(`${this.servUrl}/recipes`, {params});
  }

  getAllRecipes() {
    return this.http.get(`${this.servUrl}/recipes`);
  }

  getRecipeDetails(id) {
    return this.http.get(`${this.servUrl}/recipes/recipe/${id}`);
  }

  updateRecipeDetails(id, body) {

    return this.http.put(`${this.servUrl}/recipes/recipe/${id}`, body);
  }

  // interaction with favorite recipes

  getFavoriteRecipes() {

    return this.http.get(`${this.servUrl}/recipes/favorite`);
  }
  postFavoriteRecipes(body) {

    return this.http.post(`${this.servUrl}/recipes/favorite`, body);
  }
  deleteFavoriteRecipes(id) {

    const params = new HttpParams().set('recipe_id', id);
    return this.http.delete(`${this.servUrl}/recipes/favorite`, {params});
  }
}
