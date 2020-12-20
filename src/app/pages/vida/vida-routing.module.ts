import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VidaComponent } from './vida.component';


const routes: Routes = [
  {path:'', component: VidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VidaRoutingModule { }
