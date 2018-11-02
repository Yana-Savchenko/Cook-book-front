import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'
   
@Injectable()
export class AuthHttpService{
    servUrl = environment.serverUrl; 
  
    constructor(private http: HttpClient){ }
      
    postRegister(user: any){
         
        return this.http.post(`${this.servUrl}auth/register`, user); 
    }
    postLogin(user: any){
         
        return this.http.post(`${this.servUrl}auth/login`, user); 
    }
}