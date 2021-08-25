import { DonationType } from "./donationtype";
import { Users } from "./users";

export class Donation{ 

	public  id!:number ;  
	public  date !: Date  ; 
	public   amount:number = 0.0; 
 
	public  donationType!: DonationType;  
	 
	public   user!:Users ;
    constructor(  amount:number, donationType:DonationType ){ 
        this.amount = amount;
        this.donationType = donationType; 
    }
}