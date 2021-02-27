import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard} from './route.guard';
import {HomeComponent} from './home/home.component';
import { CustomerComponent} from './customer/customer.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent,canActivate:[RouteGuard]},
  {path:"customer",component:CustomerComponent,canActivate:[RouteGuard]},
  {path:"admin",component:AdminComponent,canActivate:[RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
