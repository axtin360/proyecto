import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VidaRoutingModule } from './vida-routing.module';
import { VidaComponent } from './vida.component';
import { MaterialModule } from '../../module/material/material.module';


@NgModule({
  declarations: [VidaComponent],
  imports: [
    CommonModule,
    VidaRoutingModule,
    MaterialModule
  ]
})
export class VidaModule { }
