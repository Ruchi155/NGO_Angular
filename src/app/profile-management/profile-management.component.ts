import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from './../services/user-profile.service';
import { iUserProfile } from './../models/iUserProfile';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {

  constructor( private UserProfileService: UserProfileService, private router:Router, private  route:ActivatedRoute) { }
  profiles!: iUserProfile[];

  ngOnInit(): void {
    this.getAllUserProfile();
  }
  public getAllUserProfile(){
    this.UserProfileService.getAllUserProfiles().subscribe(
      (data) => {
        this.profiles = data;
        console.log(data)
      },
      ()=> console.log("Completed")
    )
  }
}
