import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './services/authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGO-Donation';
  
constructor(private authserv: AuthguardService,private route: Router){

}
  public logout()
  {
    this.authserv.logoutUser();
    this.route.navigate(['/home']);
  }

}

  
  
  


