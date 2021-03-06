import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewRecipeHttpService {

  servUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  postNewRecipe(user: any) {
    return this.http.post(`${this.servUrl}/recipes`, user);
  }
}
