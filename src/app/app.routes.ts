import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VerclientesComponent } from './pages/clientes/verclientes/verclientes.component';
import { AgregarclientesComponent } from './pages/clientes/agregarclientes/agregarclientes.component';
import { AutenticacionComponent } from './auth/autenticacion/autenticacion.component';
export const routes: Routes = [
    {
        path: '',  // cyal es el path
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
},

{
    path: 'cliente',  // cyal es el path
    title: 'clientes potenciales',// el nombre de la pagina
    component: VerclientesComponent,   //componente como tal
},
{
    path: 'add-clientes',  // cyal es el path
    title: 'Agregar clientes',// el nombre de la pagina
    component: AgregarclientesComponent,   //componente como tal
},

{
    path: 'login',  // cyal es el path o ruta
    title: 'Autenticacion',// el nombre de la pagina
    component: AutenticacionComponent,   //componente como tal
}
];
