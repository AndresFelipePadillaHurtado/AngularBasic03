import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //constructor Se ejecuta antes del inicializar el componenete
  constructor(
    private activatedRoute: ActivatedRoute, // Sirve para tener acceso e indicar en la ruta que estamso
    private paisService:PaisService
  ) { }

  //ngOnInit Se ejecuta despues de ejuctar el componenete
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( params =>{ // Los parametro de las rutas

      //
      this.paisService.getPaisPorAlpha(params.id)
      .subscribe(pais =>{
        console.log(pais);
      });
    });
  }

}
