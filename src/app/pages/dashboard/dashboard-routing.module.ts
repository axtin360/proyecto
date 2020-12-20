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
  {path:'', component:VidaComponent},
  {path:'vida', component: VidaComponent},
  {path:'solucion', component:SolucionComponent},
  {path:'division', component:DivisionComponent},
  {path:'otramas', component:OtramasComponent},
  {path:'descargas', component:DescargasComponent}
]},


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
