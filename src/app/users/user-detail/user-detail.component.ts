import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { DonationService } from 'src/app/services/donationservice.service';
import { UserService } from './../../services/userservice';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userId:string|null = "";
  public user!:Users; 
  public donations:any;
  constructor(private route: ActivatedRoute, private router:Router, private UserService :UserService, private donationService:DonationService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(
      (data) => {
        this.userId= data.get("id"); 
        
        this.UserService.getUserById(<number><any>this.userId  ).subscribe(
          (data) =>this.user = data
        )
        this.donationService.getAllDonationByUserId(<number><any>this.userId).subscribe(
          data => this.donations = data
        )
      }
    ) 
  } 
  goToMakeDonation(userId:number){
    this.router.navigate(['donations/makeDonation',<number><any>userId]);
  }
}
