import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get HttpParams(){
    return  new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');
  }

  // Hay que inyectar el servicio del http
  constructor( private http: HttpClient ) { }

  buscarPais(termino:string): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${termino}`;
    console.log(url);
    return this.http.get<Country[]>(url, {params: this.HttpParams });
  }


  buscarCapital(termino:string): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${termino}`;
    console.log(url);
    return this.http.get<Country[]>(url , {params: this.HttpParams } )
  }

  getPaisPorAlpha(id:string): Observable<Country> {
    const url = `${ this.apiUrl}/alpha/${id}`;
    console.log(url);
    return this.http.get<Country>(url)
  }

  getPaisPorRegion(id:string): Observable<Country[]> {
    const url = `${ this.apiUrl}/region/${id}`;
    console.log(url);
    return this.http.get<Country[]>(url, {params: this.HttpParams } )
  }


}
