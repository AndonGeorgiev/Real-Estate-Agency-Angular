import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLoggedIn()){
      return true;
    }

    return this.router.createUrlTree(['/login']);

  }

  isLoggedIn(): boolean {
    let user = JSON.parse(window.localStorage.getItem("user")|| '{}');
    
    if(user.user){
      return true;
    }else{
      return false;
    }
  }
  
}
