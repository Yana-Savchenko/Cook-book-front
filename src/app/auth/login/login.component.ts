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
  private errMessage:string = '';
  
  constructor(private httpService: AuthHttpService, private router: Router) {
    this.myForm = new FormGroup({
      "email": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  
  submit() {
    this.httpService.postLogin(this.myForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        if (error.status === 400) {
          this.errMessage = error.error.message;
        }
      }
    );
  }
}
