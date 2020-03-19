// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { CookieService, CookieBackendService } from '@gorniv/ngx-universal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from '@shared/interceptors/universal-interceptor';
import { PlatformLocation } from '@angular/common';
// import { ExpressRedirectPlatformLocation } from '@shared/services/redicrect.service';

@NgModule({
  imports: [
    // AppModule - FIRST!!!
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    InlineStyleModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    // { provide: PlatformLocation, useClass: ExpressRedirectPlatformLocation },
    {
      provide: CookieService,
      useClass: CookieBackendService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    }
  ]
})
export class AppServerModule {}
