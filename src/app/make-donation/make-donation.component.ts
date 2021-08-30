import { Component,  OnInit } from '@angular/core';
import {  FormBuilder  } from '@angular/forms';
import { Donation } from '../models/donation'; 
import { DonationTypeService } from './../services/donationTypeService';
import { DonationType } from './../models/donationtype';
import { DonationService } from './../services/donationservice.service';
import { Users } from '../models/users';
import { UserService } from 'src/app/services/userservice';
import { Router, ActivatedRoute } from '@angular/router';   
import { AuthService } from './../services/authservice'; 
import { DonationCartItem } from '../models/DonationCartItem';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
 
  donationTypes: Array<DonationType> = new Array<DonationType>();
  donation !:Donation ;
  constructor(private donationTypeSerice:DonationTypeService, 
             private UserService:UserService ,
             private router:Router,
             private ActivatedRoute: ActivatedRoute,
             private AuthService: AuthService ) { }
  userId!:any;
  user!:Users; 
  donations:Array<Donation> = new Array<Donation>();
  DonationsForm:Array<Donation> = new Array<Donation>();
  ngOnInit(): void {
    let arr: any[] = [];
    let user :Users = this.AuthService.getUser();
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
                    this.DonationsForm.push(new Donation(0,this.donationTypes[i], user ));
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
         if( this.DonationsForm[i].amount != 0){
          this.donations.push(this.DonationsForm[i]);
          
        }
       
        //get what user have type so far
    }
 ;
    let userJustChooses : Donation[] =this.donations;  //return [] or Donation[]
    let cart :DonationCartItem[] = JSON.parse(localStorage.getItem('cart')|| '[]') as DonationCartItem[];
    if(   userJustChooses.length != 0 ){  
       
        for(let iChoose of userJustChooses){
          cart.push(new DonationCartItem(iChoose));
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart",JSON.stringify(cart)); 
      
    }
    this.onCart();
  }

  // setCart(){
    
  //   if(  this.userJustChooses.length == 0 ){  
  //     if(  this.cart.length != 0) {
  //       this.DonationCartItems = this.cart;
  //       localStorage.removeItem("cart");
  //       localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));  
  //     }
  //   }
  //   else{
  //     if( this.cart.length == 0) { 
  //       for(let dona of this.userJustChooses){
  //         this.DonationCartItems.push(new DonationCartItem(dona));
  //       } 
  //       localStorage.removeItem("cart");
  //       localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));  
  //     }
  //     else{  
  //       let tempCart : DonationCartItem[] = Array<DonationCartItem>(); 
  //       for(let justChoose of this.userJustChooses){
  //         for(let cartItem of this.DonationCartItems){
  //           if(justChoose.amount == cartItem.donation.amount && justChoose.donationType.id === cartItem.donation.donationType.id){
  //             cartItem.quanity+=1;
  //           }else{
  //             tempCart.push(new DonationCartItem(justChoose));
  //           }
  //         } 
  //       }
  //       for(let tempItem of tempCart){
  //         this.DonationCartItems.push(tempItem);
  //       }
  //       localStorage.removeItem("cart");
  //       localStorage.setItem("cart",JSON.stringify(this.DonationCartItems)); 
  //     }
  //   } 
  //   for(let i = 0; i < this.cart.length;i++){
  //     this.totalPrice+=  this.DonationCartItems[i].donation.amount;
  //     for(let j =0 ; j < this.DonationCartItems[i].quanity;j++){
  //       this.totalItem++;
  //       localStorage.setItem("totalPrice",<string><any>this.totalItem);
  //     }
  //     localStorage.setItem("totalPrice",<string><any>this.totalPrice);
  //   } 
  // }



  onCancel(){
    this.router.navigate(['donations']);
  }
  onCart(){
    this.router.navigate(['cart']);
  }

}
