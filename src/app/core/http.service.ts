import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    post(localhost: string, user: any){
         
        return this.http.post(localhost, user); 
    }
}