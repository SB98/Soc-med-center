import { Injectable } from '@angular/core';

import { Product } from './product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: Product;
  list:Product[];
    readonly rooturl1="http://localhost:51376/ProductService.svc";
    //http://localhost:51376/Service1.svc/
    constructor(private http: HttpClient) { }

    PostProductList(formData : Product)
    {
       return this.http.post(this.rooturl1+'/ProductList?pid='+formData.ProductId+'&pname='+formData.ProductName+'&pprice='+formData.ProductPrice+'&cat='+formData.Category+'&qty='+formData.Quantity,formData);
    }
  
    refreshList()
    {
      this.http.get(this.rooturl1+'/ProductListget').toPromise().then(res=>this.list = res as Product[]) 
    }
  
    updateProductList(formData : Product)
    {
       return this.http.put(this.rooturl1+'/ProductListput?pid='+formData.ProductId+'&pname='+formData.ProductName+'&pprice='+formData.ProductPrice+'&cat='+formData.Category+'&qty='+formData.Quantity,formData);
    }
  
    deleteProduct(id:string)
    {
      console.log(""+id);
      return this.http.delete(this.rooturl1+'/delprod?id='+id);
    }
}
