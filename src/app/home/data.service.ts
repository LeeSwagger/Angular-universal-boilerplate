import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return this.http.get('/api/todos?_limit=3').toPromise();
  }
}
