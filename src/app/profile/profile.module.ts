import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';

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
  declarations: [ProfileComponent, ProfileDetailsComponent, ProfileAvatarComponent]
})
export class ProfileModule { }
