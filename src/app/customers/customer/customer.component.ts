import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/customer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service : CustomerService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.resetForm();
    }
    this.service.formData={
      Id:null,
      Username:'',
      Password:'',
      ConfirmPassword:'',
      Email:'',
      Address:'',
      PhoneNumber:''
    }
  }

  onSubmit(form:NgForm)
  {
    this.insertRecord(form);
  }
  insertRecord(form:NgForm)
  {
    this.service.postCustomer(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','CUST Register');
      this.resetForm(form);
    });
  }

}
