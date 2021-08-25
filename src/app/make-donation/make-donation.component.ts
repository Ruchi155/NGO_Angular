import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder  } from '@angular/forms';
import { Donation } from '../models/donation'; 
import { DonationTypeService } from './../services/donationTypeService';
import { DonationType } from './../models/donationtype';
import { DonationService } from './../services/donationservice.service';
import { Users } from '../models/users';
import { UserService } from 'src/app/services/userservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
 
  donationTypes: Array<DonationType> = new Array<DonationType>();
  donation !:Donation ;
  constructor(private donationTypeSerice:DonationTypeService,
           private fb: FormBuilder,
            private donationService:DonationService,
             private UserService:UserService ,
             private router:Router,
             private ActivatedRoute: ActivatedRoute) { }
  userId!:any;
  user!:Users; 
  donations:any;
  DonationsForm:Array<Donation> = new Array<Donation>();
  ngOnInit(): void {
    let arr: any[] = [];
    
    this.ActivatedRoute.paramMap.subscribe(
      (data)   =>   {
        this.userId = data.get("id");
        console.log(this.userId)
        this.UserService.getUserById(this.userId).subscribe(
          data =>{
            this.user = data;
            
            this.donationTypeSerice.getAllDonationType().subscribe(
              data =>
              {
                this.donationTypes = data 
                for(let i = 0; i < this.donationTypes.length;i++){ 
                    this.DonationsForm.push(new Donation(0,this.donationTypes[i] ));
                }   
              } 
            )   
          }
        )
      }
    );
   
  }
  
  onSubmit(){ 
    for( let i  = 0; i < this.donationTypes.length;i++){
      if(this.DonationsForm[i].amount != 0){
        this.donationService.createDonation(this.DonationsForm[i], this.userId).subscribe(
          (data)=>{
            this.donation = data;
            this.donationService.getAllDonation().subscribe(
              data=> this.donations = data
            )
          }
        )
        console.log(this.DonationsForm[i]);
      }
    }
    // this.router.navigate(['donations'])
    
  }

}
