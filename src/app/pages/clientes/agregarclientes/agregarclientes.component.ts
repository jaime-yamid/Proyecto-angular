import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-agregarclientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregarclientes.component.html',
  styleUrl: './agregarclientes.component.css'
})
export class AgregarclientesComponent {
  clienteform = new FormGroup ({
    id: new FormControl('',Validators.required), 
    nombre: new FormControl('',Validators.required),  
    direccion: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),  
    email:new  FormControl ('',[Validators.email,Validators.required]),
    tipoDocumento:new  FormControl ('',[Validators.required]),                     /*   formulario tiene un grupo de controles  cada input es un control*/
    numerodeDocumento:new  FormControl ('',[Validators.required]),
    estado: new FormControl(true,Validators.required), 
  });
  // enviarcontacto(){
  //  console.log('Envia formulario',this.ContactoForm)
  // }
@output()mostrarClientes: EventEmitter<Cliente>= new EventEmitter<Cliente>;

  crearcliente (){
    const data = this.clienteform.value;
    const nuevoCliente:Cliente ={
      id:Number(data.id),
      nombre: data.nombre || "",
      direccion: String(data.direccion),
      telefono: String(data.telefono),
      tipoDocumento: String(data.tipoDocumento),
      numerodeDocumento: String(data.numerodeDocumento),
      estado:Boolean(data.estado),
      email: String(data.email),
    };
    this.mostrarClientes.emit(nuevoCliente);
    // console.log('Envia formulario',this.clienteform)
  }
  

}
function output(): (target: AgregarclientesComponent, propertyKey: "mostrarClientes") => void {
  throw new Error('Function not implemented.');
}

