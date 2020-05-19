import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './Shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import { AyushComponent } from './ayush/ayush.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { ProductService } from './shared/product.service';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerService } from './Shared/customer.service';

import {AuthguardService} from './gaurds/authguard.service';

const routes: Routes = [
  { path : 'ayush', component: AyushComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'signin', component: SigninComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    SigninComponent,
    AyushComponent,
    CheckoutComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,ProductService,CustomerService,AuthguardService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
