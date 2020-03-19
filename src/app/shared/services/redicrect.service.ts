import { Injectable, Inject, Optional } from '@angular/core';
import { Response, Request } from 'express';
import { DOCUMENT } from '@angular/common';
import { INITIAL_CONFIG, ɵINTERNAL_SERVER_PLATFORM_PROVIDERS } from '@angular/platform-server';
import { PlatformLocation } from '@angular/common';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { of } from 'rxjs';
import { HttpRequest, HttpResponse } from '@angular/common/http';

/**
 * This service can't be tested with karma, because tests are run in a browser,
 * but `express` is imported here, which requires `http` module of NodeJS.
 */

// https://github.com/angular/angular/issues/13822#issuecomment-283309920

interface IPlatformLocation {
  pushState(state: any, title: string, url: string): any;

  replaceState(state: any, title: string, url: string): any;
}

// This class is not exported
const ServerPlatformLocation: new (
  _doc: any,
  _config: any
) => IPlatformLocation = (ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as any).find(
  (provider) => provider.provide === PlatformLocation
).useClass;

const okResponse: HttpResponse<{ redirectUrl: '' }> = new HttpResponse({
  status: 200
});
const redirectResponse: HttpResponse<{ redirectUrl: string }> = new HttpResponse({
  body: { redirectUrl: 'https://angular.io' },
  status: 302
});

/**
 * Issue HTTP 302 redirects on internal redirects
 */
@Injectable()
export class ExpressRedirectPlatformLocation extends ServerPlatformLocation {
  constructor(
    @Inject(DOCUMENT) _doc: any,
    @Optional() @Inject(INITIAL_CONFIG) _config: any,
    @Inject(REQUEST) private req: Request,
    @Inject(RESPONSE) private res: Response
  ) {
    super(_doc, _config);
  }

  private redirectExpress(state: any, title: string, url: string) {
    if (url === this.req.url) {
      return;
    }
    of(okResponse).subscribe((response) => {
      // of(redirectResponse).subscribe((response) => {
      if (response.status === 302) {
        this.res.redirect(response.status, response.body.redirectUrl);
        this.res.end();
      }
    });
  }

  pushState(state: any, title: string, url: string): any {
    this.redirectExpress(state, title, url);
    return super.pushState(state, title, url);
  }

  replaceState(state: any, title: string, url: string): any {
    this.redirectExpress(state, title, url);
    return super.replaceState(state, title, url);
  }
}
