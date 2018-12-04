import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AppetizersRecipesComponent } from './appetizers-recipes/appetizers-recipes.component';
import { BreafastRecipesComponent } from './breafast-recipes/breafast-recipes.component';
import { DessertRecipesComponent } from './dessert-recipes/dessert-recipes.component';
import { DinnerRecipesComponent } from './dinner-recipes/dinner-recipes.component';
import { DrinksRecipesComponent } from './drinks-recipes/drinks-recipes.component';
import {FavoritesComponent} from './favorites/favorites.component'
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/guards/auth.guard';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';

const routerConfig: Routes = [{
  path: 'all-recipes',
  component: AllRecipesComponent,
},
{
  path: 'appetizers-and-snack',
  component: AppetizersRecipesComponent,
},
{
  path: 'breafast-and-brunch',
  component: BreafastRecipesComponent,
},
{
  path: 'dessert',
  component: DessertRecipesComponent,
},
{
  path: 'dinner',
  component: DinnerRecipesComponent,
},
{
  path: 'drink',
  component: DrinksRecipesComponent,
},
{
  path: 'favorites',
  component: FavoritesComponent,
  canActivate: [AuthGuard],
},
{
  path: 'user/:id',
  component: UserRecipesComponent,
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule,
  ],
  declarations: [
    AllRecipesComponent,
    AppetizersRecipesComponent,
    BreafastRecipesComponent,
    DessertRecipesComponent,
    DinnerRecipesComponent,
    DrinksRecipesComponent,
    FavoritesComponent,
    UserRecipesComponent
  ]
})
export class RecipesModule { }
