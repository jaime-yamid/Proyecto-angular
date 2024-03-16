import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ContadorComponent } from "../../components/contador/contador.component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TablaComponent, ContadorComponent, ModalComponent]
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

  recibirContador(numero: number) { // recbii un dato del componnete un numero
  this.contador = numero;
  
}
//no tienen que ser del mismo nombre son componentes diferentes - si deben ser similares de manera se pueda 
// reconocer cuando los vea 

modalAbrir:boolean= false;
funcionAbrir(){
  this.modalAbrir=true;
}
funcionCerrar(){
  this.modalAbrir=false;
}

}