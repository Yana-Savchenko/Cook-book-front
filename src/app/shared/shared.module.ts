import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component'

const declarations = [
  CategoryNavComponent,
  SectionHeaderComponent,
  RecipeCardComponent
];

const modules = [
  CommonModule,
];

@NgModule({
  imports: [
    RouterModule,
    ...modules
  ],
  exports: [
    CommonModule,
    ...declarations,
    ...modules
  ],
  declarations: [
    ...declarations,
  ],
})
export class SharedModule { }
