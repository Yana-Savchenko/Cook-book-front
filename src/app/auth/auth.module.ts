import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component';
import { LoginComponent } from './login/login.component';


const routerConfig: Routes = [{
  path: '',
  component: LoginComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
