import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

const routerConfig: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  // {
  //   path: ':search_data',
  //   component: SearchComponent,
  // },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
    SharedModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
