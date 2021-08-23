import { DonationType } from "./donationtype";
import { Users } from "./users";

export class Donation{ 

	private  id:number = 0;  
	private  date : Date = new Date(); 
	private   amount:number = 0.0; 
 
	private  donationType!: DonationType;  
	 
	private   user!:Users ;
    constructor(id:number, date: Date, amount:number, donationType:DonationType, user:Users){
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.donationType = donationType;
        this.user = user;
    }
}