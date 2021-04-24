import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  // Hay que inyectar el servicio del http
  constructor( private http: HttpClient ) { }

  buscarPais(termino:string): Observable<any>{
    const url = `${ this.apiUrl}/name/${termino}`;
    console.log(url);
    return this.http.get(url)
  }

}
