import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paises:Country[] = [];

  // Registrar el servicio
  constructor(
    private paisService: PaisService
  ) { }

  activaRegion( region:string){

    if(region == this.regionActiva){
      return;
    } // si es la misma regon no se vuelva a cargar

    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisPorRegion(region)
    .subscribe( resp =>  this.paises = resp)
  }

  getClassCss(region:string){
   return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }


}
