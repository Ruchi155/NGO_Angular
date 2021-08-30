import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from './authservice';
 
@Injectable({
  providedIn: 'root'
})
export class AdminrouteguardService implements CanActivate{
  constructor(private authService:AuthService, private route:Router){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authService.isAdmin()) {
        alert('Only Admin can see this page');
        this.route.navigate(['home']);
        return false;
      }
      return true;
  }
}
 
