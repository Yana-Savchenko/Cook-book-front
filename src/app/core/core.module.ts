import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import {AuthHttpService} from './services/auth-http.service';
import {HomeHttpService} from './services/home-http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    AuthHttpService,
    HomeHttpService
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
