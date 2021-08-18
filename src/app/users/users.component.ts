import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users!: Users[];
  constructor(private userserv:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers():void{
    this.userserv.getUsers().subscribe(
    (response: Users[]) => {
      this.users =response; },
    (error:HttpErrorResponse) => {
      alert(error.message);}
    );
    }
}
