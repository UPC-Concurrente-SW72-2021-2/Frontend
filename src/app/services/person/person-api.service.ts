import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonApiService {
  basePath = 'http://localhost/persons';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  public addPerson(item: Person): Observable<any> {
    console.log(item);
    console.log(JSON.stringify(item));
    return this.http
      .post<Person>(
        `${this.basePath}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(0), catchError(this.handleError));
  }
  public getPerson(): Observable<any> {
    return this.http
      .get<Person>(`${this.basePath}`)
      .pipe(retry(0), catchError(this.handleError));
  }
}
