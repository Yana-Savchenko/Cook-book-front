import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';

const routerConfig: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routerConfig),
    NgbModule
  ],
  declarations: [HomeComponent, CarouselComponent]
})
export class HomeModule { }
