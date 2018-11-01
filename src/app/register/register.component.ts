import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {HttpService} from '../core/http.service';

export class User{
  name: string;
  age: number;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [HttpService]
})
export class RegisterComponent implements OnInit {

  myForm : FormGroup;
  constructor(private httpService: HttpService){
      this.myForm = new FormGroup({
           
          "firstName": new FormControl("", Validators.required),
          "lastName": new FormControl("", Validators.required),
          "email": new FormControl("", Validators.required),
          "age": new FormControl("", Validators.required),
          "password": new FormControl("", Validators.required)
      });
  }
   
  ngOnInit() {
  }
  submit(){
      console.log(this.myForm.value);
      this.httpService.post('http://localhost:3000/auth/register', this.myForm.value).subscribe(
        (data: User) => {console.log(data)},
        error => console.log(error)
    );
  }
}
