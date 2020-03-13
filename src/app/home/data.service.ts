import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  async getData(): Promise<any> {
    return await this.http.get('jsonplaceholder.typicode.com/todos?_limit=3').toPromise();
  }
}
