import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ContadorComponent } from "../../components/contador/contador.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TablaComponent, ContadorComponent]
})


export class PersonaComponent {
  titulo: string = "componente Persona"
  edad: number =25;
  ocultar: boolean = false;  //muestra o no el parrafo ojoooo
  titulotabla: string ="Titulo Padre"
  contador : number =0; // aca estoy es inicailzando una varibale para que me guarde todo lo que esta enviando
  users: { id: number , name: string }[] = [
  {id: 0, name: 'sarah'},
  {id: 1, name: 'Lucas'},
  {id: 2, name: 'Benito'},
  {id: 3, name: 'ANtonio'},
  {id: 4, name: 'Camilo'},
  {id: 5, name: 'sarah2'},
  ] ;

  recibirContador(numero: number) { // recbii un dato un numero
  this.contador = numero;
  
}
}