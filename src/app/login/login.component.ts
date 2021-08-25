import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username!:string  ;
  password!:string  ;    
  message: any;
  constructor(private loginservice: LoginService,private router:Router) {
  }

  ngOnInit() { 
  }

 
  doLogin(){
    let resp = this.loginservice.login(this.username,this.password) 
    resp.subscribe(data=>{console.log(data)})
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(["home"]);

  }

 
}
