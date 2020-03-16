// angular
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { StateTransferInitializerModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { ORIGIN_URL } from '@shared/tokens/origin-url.token';

@NgModule({
  bootstrap: [AppComponent, InlineStyleComponent],
  imports: [
    AppModule,
    StateTransferInitializerModule,
    BrowserTransferStateModule,
    HttpClientModule,
    InlineStyleModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false })
  ],
  providers: [{ provide: ORIGIN_URL, useValue: location.origin }]
})
export class AppBrowserModule {}
