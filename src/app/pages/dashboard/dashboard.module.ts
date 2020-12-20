import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

/***************** MATERIAL **************************/
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from '../../components/footer/footer.component';
import { VidaComponent } from '../vida/vida.component';
import { DescargasComponent } from '../descargas/descargas.component';
import { OtramasComponent } from '../otramas/otramas.component';
import { SolucionComponent } from '../solucion/solucion.component';
import { DivisionComponent } from '../division/division.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';



@NgModule({
  declarations: [DashboardComponent, FooterComponent, VidaComponent, DescargasComponent,OtramasComponent,SolucionComponent, SidebarComponent,DivisionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
