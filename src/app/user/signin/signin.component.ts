import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Shared/user.model';
import { UserService } from '../../Shared/user.service';
import { stringify } from '@angular/core/src/util';
import {Router} from '@angular/router';

import { AuthGuardService } from '../../auth/authG.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User;

  constructor(private userService:UserService, private toastr: ToastrService,private router: Router,private auth:AuthGuardService) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.user={
      Username:'',
      Password:'',
      Email:'',
     
      Address:'',
      ConfirmPassword:'',
      PhoneNumber:null
     }
  }

    OnSubmit(form:NgForm)
    {
      if(form.value.UserName=="Admin" && form.value.Password=="Admin")
        this.router.navigate(['./productlist'])
      //form.value will contain the value of the each and every form fields
      else
      {
      this.userService.ProductList(form.value.UserName,form.value.Password)
      .subscribe((data:any)=>{
        
        if(data["ok"] == 1)
        {
            this.resetForm();
            this.auth.loggedIn("logged in");
            this.toastr.success("Login Successfully");
        }
        else
        {
          this.toastr.error("Invalid credentials...");
        }
      });//ProductList will return the observable so we need to subscribe
    }
  }
  }

