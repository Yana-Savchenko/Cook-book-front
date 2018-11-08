import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

const routerConfig: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routerConfig),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
