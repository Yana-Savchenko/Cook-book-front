import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ProfileComponent} from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routerConfig: Routes = [{
  path: '',
  component: ProfileComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, ProfileDetailsComponent, ProfileAvatarComponent, ProfileEditComponent]
})
export class ProfileModule { }
