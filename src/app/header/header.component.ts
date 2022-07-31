import { Component, OnInit } from '@angular/core';
import { HardecodedAuthenticationService } from '../service/hardecoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hardcodedAuthenticationService:HardecodedAuthenticationService) { }

  ngOnInit(): void {
    
  }

}
