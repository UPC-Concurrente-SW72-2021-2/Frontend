import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Vaccinated} from "../../models/vaccinated";

@Injectable({
  providedIn: 'root'
})
export class VaccinatedApiService {

  basePath = 'http://localhost:4900';
  constructor(private http: HttpClient) {

  }
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error occurred: ', error.error.message);
    } else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  public addVaccinated(item: Vaccinated): Observable<any> {
    console.log(item);
    console.log(JSON.stringify(item));
    return this.http.post<Vaccinated>(`${this.basePath}/vaccinated`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(0), catchError(this.handleError));
  }
  public getVaccinated(): Observable<any>{
    return this.http.get<Vaccinated>(`${this.basePath}/vaccinated`)
      .pipe(retry(0), catchError(this.handleError));
  }
}
