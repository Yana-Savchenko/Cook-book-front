import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  servUrl = environment.serverUrl;

  constructor(private http: HttpClient){ }

  getHome(){
         
    return this.http.get(`${this.servUrl}recipes/home`); 
}
}
