import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoggedGuard } from './guards/logged.guard';


const routes: Routes = [
 
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path: 'dashboard', loadChildren: ('./pages/dashboard/dashboard.module#DashboardModule'), canActivate: [LoggedGuard]},
 {path:'', redirectTo:'login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}