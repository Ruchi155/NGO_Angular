import { DonationType } from "./donationtype";
import { Users } from "./users";

export class Donation{ 

	public  id:number = 0;  
	public  date : Date = new Date(); 
	public   amount:number = 0.0; 
 
	public  donationType!: DonationType;  
	 
	public   user!:Users ;
    constructor(id:number, date: Date, amount:number, donationType:DonationType, user:Users){
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.donationType = donationType;
        this.user = user;
    }
}