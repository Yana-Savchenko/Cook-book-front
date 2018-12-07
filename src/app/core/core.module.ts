import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthHttpService } from './services/auth-http.service';
import { HomeHttpService } from './services/home-http.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
    HomeHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
