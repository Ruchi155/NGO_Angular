import { Donation } from "./donation"; 
import { Users } from "./users";

export class DonationCartItem{ 
 
    public quanity:number = 1;
	public  donation!: Donation; 
 
    constructor( donation:Donation   ){ 
       this.donation = donation;
    }
}