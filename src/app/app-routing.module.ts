import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './base/base.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canLoad: [AuthGuard] },
  { path: 'my-recipes', loadChildren: './my-recipes/my-recipes.module#MyRecipesModule', canLoad: [AuthGuard] },
  { path: 'recipe', loadChildren: './recipe-details/recipe-details.module#RecipeDetailsModule' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
