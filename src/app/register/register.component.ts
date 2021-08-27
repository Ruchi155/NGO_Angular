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

  registerForm!: FormGroup;
  firstName = '';
  lastName ='';
  email = '';
  password = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName':[null,Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
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


