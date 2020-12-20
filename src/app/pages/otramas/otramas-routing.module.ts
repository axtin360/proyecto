import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtramasComponent } from './otramas.component';


const routes: Routes = [
  {path:'', component: OtramasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtramasRoutingModule { }
