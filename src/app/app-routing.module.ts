import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BaseComponent} from './base/base.component';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AppComponent, loadChildren: './auth/auth.module#AuthModule'  },
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: BaseComponent, loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', component: BaseComponent, loadChildren: './profile/profile.module#ProfileModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
