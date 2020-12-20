import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtramasRoutingModule } from './otramas-routing.module';
import { OtramasComponent } from './otramas.component';
import { MaterialModule } from '../../module/material/material.module';


@NgModule({
  declarations: [OtramasComponent],
  imports: [
    CommonModule,
    OtramasRoutingModule,
    MaterialModule

  ]
})
export class OtramasModule { }
