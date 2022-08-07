import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName="";
  password="";
  errorMessage="Invalid credentials";
  isInValidLogin=false;

  constructor(private router:Router,private hardecodedAuthenticationService:HardecodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){

    this.hardecodedAuthenticationService.executeBasicAuthentication(this.userName,this.password).subscribe(
      data=>{
        this.isInValidLogin=false;
        this.router.navigate(['welcome',this.userName]);
      },
      error=>{
        console.log(error)
        this.isInValidLogin=true;
        this.removeMessage();
      }
    )
  }

  // I want to remove message after 5 seconds
  removeMessage(){
    setTimeout(()=>{
      this.isInValidLogin=false;
    },5000)  
  }

}
