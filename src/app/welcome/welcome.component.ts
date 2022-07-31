import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name="";

  constructor(private route:ActivatedRoute,private hardcodedAuthenticationService:HardecodedAuthenticationService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
