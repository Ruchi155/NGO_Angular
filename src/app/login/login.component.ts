import { Component, OnInit } from '@angular/core'; 
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../MyErrorStateMatcher';
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
 matcher = new MyErrorStateMatcher();
 isLoadingResults = false;
  constructor( private router: Router, private authService: AuthService) { }
  ngOnInit() {
  }
  ngOnDestroy(){
    console.log("Hey I just loggin ? "+ this.authService.isLoggedIn);
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(
        res => {
          console.log(res);
          if (res.token) {
            localStorage.setItem('token', res.token);
            this.goHome(); 
        }
      }, (err) => {
        console.log(err);
      });
      
  }
  
   goHome() {
    this.router.navigate(['home']);
  }  
  
 
}
