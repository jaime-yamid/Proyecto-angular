import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AgregarclientesComponent } from '../agregarclientes/agregarclientes.component';
import { ModalComponent } from "../../../components/modal/modal.component";
import { ClientesService } from '../../../services/clientes/clientes.service';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-verclientes',
    standalone: true,
    templateUrl: './verclientes.component.html',
    styleUrl: './verclientes.component.css',
    imports: [FontAwesomeModule, AgregarclientesComponent, ModalComponent]
})
export class VerclientesComponent implements OnInit {

  misClientes: Cliente []=[];

  // en el constructor creo o traigo servicio que cree

  // voy a llamar otra ruta 
  constructor( private clienteService: ClientesService, private router: Router) {}
  

  
ngOnInit(): void {
  // this.misClientes.push({
  //   id: 1,
  //   nombre: "Juan Gabrile",
  //   direccion: "cra 10#10",
  //   telefono: "30155888998",
  //   tipoDocumento: "Cedula",
  //   numerodeDocumento: "10311789444",
  //   estado:true,
  //   email:"luis@gmail.com"


  // },
  // {
  // id: 2,
  //   nombre: "wewe",
  //   direccion: "wewe",
  //   telefono: "string",
  //   tipoDocumento: "string",
  //   numerodeDocumento: "wewe",
  //   estado:true,
  //   email:"string"
  // }) ;

 // interaccion de clientes//
 this.misClientes.forEach((cliente)=> {
   console.log('Mis clientes', cliente);
  });

  // esta pendiente de los clinetes con ese
this.clienteService.getClientes().subscribe((data: any)=> {
console.log(data);
this.misClientes = data.clientes;

});

  }
  eliminarClientes(idcliente : number): void {
   this.misClientes = this.misClientes.filter (
    (cliente)=> cliente._id !== idcliente
   )
/* llamo a mis clientes recorro ese arreglo filter filtra la varibale se llama clinete  del cluiete
le filtro el id  debe ser diferente al id que le estoy enviando como parametro */
    console.log("Eliminar",this.misClientes);
}

// le digo a navigate que quiero ir a add clientes
//  agregarCLiente() {
// this.router.navigateByUrl('add-clientes');
//  }

recibirData (nuevoCliente: Cliente) {
  this.misClientes.push(nuevoCliente);
  console.log('Datos recibidos del hijo:', nuevoCliente);
}

  // AGREGANDO MODAL

  modalAbrir:boolean= false;
funcionAbrir(){
  this.modalAbrir=true;
}
funcionCerrar(){
  this.modalAbrir=false;
}

cerrarboton(evento:boolean){
  this.modalAbrir=false;
}

}

