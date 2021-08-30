import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGO-Donation';
  
constructor(private authserv: AuthService,private route: Router){

}
logout() {
  localStorage.removeItem('token')
  this.authserv.isLoggedIn = false;
  this.authserv.userRole = "";
  this.route.navigate(['home']);
}
 isLogin(){
   return this.authserv.isLogin();
 }

}

  
  
  


