import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { VidaComponent } from '../vida/vida.component';
import { DescargasComponent } from '../descargas/descargas.component';
import { OtramasComponent } from '../otramas/otramas.component';
import { DivisionComponent } from '../division/division.component';
import { SolucionComponent } from '../solucion/solucion.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
  {path:'', loadChildren: '../vida/vida.module#VidaModule'},
  {path:'vida', loadChildren: '../vida/vida.module#VidaModule'},
  {path:'solucion', loadChildren: '../solucion/solucion.module#SolucionModule'},
  {path:'division', loadChildren: '../division/division.module#DivisionModule'},
  {path:'otramas', loadChildren: '../otramas/otramas.module#OtramasModule'},
  {path:'descargas', loadChildren: '../descargas/descargas.module#DescargasModule'},
]},


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
