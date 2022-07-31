import { Component, OnInit } from '@angular/core';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService:HardecodedAuthenticationService) { }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.isLoggedIn=false;
    this.hardcodedAuthenticationService.logOut();
  }



}
