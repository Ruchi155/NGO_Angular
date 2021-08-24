import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iUserProfile } from 'src/app/models/iUserProfile';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  errorMsg: any;
  users:any;
  public userForm: any;

  id:number=0;
  firstName: string='';
  lastName: string='';
  email: string='';
  password: string='';
  //department: string='';

  constructor(private userserv:UserService, private router:Router) { }

  ngOnInit(): void {
  }
/* onSubmit(form:NgForm)
{
  this.userserv.addUser(form.value).subscribe(data => {
    this.resetForm(form);
    alert(data);
  }) 
}*/

//For Dropdown
  public role: Array<Role> = [{id:1,name:'Admin'},{id:2,name:'User'}];
  public roleId!: string;
  
  
  onSubmit(userForm:any){
    console.log(userForm.value);
    userForm.value['roles'] = [this.roleId]
    this.userserv.addUser(userForm.value).subscribe(
      (data)=> {
        this.users=data;
        //console.log(this.employees);
        this.userserv.getUsers().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      
      (error) => console.log(error)
      )

    this.router.navigate(['users']);
    //this.empForm.reset();
  
  }

  


}
