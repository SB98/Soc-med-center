import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service : ProductService,private toastr:ToastrService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  redirecttocustomer()
  {
    this.router.navigate(['./customerlist']);
  }

  resetForm(form?: NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData={
      Id:null,
      ProductId:'',
      ProductName:'',
      ProductPrice:null,
      Category:'',
      Quantity:null
    }
  }

  // onSubmit(form : NgForm)
  // {
  //   if(form.value.Id==null)
  //   this.insertRecord(form);
  //   else
  //   this.updateRecord(form);
  // }

  insertRecord( form : NgForm)
  {
      this.service.PostProductList(form.value).subscribe(res =>{
      this.toastr.success('Product inserted successfully...','Product Inserted');
      this.resetForm(form);
      this.service.refreshList();
    })
  }
  updateRecord(form:NgForm)
  {
      this.service.updateProductList(form.value).subscribe(
        res=>{
          this.toastr.info('Updated Successfully...','Product updated');
          this.resetForm(form);
          this.service.refreshList();
        }
      );
  }
}
