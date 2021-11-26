import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PasienService {

  private baseURL= 'http://localhost/persons';

  constructor( private http: HttpClient) { }

  getPasienList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getPasienByEdad(edad: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByEdad/${edad}`);
  }

  getPasienById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchById/${id}`);
  }

  getPasienByDosis(dosis: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDosis/${dosis}`);
  }

}
