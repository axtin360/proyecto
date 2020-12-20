import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescargasRoutingModule } from './descargas-routing.module';
import { DescargasComponent } from './descargas.component';
import { AppModule } from '../../app.module';
import { MaterialModule } from '../../module/material/material.module';


@NgModule({
  declarations: [DescargasComponent],
  imports: [
    CommonModule,
    DescargasRoutingModule,
    MaterialModule
    
  ]
})
export class DescargasModule { }
