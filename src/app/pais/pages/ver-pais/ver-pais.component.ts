import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // ! indicarle que pais puede ser nulo

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
      switchMap( (params) => this.paisService.getPaisPorAlpha(params.id) ),
      tap( console.log ) // El operador tap sirve para poner en resultado de la consola
    )
    .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    // .subscribe( params =>{ // Los parametro de las rutas
    //   this.paisService.getPaisPorAlpha(params.id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   });
    // });

  }

}
