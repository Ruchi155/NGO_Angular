import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs'; 
import { Users } from '../models/users';
import { UserService } from './userservice';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  private isloggedIn: boolean;
  userName!: string;
  password!: string;
  user!: Users;
  
  constructor(private userserv: UserService,private http:HttpClient) {
      this.isloggedIn=false;
  }

  login(username: string, password:string) {
      //Assuming users are provided the correct credentials.
      //In real app you will query the database to verify.
      this.isloggedIn=true;
      this.userName=this.user.email;
      this.password=this.user.password;
      return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }

  isAdminUser():boolean {
      if (this.userName.toUpperCase()=='ADMIN' && this.password.toUpperCase()=='ADMIN') {
          return true; 
      }
      return false;
  }

  logoutUser(): void{
    this.isloggedIn = false;
  }



}
