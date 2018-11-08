import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {AuthHttpService} from '../../core/services/auth-http.service';

export class User{
  name: string;
  age: number;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  constructor(private httpService: AuthHttpService, private router: Router) {
    this.myForm = new FormGroup({

      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required),
      "age": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required)
    });
  }
   
  ngOnInit() {
  }
  submit(){
      console.log(this.myForm.value);
      this.httpService.postRegister(this.myForm.value).subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home']);
          },
        error => console.log(error)
    );
  }
}
