import { Users } from './users';
export class  iUserProfile{

    id: number = 0; 
    address1!:string;
    address2!:string;
    cma!:number;
    phone!:string;
    city!:string;
    state!:string;
	zipcode!:number;
    country!:string;
    urbanization!:string; 
    constructor(id: number,
        address1:string,
        address2:string,
        cma:number,
        phone:string,
        city:string,
        state:string,
        zipcode:number,
        country:string,
        urbanization:string){}
}