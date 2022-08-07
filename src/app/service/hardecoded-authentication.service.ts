import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class HardecodedAuthenticationService {

  isLoggedIn:Boolean=false;

  constructor(private http:HttpClient) { }

  validateAuthentication(username:string,password:string):Boolean{
      if(username==="Abhijit" && password==='Z2d!ed$1GHW6'){
        window.sessionStorage.setItem('username',username);
        return true;
      }
      return false;
  }

  executeBasicAuthentication(userName:string,password:string){
    let basicAuthenticationString='Basic ' + window.btoa(`${userName}:${password}`);
                                
    let headers=new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization:basicAuthenticationString
    })

    return this.http.get(`${API_URL}/api/basic/authenticate`,{headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,userName);
          sessionStorage.setItem(TOKEN,basicAuthenticationString);
          return data;
        }
      )
    )
  }

  isUserLoggedIn():Boolean{
    if(window.sessionStorage.getItem('authenticaterUser')===null){
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
