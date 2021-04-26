import { Component} from '@angular/core';

// Services
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `a{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarTermino: boolean = false;

  // Consumir el servicio
  constructor(private paisService: PaisService) { }

  buscar( termino:string ): void {
    this.termino = termino;
    this.mostrarTermino = true;
    this.hayError = false;
    this.paisesSugeridos= [];
    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) => { // Respuesta correcta
        this.paises = paises;
    }, (err) => { // Respuesta error
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.paisesSugeridos = [];
    this.mostrarTermino = true;
    this.paisService.buscarPais(termino)
    .subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0,5)
      }, (err)=> {
        this.paisesSugeridos= [];
      })
  }

}
