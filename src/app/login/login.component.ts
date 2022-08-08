import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  loginForm=new FormGroup({
    userName:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12)
    ]),
    password:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    ])
  })

  handleLogin(){
    const {userName,password}=this.loginForm.value;
    this.hardecodedAuthenticationService.executeBasicAuthentication(userName as string,password as string).subscribe(
      data=>{
        this.isInValidLogin=false;
        this.router.navigate(['todo']);
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
