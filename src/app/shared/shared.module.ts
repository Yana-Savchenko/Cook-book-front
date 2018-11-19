import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component'

const declarations = [
  CategoryNavComponent,
  SectionHeaderComponent,
  RecipeCardComponent,
  RecipeListComponent
];

const modules = [
  CommonModule,
  NgxPaginationModule,
  NgbModule

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
    RecipeListComponent,
  ],
})
export class SharedModule { }
