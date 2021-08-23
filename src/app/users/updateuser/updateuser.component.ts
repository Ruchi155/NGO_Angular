import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:any;
 // user:Users= new Users(0,"n/a","n/a","n/a","n/a","n/a","n/a");
  errorMsg:any;
  userProfiles:any;
  users!: Users[];
  constructor(private userserv:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  displayUsers(){
    
    this.userserv.getUsers().subscribe(
      (data) => this.users = data),
      (error: any) => console.log(error)
    
  }


updateUser(){
 
 // this.userserv.updateUser(user).subscribe(
   // (data) => {console.log(data),this.displayUsers()},
   // (error) => console.log(error)
  //)
}

}
