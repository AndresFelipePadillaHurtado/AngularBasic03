import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

    // Uso del operador switcMap, este recibe un Observable y retorna otro Observable
    this.activatedRoute.params
    .pipe(
      switchMap( (params) => this.paisService.getPaisPorAlpha(params.id) )
    )
    .subscribe( resp => {

    });

    // this.activatedRoute.params
    // .subscribe( params =>{ // Los parametro de las rutas
    //   this.paisService.getPaisPorAlpha(params.id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   });
    // });

  }

}
