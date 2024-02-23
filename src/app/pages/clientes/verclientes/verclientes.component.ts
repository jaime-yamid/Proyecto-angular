import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';

@Component({
  selector: 'app-verclientes',
  standalone: true,
  imports: [],
  templateUrl: './verclientes.component.html',
  styleUrl: './verclientes.component.css'
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
    eamil:"luis@gmail.com"


  },
  {
  id: 2,
    nombre: "wewe",
    direccion: "wewe",
    telefono: "string",
    tipoDocumento: "string",
    numerodeDocumento: "wewe",
    estado:true,
    eamil:"string"
  }) ;

  //interaccion de clientes//
  this.misClientes.forEach((cliente)=> {
    console.log('Mis cliuentes', cliente);
  });
    
  }
}

