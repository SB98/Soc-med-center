import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from 'src/app/Shared/user.model';
import { UserService } from 'src/app/Shared/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;
  model:any={};
  constructor(private userService:UserService, private toastr: ToastrService) { 

  }
  
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
         ConfirmPassword:'',
         Email:'',
         Address:'',
               
         PhoneNumber:''
    }
  }

  checkPwd(form:NgForm)
  {
    if(form.value.Password!=form.value.ConfirmPassword)
    {
      this.toastr.error("password and confirm pass do not match");

    }
  }

  OnSubmit(form:NgForm)
  {
    //alert(JSON.stringify(this.model));
    //form.value will contain the value of the each and every form fields
    if(form.value.Password!=form.value.ConfirmPassword)
    {
      this.toastr.error("password and confirm pass do not match");

    }
    else{
    this.userService.PostProductList(form.value)
    .subscribe((data:any)=>{
      
      if(data["ok"] == 1)
      {
          this.resetForm(form);
          this.toastr.success("Registered Successfully");
      }
    });//PostProductList will return the observable so we need to subscribe
  }
  }
}
