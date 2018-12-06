import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserRecipesComponent } from './user-recipes/user-recipes.component';
import { SharedModule } from '../shared/shared.module';

const routerConfig: Routes = [{
  path: 'recipes/:id',
  component: UserRecipesComponent,
}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule,
  ],
  declarations: [UserRecipesComponent]
})
export class UserModule { }
