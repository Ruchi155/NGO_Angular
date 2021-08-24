import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from './authservice';

@Injectable({
  providedIn: 'root'
})
export class AdminrouteguardService {

  constructor(private router:Router, private authService: AuthguardService ) {}
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authService.isAdminUser()) {
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
  }
}
