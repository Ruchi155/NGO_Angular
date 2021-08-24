import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iUserProfile } from 'src/app/models/iUserProfile';
import { Role } from 'src/app/models/role';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:any;
  userprofile = new iUserProfile(0,"n/a","n/a",0,"n/a","n/a","n/a",0,"n/a","n/a");
  role: Array<Role>= new Array <Role>();
  user:Users = new Users(0,"n/a","n/a","n/a","n/a",this.userprofile,this.role);
  errorMsg:any;
  userProfiles:any;
  users!: Users[];
  constructor(private userserv:UserService, private route:Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe( 
      data => {
        this.userId = data.get("id"); 
        this.userserv.getUserById(this.userId).subscribe(
          (data) => {
            
            this.user = data 
            console.log(this.user)
          },
          ()=> console.log(`Error`)
        )
      }
    );
  }


  displayUsers(){
    
    this.userserv.getUsers().subscribe(
      (data) => this.users = data),
      (error: any) => console.log(error)
    
  }


  update(user:any)
  {
    console.log(`runing update function and calling api --- From updateuser.ts`);
    this.userserv.updateUser(this.userId, this.user).subscribe(
      (data) => {
        console.log(this.user.id)
        this.user = data;

        this.userserv.getUsers().subscribe(
          (data)=> this.userProfiles = data,
          (error) => this.errorMsg = error
        )
      },
      (error)=> {
        this.errorMsg = error;
        console.log(error);
      } 
    )

   this.route.navigate(['users']);
  }
 

}

