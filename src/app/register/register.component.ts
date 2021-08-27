import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

     
  }

  onFormSubmit(form: NgForm) {
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['login']);
      
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
  
 
}


