import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from 'src/app/services/donationservice.service';

@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.css']
})
export class DonationlistComponent implements OnInit {

  constructor(private donationService: DonationService, private router:Router,private activatedRoute:ActivatedRoute) { }
  donations!: any;
  ngOnInit(): void {
    this.getAllDonation();
  }
  getAllDonation(){
    this.donationService.getAllDonation().subscribe(
      (data) =>{
        this.donations = data;
        console.log(data)
      },
     ()=> console.log("complete")
    )
  }

}
