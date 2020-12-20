import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MaterialModule } from 'src/app/module/material/material.module';



@NgModule({
  declarations: [DashboardComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
