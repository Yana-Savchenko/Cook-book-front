import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryNavComponent,
    CommonModule,
  ],
  declarations: [
    CategoryNavComponent
  ],
})
export class SharedModule { }
