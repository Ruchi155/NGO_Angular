import { Component, OnInit } from '@angular/core';
import { DonationTypeService } from './../services/donationTypeService';
import { Router } from '@angular/router';
import { DonationType } from './../models/donationtype';
import { AuthService } from './../services/authservice';

@Component({
  selector: 'app-donation-type',
  templateUrl: './donation-type.component.html',
  styleUrls: ['./donation-type.component.css']
})
export class DonationTypeComponent implements OnInit {

  constructor(private donationTypeServ: DonationTypeService, private route:Router, 
              private authService: AuthService) { }
  donationTypes = Array<DonationType>(); 
  ngOnInit(): void {
    this.donationTypeServ.getAllDonationType().subscribe(
      data=> {
        this.donationTypes = data
      }
    )
  }

  makeDonation(){
    let userProfileId = this.authService.getUserprofileId();
    this.route.navigate(['/profiles/update',userProfileId] );
  }
}
