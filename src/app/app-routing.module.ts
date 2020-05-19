import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { AyushComponent } from './ayush/ayush.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ProductsComponent} from './products/products.component';

import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductComponent} from './products/product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { from } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { AuthguardService } from './gaurds/authguard.service';
import { AuthGuardService } from './auth/authG.service';


const routes: Routes = [

  {
    path: 'signup',component:UserComponent,//Here UserComponent is the parent component.
    children:[{path:'',component:SignupComponent}]//children array is for the child components.
  },
  {
    path:'login',component:UserComponent,
    children:[{path:'',component:SigninComponent}]
  },



  {
    path:'customer',component:CustomersComponent,
    children:[{path:'',component:CustomersComponent}]
  },


  {
    path:'customers',component:CustomersComponent
  },

  {
    path:'customerlist',component:CustomersComponent,
    children:[{path:'',component:CustomerListComponent}]
  },



  {
    path:'product',component:ProductsComponent,
    children:[{path:'',component:ProductComponent}]
  },


  {
    path:'products',component:ProductsComponent
  },

  {
    path:'productlist',component:ProductsComponent,
    children:[{path:'',component:ProductListComponent}]
  },

  {
    path:'details',component:ProductDetailsComponent
  },

  {
    path:'ayush',component:AyushComponent,canActivate: [AuthguardService],
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'home',component:HomeComponent,canActivate: [AuthguardService],
  },
  {
    path:'',redirectTo:'home' , pathMatch : 'full'  //Due to this by default the application will show the SignInComponent.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService],

})
export class AppRoutingModule { }
