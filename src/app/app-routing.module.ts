import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'my-recipes', loadChildren: './my-recipes/my-recipes.module#MyRecipesModule' },
  { path: 'recipe', loadChildren: './recipe-details/recipe-details.module#RecipeDetailsModule' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
