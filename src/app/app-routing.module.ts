import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { GetcartComponent } from './components/getcart/getcart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'signup-login',component:SignupLoginComponent},
  {path:'forgetpass',component:ForgotPasswordComponent},
    {
    path: 'dashboard',component:DashboardComponent,
    children: [
        {path:'', redirectTo:"/dashboard/getAllBooks", pathMatch:'full' },
       { path: 'getAllBooks', component: GetAllBooksComponent },
       { path: 'getcart', component:GetcartComponent},
       { path: 'orderplaced', component:OrderplacedComponent},
       { path: 'wishlist', component:WishlistComponent}
     ]}
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
