import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FavoritesComponent } from './favorites/favorites.component';

import { SharedModule } from '../shared/shared.module';

const routerConfig: Routes = [{
  path: '',
  component: FavoritesComponent
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routerConfig),
    NgbModule
  ],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
