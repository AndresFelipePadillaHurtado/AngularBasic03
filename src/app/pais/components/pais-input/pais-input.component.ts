import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string>  = new EventEmitter();
  @Output() onDebounce: EventEmitter<string>  = new EventEmitter();

  // Recibir el placeholder
  @Input() placeholder  = '';

  /*es una funcionalidad que se usara en para mostrar las sugerencias
  del buscador que se ejucutara despues de cierto tiempo que se deje de escribir,
  la idea es que se emita cuando se deja de escribir*/
  debouncer: Subject<string> = new Subject();


  /* El onInit se dispara una unica vez cuando el componente es creado
  y ya esta inicializado, se integra el Evento Input para obtener el valor del campo*/
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor =>{
      this.onDebounce.emit( valor );
    });
  }

    termino: string = '';
    buscar(){
      this.onEnter.emit( this.termino );
    }

    teclaPresionada(){
      this.debouncer.next( this.termino );
    }

}
