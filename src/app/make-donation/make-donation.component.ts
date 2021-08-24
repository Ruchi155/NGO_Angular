import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Donation } from '../models/donation'; 
import { DonationTypeService } from './../services/donationTypeService';
import { DonationType } from './../models/donationtype';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
 
  donationTypes: Array<DonationType> = new Array<DonationType>();
  donation !:Donation ;
  constructor(private donationTypeSerice:DonationTypeService, private fb: FormBuilder) { }
  DonationForm:FormGroup = this.fb.group({
    DonationDetails: this.fb.array([])
  }); 
  DonationDetailFormArray!: FormArray;
  project1! : number;
  project2! : number;
  project3! : number;
  ngOnInit(): void {
    let arr: any[] = [];
    this.donationTypeSerice.getAllDonationType().subscribe(
      data =>
      {
        this.donationTypes = data //3
        for(let i = 0; i < this.donationTypes.length;i++){ 
          arr.push(this.createFormDonationLine(this.donationTypes[i].name));
        } 
        this.DonationForm = this.fb.group({
          DonationDetails :this.fb.array(arr)
        })  
        this.DonationDetailFormArray = this.DonationForm.get('DonationDetails') as  FormArray; 
      } 
    ) 
  }
 
  createFormDonationLine(name:string ):FormGroup{ 
   return this.fb.group({
     name: [name],
     amount: [0]
   })
  }
  
  onSubmit(){
    console.log(`project1: ${this.project1}`);
    console.log(`project2: ${this.project2}`);
    console.log(`project2: ${this.project3}`);
  }

}
