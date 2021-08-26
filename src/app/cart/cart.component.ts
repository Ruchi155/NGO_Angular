import { Component, OnInit } from '@angular/core';  
import { DonationCartItem } from '../models/DonationCartItem'; 
import { Donation } from './../models/donation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 
  constructor( ) { }
  DonationCartItems:DonationCartItem[] = new Array<DonationCartItem>(); 
  donations !:Donation[];  
  userJustChooses :  Array<Donation> = new Array<Donation>();
  totalPrice:number = 0;
  totalItem:number = 0;
  ngOnInit(): void {
    
    this.userJustChooses = JSON.parse(localStorage.getItem('userJustChooses')|| '{}');
    let cart = JSON.parse(localStorage.getItem('cart')|| '{}');
    let lengthCart =cart.length;
   this.userJustChooses = <Array<Donation>>this.userJustChooses;
    console.log(lengthCart);
    if(this.userJustChooses.length == undefined){
      //if user dont choose any thing then dont check any thing, leave that cart like that
      //localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));
      console.log("run this line");
      this.DonationCartItems =JSON.parse( localStorage.getItem('cart') ||'{}');
      if(lengthCart != undefined){
        localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));
      }
    }
    else{
      if(lengthCart == undefined) {
        console.log("run that line" + this.userJustChooses);
        //if cart does not have any item , just add whatever user just choose to there
        for(let i = 0; i < this.userJustChooses.length;i++){
          this.DonationCartItems.push(new DonationCartItem(this.userJustChooses[i]));
        }
        localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));
        console.log(this.DonationCartItems);
        localStorage.removeItem("userJustChooses");
      }
      else{
        this.DonationCartItems =JSON.parse( localStorage.getItem('cart') ||'{}');
        //now the cart have some item, check for quanity if have duplicate amount
        localStorage.removeItem("cart");
        
        console.log("runing this code DontaionCartItem have: " + this.DonationCartItems.length);
        let tempCart : DonationCartItem[] = Array<DonationCartItem>(); 
        for(let justChoose of this.userJustChooses){
          for(let cartItem of this.DonationCartItems){
            if(justChoose.amount == cartItem.donation.amount && justChoose.donationType.id === cartItem.donation.donationType.id){
              cartItem.quanity+=1;
            }else{
              tempCart.push(new DonationCartItem(justChoose));
            }
          } 
        }
        for(let tempItem of tempCart){
          this.DonationCartItems.push(tempItem);
        }
        localStorage.setItem("cart",JSON.stringify(this.DonationCartItems));
        localStorage.removeItem("userJustChooses");
      }
    }
    this.DonationCartItems = cart;
    
    for(let i = 0; i < lengthCart;i++){
      this.totalPrice+= this.DonationCartItems[i].donation.amount;
      for(let j =0 ; j < this.DonationCartItems[i].quanity;j++){
        this.totalItem++;
      }
    }
  
  }
  emptyCart(){
    localStorage.removeItem('cart');
  }
  removeItem(index :number){
    this.DonationCartItems =JSON.parse( localStorage.getItem('cart') ||'{}');
    this.DonationCartItems.slice(index);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(this.DonationCartItems));
  }

}
