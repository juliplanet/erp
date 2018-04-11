import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'; // importa 'Routes' y 'RouterModule' de su ruta correspondiente
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './compras/compras.component';
import { ListadoProvComponent } from './proveedores/listado-prov/listado-prov.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { CrearProvComponent } from './proveedores/crear-prov/crear-prov.component';
import { EditarProvComponent } from './proveedores/editar-prov/editar-prov.component';


// (09 - ANGULAR / 07 - ROUTING)

const rutas:Routes  = [ // constante 'rutas' tiene que ir tipada a 'Routes'
  {path:'', component: InicioComponent}, // carga componente inicial 'InicioComponent' cuando ruta de navegador ('path') esté vacía; ruta ('path') se inicializa vacía porque nace vacía al cargar al inicio el dominio principal de la página (URL = protocolo (http://) + dominio (www... [apunta a dirección IP]) + ruta (/... ) + consulta (?...)
  {path:'compras', component: ComprasComponent}, // carga componente de compras 'ComprassComponent' cuando ruta de navegador ('path') rediriga a dicho componente
  {path:'listado-proveedores', component: ListadoProvComponent},
  {path: 'crear-proveedor', component: CrearProvComponent}, // componente para crear proveedores
  {path: 'editar-proveedor/:id', component: EditarProvComponent}, // componente para editar proveedores
  {path: '**', component: InicioComponent} // carga componente de error 404 'Error404Component' cuando ruta ('path') escrita en la barra de direcciones del navegador no está definida para ningún componente (no existe)
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComprasComponent,
    ListadoProvComponent,
    CabeceraComponent,
    CrearProvComponent,
    EditarProvComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas), // importa 'RouterModule' con método 'forRoot()'
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
