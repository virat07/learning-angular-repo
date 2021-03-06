import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(this.handleError)
    );

  }
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response => response),
      catchError(this.handleError));
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({
      isRead: true
    })).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error));
  }

}
