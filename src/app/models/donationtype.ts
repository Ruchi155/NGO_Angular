import { Donation } from './donation';
export class DonationType { 
    id!:number;
    name!:string;
    donation!:Donation;
    constructor(id:number, name:string, donation:Donation){
        this.id = id;
        this.name=name;
        this.donation = donation;
    }
}
