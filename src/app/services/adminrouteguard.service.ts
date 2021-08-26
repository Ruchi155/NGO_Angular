import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './AuthService';
 
@Injectable({
  providedIn: 'root'
})
export class AdminrouteguardService {

  constructor(private router:Router, private authService: AuthService ) {}
  
   
}
