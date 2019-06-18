import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if (this.loginService.isLogged()) {
      console.log("inside canActivate.. token exist");
      return true;
    }
    console.log("inside canActivate.. token not exist");
    //this.router.navigate(["/login"]);
    return false;
  }
}
