import { Component, OnInit } from '@angular/core';
import {   NgForm  } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { MyErrorStateMatcher } from '../MyErrorStateMatcher';
import { AuthService } from '../services/authservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  firstName = '';
  lastName ='';
  email = '';
  password = ''; 
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor( private router: Router, private authService: AuthService) { }
  //For Dropdown
  public role: Array<Role> = [{id:1,name:'ROLE_ADMIN'},{id:2,name:'ROLE_USER'}];
  public roleId!: string;
  ngOnInit(): void {

     
  }

  onFormSubmit(form: NgForm) {
    form.value['roles'] = [this.roleId];
    this.authService.register(form)
      .subscribe(res => {
        // this.router.navigate(['login']); 
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
  
 
}


