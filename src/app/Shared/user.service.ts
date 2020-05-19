import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //url="http://localhost:51376/Service1.svc/";
  readonly rooturl = 'http://localhost:51376/Service1.svc/';

  constructor(private http: HttpClient) { }

  PostProductList(user : User)
  {
    const body:User={
      Username : user.Username,
      Password : user.Password,
      Email:user.Email,
      PhoneNumber:user.PhoneNumber,
      ConfirmPassword:user.ConfirmPassword,
      Address:user.Address
      
    }
    return this.http.post(this.rooturl+'/CustomerList',body);
  }

  ProductList(email:string,password:string)
  {
    return this.http.get(this.rooturl+'/List?email=' + email + '&password=' + password);
  }

}
