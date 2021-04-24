import { Component} from '@angular/core';

// Services
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  // Consumir el servicio
  constructor(private paisService:PaisService) { }

  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
    .subscribe( (resp) => { // Respuesta correcta
        console.log( resp );
    }, (err) =>{ // Respuesta error
      this.hayError = true;
    });
  }

}
