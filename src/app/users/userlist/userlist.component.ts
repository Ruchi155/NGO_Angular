import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users!: Users[];
  user!:Users;
  errorMsg: any;
  constructor(private userserv:UserService,private router:Router) { }
 

 
  ngOnInit(): void 
  {
    this.getUsers();
  }  
  public getUsers():void
  {
    this.userserv.getUsers().subscribe(
     (response: Users[]) => {
      this.users =response; },
    (error:HttpErrorResponse) => {
      alert(error.message);}
    ); 

  }

  public getUserById(id:number):void{
    this.userserv.getUserById(id).subscribe(
      (data)=> {
        this.user = data;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);}
      );
    
  }

  displayUsers()
  {
    this.userserv.getUsers().subscribe(
      (data) => {this.users = data; console.log(data)},
      (error) => this.errorMsg = error,
    )
  }
  deleteUser(id: number){
    this.userserv.deleteUser(id).subscribe(
      (data) => {console.log(data),this.displayUsers()},
      (error) => console.log(error)
    )
  }

  /* onSelect(){
    this.router.navigate(['/users/adduser']);
  }
    */
}
