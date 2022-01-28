import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivate, CanActivateChild, Router } from '@angular/router';
import { LoginService } from './login/services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate, CanActivateChild {

  constructor(private roouter : Router, private servicio: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("jwt")){
        return true;
    }
    else{
        return false;
    }
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
}
}
