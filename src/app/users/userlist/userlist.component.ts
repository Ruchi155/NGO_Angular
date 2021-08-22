import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users!: Users[];

  constructor(private userserv:UserService) { }
 

 
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
  

   
}
