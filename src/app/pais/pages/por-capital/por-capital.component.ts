import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  // Consumir el servicio
  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => { // Respuesta correcta
        this.paises = paises;
      }, (err) => { // Respuesta error
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}
