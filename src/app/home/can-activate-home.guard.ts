import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class CanActivateHome implements CanActivate {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.document.location.href = 'https://angular.io';
    return false;
  }
}
