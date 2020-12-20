import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucionRoutingModule } from './solucion-routing.module';
import { SolucionComponent } from './solucion.component';
import { MaterialModule } from '../../module/material/material.module';



@NgModule({
  declarations: [SolucionComponent],
  imports: [
    CommonModule,
    SolucionRoutingModule,
    MaterialModule
  ]
})
export class SolucionModule { }
