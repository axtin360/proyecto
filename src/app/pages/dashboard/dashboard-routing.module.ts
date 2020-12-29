import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
  {path:'', loadChildren: '../pokedex/pokedex.module#PokedexModule'},
  {path:'pokedex', loadChildren: '../pokedex/pokedex.module#PokedexModule'},
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
