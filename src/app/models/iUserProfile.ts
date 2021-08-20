export class  iUserProfile{
    id!: number; 
    address1!:string;
    address2!:string;
    CMA!:number;
    phone!:string;
    city!:string;
    state!:string;
	zipcode!:number;
    country!:string;
    urbanization!:string;
    constructor(id: number,
        address1:string,
        address2:string,
        CMA:number,
        phone:string,
        city:string,
        state:string,
        zipcode:number,
        country:string,
        urbanization:string){}
}