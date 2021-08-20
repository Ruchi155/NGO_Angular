import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserProfileService } from './../services/user-profile.service';
import { iUserProfile } from './../models/iUserProfile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  userProfileId:any;
  userProfile:iUserProfile = new iUserProfile(0,"n/a","n/a",0,"n/a","n/a","n/a",0,"n/a","n/a");
  errorMsg:any;
  userProfiles:any;
  constructor( private userProfileSerivce: UserProfileService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe( 
      data => {
        this.userProfileId = data.get("id"); 
        this.userProfileSerivce.getUserProfileById(this.userProfileId).subscribe(
          (data) => {
            
            this.userProfile = data 
          },
          ()=> console.log(`Error`)
        )
      }
    );
  }
  update(userProfile:any)
  {
    console.log(`runing update function and calling api --- From update-profile.ts`);
    this.userProfileSerivce.updateUserProfile(this.userProfileId, this.userProfile).subscribe(
      (data) => {
        console.log(this.userProfile.id)
        this.userProfile = data; 
        this.userProfileSerivce.getAllUserProfiles().subscribe(
          (data)=> this.userProfiles = data,
          (error) => this.errorMsg = error
        )
      },
      (error)=> {
        this.errorMsg = error;
        console.log(error);
      } 
    )
  }
}
