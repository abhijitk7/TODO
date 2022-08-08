import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardecodedAuthenticationService } from '../hardecoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthServiceService implements HttpInterceptor {

  constructor(private authService:HardecodedAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.authService.getAuthToken();
    let username = this.authService.getAuthenticatedUser()
    if(basicAuthHeaderString && username) { 
      request=request.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      })
    }
    return next.handle(request);  
  }
}
