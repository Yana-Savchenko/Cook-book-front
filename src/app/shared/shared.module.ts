import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SectionHeaderComponent } from './section-header/section-header.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryNavComponent,
    SectionHeaderComponent,
    CommonModule,
  ],
  declarations: [
    CategoryNavComponent,
    SectionHeaderComponent
  ],
})
export class SharedModule { }
