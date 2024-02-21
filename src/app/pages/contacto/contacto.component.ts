import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm =  new FormGroup ({

      nombre: new FormControl(''),    
      email: new FormControl(''), 
      mensaje: new FormControl('')             /*colocamos los nombres de los fomrularios tiene un grupo de controles cada control es el input*/
  });

  enviarContanto(){
    console.log('enviar fomrulario');
  }
}
