import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service : ProductService,private toastr:ToastrService) { }

  ngOnInit() {

    this.service.refreshList();
  }

  populateform(prod: Product)
  {
      this.service.formData=Object.assign({},prod);
  }
  onDelete(id:string)
  {
    
    if(confirm('Are you sure you want to delete this record?')){
    this.service.deleteProduct(id).subscribe(res=>{
    this.service.refreshList();
    this.toastr.warning('Product deleted successfully '+id,'Product Deleted...');
    });
  }
}

}
