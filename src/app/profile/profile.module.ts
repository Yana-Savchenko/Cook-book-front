import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';

const routerConfig: Routes = [{
  path: '',
  component: ProfileComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
