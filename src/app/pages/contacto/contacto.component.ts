import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
 ContactoForm = new FormGroup ({
   nombre: new FormControl('',Validators.required),  /* se establece el atributo name , quiere decir el */
   email:new  FormControl ('',[Validators.email,Validators.required]),
   mensaje:new  FormControl ('Mensaje por defecto'),                       /*   formulario tiene un grupo de controles  cada input es un control*/
 });
 enviarcontacto(){
  console.log('Envia formulario',this.ContactoForm)
 }
}
