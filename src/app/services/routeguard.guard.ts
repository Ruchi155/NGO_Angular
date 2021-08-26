import { Injectable } from '@angular/core';
import {  CanActivate, Router  } from '@angular/router'; 
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  
  constructor(private router:Router, private authService: AuthService ) {}
   
  
}
