import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module'

const routerConfig: Routes = [
  {
    path: ':id',
    component: RecipeDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule
  ],
  declarations: [RecipeDetailsComponent]
})
export class RecipeDetailsModule { }
