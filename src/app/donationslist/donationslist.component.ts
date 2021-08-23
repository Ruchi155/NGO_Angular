import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { DonationService } from '../services/donationservice.service';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-donationslist',
  templateUrl: './donationslist.component.html',
  styleUrls: ['./donationslist.component.css']
})
export class DonationslistComponent implements OnInit {

  private userId!:any;
  public user!:Users;
  private errorMsg:any;
  public donations:any;

  constructor( private router:Router, private userserv:UserService, private donationserv:DonationService) { }

  ngOnInit(): void {
    /* this.userId = this.route.paramMap.subscribe(
      (data) => {
        this.userId = data.get("id");
        this.userserv.getUserById(this.userId).subscribe(
          (data) =>this.user = data
        )s
      }
    ) */
    this.getAllDonation();
  }
  getAllDonation(){
    this.donationserv.getAllDonation().subscribe(
      (data) =>{
        this.donations = data;
        console.log(data)
      },
     ()=> console.log("complete")
    )
  }
  createDonation(Donation:any){

  }
}