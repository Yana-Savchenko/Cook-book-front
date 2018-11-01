import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpService} from './http.service';


@NgModule({
  imports: [
    CommonModule,
    HttpService
  ],
  exports: [
    HttpService
  ],
  providers: [
    HttpService
  ],
  declarations: []
})
export class CoreModule { }
