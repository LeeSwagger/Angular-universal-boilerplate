import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { ORIGIN_URL } from '@shared/tokens/origin-url.token';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(ORIGIN_URL) protected originUrl?: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`source url: ${req.url}`);

    const originUrl = this.originUrl || '';
    const serverReq = req.clone({
      url: `${originUrl}${req.url}`
    });

    console.log(`result url: ${serverReq.url}`);
    return next.handle(serverReq);
  }
}
