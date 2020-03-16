import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    // BE requests have to start with 'api/' https://angular.io/guide/universal#filtering-request-urls
    return this.http.get(`/api/todos?_limit=3`).toPromise();
  }
}
