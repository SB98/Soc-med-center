import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData : Customer;

  constructor(private http:HttpClient) { }
  readonly rooturl="http://localhost:51376/Service2.svc";

  postCustomer(formData: Customer)
  {
      return this.http.post(this.rooturl+"/CustomerList",formData);
  }

}
