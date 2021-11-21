import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pasien } from './model/pasien';

@Injectable({
  providedIn: 'root'
})

export class PasienService {

  private baseURL= 'http://localhost:3000/pasien';

  constructor( private http: HttpClient) { }

  getPasienList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deletePasien(id_persona: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id_persona}`);
  }

  getPasienByEdad(edad: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByEdad/${edad}`);
  }
  
  getPasienById(id_persona: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchById/${id_persona}`);
  }

  getPasienByDosis(dosis: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDosis/${dosis}`);
  }

}
