import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BaseComponent} from './base/base.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  loadChildren: './home/home.module#HomeModule' },
  { path: 'profile',  loadChildren: './profile/profile.module#ProfileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
