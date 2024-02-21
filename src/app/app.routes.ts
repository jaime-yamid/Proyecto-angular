import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
export const routes: Routes = [
    {
        path: '#',  // cyal es el path
          title: 'inicio',// el nombre de la pagina
          component: InicioComponent,   //componente como tal
},
{
    path: 'servicio',  // cyal es el path
    title: 'Servicios',// el nombre de la pagina o arriba 
    component: ServiciosComponent,   //componente como tal
},

{
    path: 'acercade',  // cyal es el path
    title: 'Quienes somos',// el nombre de la pagina arriba
    component: AcercaDeComponent,   //componente como tal
    
},
{
    path: 'contacto',  // cyal es el path
    title: 'Contactos',// el nombre de la pagina
    component: ContactoComponent,   //componente como tal
}
];
