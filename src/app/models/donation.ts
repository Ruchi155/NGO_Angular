import { DatePipe } from "@angular/common";
import { DonationType } from "./donationtype";
import { Users } from "./users";

export class Donation{ 

	public  id!:number ;  
	public  date !: Date  ; 
	public   amount!:number; 
 
	public  donationType!: DonationType;  
	 
	public   user!:Users ;
    constructor(  amount:number, donationType:DonationType, user:Users ){ 
        this.amount = amount;
        this.donationType = donationType; 
		this.date = new Date();
		this.user = user;
    }
}