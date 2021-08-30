import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/userservice';
import { Users } from '../models/users';

const apiUrl = environment.apiAuthUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;
  user!:Users;
  userRole = "";
  userId :number =0;
  userProfileId = 0;
  UserProfileAddress ="";
  constructor(private http: HttpClient, private userService: UserService) { }
  isAdmin() {
    return this.userRole == "ROLE_ADMIN";
  }
  getUserId(){
    return this.userId;
  }
  getUser(){
    return this.user;
  }
  isLogin(){
    return this.isLoggedIn == true;
  }
  isUserProfileChaged(){
    return this.UserProfileAddress!= "";
  }
  getUserprofileId(){
    return this.userProfileId;
  }
  login(form: NgForm): Observable<any> {
    const data = JSON.stringify(form.value);
    console.log(form.value);
    return this.http.post<any>(apiUrl + 'login', data)
      .pipe( 
        tap(_ =>{
            this.userService.getUserByEmail(form.value.userEmail).subscribe(
              data => {
                this.user =data
                this.userProfileId = this.user.userProfile.id;
                this.UserProfileAddress = this.user.userProfile.address1;
                this.userRole = this.user.roles[0].name;
                this.userId = this.user.id; 
              }
           )
          this.isLoggedIn = true 
          // localStorage.setItem("login",true);
          }
        ),
        catchError(this.handleError('login', []))
      );
  }
  register(form: NgForm): Observable<any> {
    const data = JSON.stringify(form.value);
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }


  // logout(): Observable<any> {
  //   return this.http.get<any>(apiUrl + 'signout')
  //     .pipe(
  //       tap(_ => {this.isLoggedIn = false,  
  //         console.log("does this line run or not"),
  //         console.log(this.isLoggedIn);
  //       }),
  //       catchError(this.handleError('logout', []))
  //     );
  // } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
 
  private log(message: string) {
    console.log(message);
  }
}
