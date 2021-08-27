import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../MyErrorStateMatcher';
import { AuthService } from '../services/authservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  email = '';
  password = '';
  matcher = new MyErrorStateMatcher();
  isLoadingResults = false;
  // constructor(private authService: AuthguardService, 
  //   private router: Router, 
  //   private activatedRoute:ActivatedRoute,
  //   private userService :UserService) {
  // }

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
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
  
  register() {
    this.router.navigate(['register']);
  }
  // doLogin(loginForm:any){
  //   console.log(this.useremail);
  //   let resp = this.userService.login(this.useremail,this.password) .subscribe(
  //     data =>
  //     { this.message =  data;
  //       console.log(this.message);
  //     }
  //   )
  // }

 
}
