import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

const routerConfig: Routes = [{
  path: '',
  component: ProfileComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule,
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
