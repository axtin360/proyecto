import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OtramasComponent } from './pages/otramas/otramas.component';
import { SolucionComponent } from './pages/solucion/solucion.component';
import { VidaComponent } from './pages/vida/vida.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DivisionComponent } from './pages/division/division.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoggedGuard } from './guards/logged.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';


const routes: Routes = [
 
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path: 'dashboard', loadChildren: ('./pages/dashboard/dashboard.module#DashboardModule'),canActivate:[LoggedGuard]},
 {path:'', redirectTo:'login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
