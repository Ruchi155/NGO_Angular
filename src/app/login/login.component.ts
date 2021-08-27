import { Component, OnInit } from '@angular/core'; 
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  // constructor(private authService: AuthguardService, 
  //   private router: Router, 
  //   private activatedRoute:ActivatedRoute,
  //   private userService :UserService) {
  // }
 userEmail!: string;
 userPassword!:string;
  constructor( private router: Router, private authService: AuthService) { }
  ngOnInit() {
    
  }



  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
        }
      }, (err) => {
        console.log(err);
      });
  }
  
 /*  register() {
    this.router.navigate(['register']);
  } */
  
 
}
