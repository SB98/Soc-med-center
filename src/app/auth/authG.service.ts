import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  logged=false;
  loggedIn(l:string){
    this.logged=true
  }
  test():boolean{
    
    return this.logged;
  }
}
