import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';  
import { DonationCartItem } from '../models/DonationCartItem'; 
import { Donation } from './../models/donation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonationService } from 'src/app/services/donationservice.service';
import { AuthService } from './../services/authservice';
import { ThisReceiver } from '@angular/compiler';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private router:Router, private donationService: DonationService, private AuthService:AuthService ) { }
  cart :DonationCartItem[]=JSON.parse(localStorage.getItem('cart')|| '[]') as DonationCartItem[];
  totalPrice = 0  ;  
  totalItem =   0;
  
  ngOnInit(): void {  
    for(let i = 0; i <  this.cart.length;i++){
      this.totalPrice+=  this.cart[i].donation.amount;
      for(let j =0 ; j < this.cart[i].quanity;j++){
        this.totalItem++;
         
      }
     
    } 
  
  } 
  emptyCart(){ 
    this.cart.splice(0,this.cart.length);
    this.totalPrice = 0;
    this.totalItem = 0;
    localStorage.removeItem('cart');
  }
  removeItem(index :number){
 
    this.totalPrice -= this.cart[index].donation.amount;
    if(this.cart[index].quanity >=2){
      this.cart[index].quanity -= 1;
    }
    else{
      this.cart.splice(index,1);
    }  
    localStorage.setItem("cart", JSON.stringify(this.cart)); 
    this.router.navigate(['cart']);
  }
  onContinueShoping(){
    let userId = this.AuthService.getUserId();
      this.router.navigate(['donations/makeDonation', userId]);
  }
  onSaveDonation(){
    let donation:any;
    let donations:any;
    let userId = this.AuthService.getUserId(); 
    for( let i  = 0; i < this.cart.length;i++){
      for( let j = 0 ; j < this.cart[i].quanity;j++){
        this.donationService.createDonation(this.cart[i].donation, userId).subscribe(
          data => {
            localStorage.removeItem("cart");
            this.router.navigate(['donations'])
          }
        )
      }
    }
   
  }

  
}
