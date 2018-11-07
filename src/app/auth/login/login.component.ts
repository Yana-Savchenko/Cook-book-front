import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthHttpService } from '../../core/services/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;
  constructor(private httpService: AuthHttpService, private router: Router) {
    this.myForm = new FormGroup({
      "email": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.myForm.value);
    this.httpService.postLogin(this.myForm.value).subscribe(
      (data: any) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
        this.httpService.setAuth(true);
      },
      error => console.log(error)
    );
  }
}
