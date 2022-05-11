import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoardComponent } from './components/dashoard/dashoard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';

const routes: Routes = [
  {path:'signup-login',component:SignupLoginComponent},
  {path:'forgetpass',component:ForgotPasswordComponent},
  {path:'dashboard',component:DashoardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
