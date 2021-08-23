import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authservice';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  
  constructor(private router:Router, private authService: AuthguardService ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isUserLoggedIn()){
        alert('you are not allowed to view this page. you are redirected to loginpage');
        this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
        return false;
      }
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authService.isAdminUser()) {
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
  }
  
}
