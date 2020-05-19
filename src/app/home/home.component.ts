import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import { ToastrService } from 'ngx-toastr';

import { AuthGuardService } from '../auth/authG.service';
import { Login } from '../Shared/login';
import { SigninComponent } from '../user/signin/signin.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public prodList=[];
  constructor(private auth:AuthGuardService,public router: Router,private service : ProductService,private toastr:ToastrService) { }

  ngOnInit() {
    
    this.service.refreshList();
   
   /* if(!this.auth.test())
    {
      this.router.navigate([SigninComponent]);
    }*/
  }

}
