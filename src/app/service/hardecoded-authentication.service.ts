import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardecodedAuthenticationService {

  isLoggedIn:Boolean=false;

  constructor() { }

  validateAuthentication(username:string,password:string):Boolean{
      if(username==="Abhijit" && password==='Z2d!ed$1GHW6'){
        window.sessionStorage.setItem('username',username);
        return true;
      }
      return false;
  }

  isUserLoggedIn():Boolean{
    if(window.sessionStorage.getItem('username')===null){
      this.isLoggedIn=false;
    }else{
      this.isLoggedIn=true;
    }
   
    return this.isLoggedIn;
  }

  logOut(){
    window.sessionStorage.clear();
  }
}
