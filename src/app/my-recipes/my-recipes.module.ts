import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


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
  ],
  declarations: [MyRecipesComponent, NewRecipeComponent]
})
export class MyRecipesModule { }
