import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryNavComponent } from './category-nav/category-nav.component';

@NgModule({
  imports: [
    CommonModule
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
