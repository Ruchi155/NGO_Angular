import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from 'src/app/services/donationservice.service';
import { AuthService } from './../../services/authservice';

@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.css']
})
export class DonationlistComponent implements OnInit {

  constructor(private donationService: DonationService, private router:Router,private activatedRoute:ActivatedRoute, private AuthService:AuthService) { }
  donations!: any;
  ngOnInit(): void {
    this.getAllDonation();
  }
  getAllDonation(){
    let isAdamin = this.AuthService.isAdmin();
    console.log("I got in the Donation Mangemanet with roleAdmin " + isAdamin);
    this.donationService.getAllDonation().subscribe(
      (data) =>{
        this.donations = data;
        console.log(data)
      },
     ()=> console.log("complete")
    )
  }

}
