import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
  {path:'', loadChildren: '../pokedex/pokedex.module#PokedexModule'},
  {path:'pokedex', loadChildren: '../pokedex/pokedex.module#PokedexModule'},
  {path:'modulo_2', loadChildren: '../solucion/solucion.module#SolucionModule'},
  {path:'modulo_4', loadChildren: '../division/division.module#DivisionModule'},
  {path:'modulo_3', loadChildren: '../otramas/otramas.module#OtramasModule'},
  {path:'modulo_5', loadChildren: '../descargas/descargas.module#DescargasModule'},
]},


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
