import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import { SharedModule } from '../shared/shared.module';

const routerConfig: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    SharedModule,
    // CommonModule,
    RouterModule.forChild(routerConfig),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
