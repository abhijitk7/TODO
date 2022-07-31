import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name="Abhijit";
  password="Z2d!ed$1GHW6";
  errorMessage="Invalid credentials";
  isInValidLogin=false;

  constructor(private router:Router,private hardecodedAuthenticationService:HardecodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardecodedAuthenticationService.validateAuthentication(this.name,this.password)){
      this.isInValidLogin=false;
      this.router.navigate(['welcome',this.name]);
    }else{
      this.isInValidLogin=true;
    }
    
  }

}
