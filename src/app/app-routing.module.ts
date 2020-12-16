import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OtramasComponent } from './pages/otramas/otramas.component';
import { SolucionComponent } from './pages/solucion/solucion.component';
import { VidaComponent } from './pages/vida/vida.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DivisionComponent } from './pages/division/division.component';


const routes: Routes = [
  //{path:'login', component:LoginComponent},
  {path:'otramas', component:OtramasComponent},
  {path:'solucion', component:SolucionComponent},
  {path:'vida', component:VidaComponent},
  {path:'division', component:DivisionComponent},
  //{path:'home', component:HomeComponent},
  {path:'', redirectTo:'sidebar', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
