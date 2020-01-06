import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }


}
