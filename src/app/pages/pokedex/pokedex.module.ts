import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { MaterialModule } from '../../module/material/material.module';
import { CapitalizadoPipe } from '../../pipes/capitalizado.pipe';



@NgModule({
  declarations: [PokedexComponent, CapitalizadoPipe],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MaterialModule
  ]
})
export class PokedexModule { }
