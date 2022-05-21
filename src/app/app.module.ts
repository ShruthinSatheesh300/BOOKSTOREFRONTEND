import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetcartComponent } from './components/getcart/getcart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    ForgotPasswordComponent,
    GetAllBooksComponent,
    DashboardComponent,
    FooterComponent,
    GetcartComponent,
    OrderplacedComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
