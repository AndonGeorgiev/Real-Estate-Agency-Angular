import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrokerGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isBroker()){
        return true;
      }
  
      return this.router.createUrlTree(['/catalog']);
  }

  isBroker(): boolean {
    let user = JSON.parse(window.localStorage.getItem("user" )|| '{}');
    if(user.user ){
      if(user.user.role == 'broker'){
         return true;
      }
    }
      return false;
    
  }
  
}
