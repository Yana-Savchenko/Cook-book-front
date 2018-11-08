import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { SharedModule } from '../shared/shared.module';


const routerConfig: Routes = [{
  path: '',
  component: MyRecipesComponent
},
{
  path: 'new-recipe',
  component: NewRecipeComponent
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MyRecipesComponent, NewRecipeComponent]
})
export class MyRecipesModule { }
