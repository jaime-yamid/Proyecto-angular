import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  nombre: string = '';
  ngOnInit(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  //funcion mostrar modal
mostrarModal():void {
Swal.fire({
  title:'The internet?',
  text :'that thing still aroind?',
  icon: 'success',
  width: '25em'
})

}

}
