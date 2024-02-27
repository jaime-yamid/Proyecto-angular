import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgregarclientesComponent } from '../agregarclientes/agregarclientes.component';
import Swal from 'sweetalert2';
import { ModalComponent } from "../../../components/modal/modal.component";

@Component({
    selector: 'app-verclientes',
    standalone: true,
    templateUrl: './verclientes.component.html',
    styleUrl: './verclientes.component.css',
    imports: [FontAwesomeModule, AgregarclientesComponent, ModalComponent]
})
export class VerclientesComponent implements OnInit {

  misClientes: Cliente []=[];
ngOnInit(): void {
  this.misClientes.push({
    id: 1,
    nombre: "Juan Gabrile",
    direccion: "cra 10#10",
    telefono: "30155888998",
    tipoDocumento: "Cedula",
    numerodeDocumento: "10311789444",
    estado:true,
    email:"luis@gmail.com"


  },
  {
  id: 2,
    nombre: "wewe",
    direccion: "wewe",
    telefono: "string",
    tipoDocumento: "string",
    numerodeDocumento: "wewe",
    estado:true,
    email:"string"
  }) ;

  //interaccion de clientes//
  this.misClientes.forEach((cliente)=> {
    console.log('Mis clientes', cliente);
  });

  }
  eliminarClientes(idcliente : number): void {
   this.misClientes = this.misClientes.filter (
    (cliente)=> cliente.id !== idcliente
   )
/* llamo a mis clientes recorro ese arreglo filter filtra la varibale se llama clinete  del cluiete
le filtro el id  debe ser diferente al id que le estoy enviando como parametro */
    console.log("Eliminar",this.misClientes);
}


recibirData (nuevoCliente: Cliente) {
  this.misClientes.push(nuevoCliente);
  console.log('Datos recibidos del hijo:', nuevoCliente);
}




  FormularioModal():void {
   
Swal.fire({
  title: "llenar formulario",
  
})
  }
}

