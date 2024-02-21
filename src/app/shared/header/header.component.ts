import { Component } from '@angular/core';
import { ContadorComponent } from "../../components/contador/contador.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ContadorComponent, RouterLink]
})
export class HeaderComponent {
  contador:number = 0;
recibirContador(valor: number){
  this.contador = valor;
}
}
