import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {AuthHttpService} from '../../core/services/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm : FormGroup;
  constructor(private httpService: AuthHttpService){
      this.myForm = new FormGroup({
          "email": new FormControl("", Validators.required),
          "password": new FormControl("", Validators.required)
      });
  }
   
  ngOnInit() {
  }
  submit(){
      console.log(this.myForm.value);
      this.httpService.postLogin(this.myForm.value).subscribe(
        (data: any) => {console.log(data)},
        error => console.log(error)
    );
  }
}
