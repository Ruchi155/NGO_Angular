import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from '../services/authservice'; 
import { UserService } from 'src/app/services/userservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  useremail!:string  ;
  password!:string  ;    
  message: any;
  constructor(private authService: AuthguardService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
    private userService :UserService) {
  }

  ngOnInit() { 
  }

 
  doLogin(loginForm:any){
    console.log(this.useremail);
    let resp = this.userService.login(this.useremail,this.password) .subscribe(
      data =>
      { this.message =  data;
        console.log(this.message);
      }
    )
  }

 
}
