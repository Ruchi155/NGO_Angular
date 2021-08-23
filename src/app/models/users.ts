import { iUserProfile } from "./iUserProfile";
import { Role } from "./role";

 


export class Users{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userProfile!: iUserProfile; 
    roles!: Array<Role>;

     constructor(id:number,firstName: string, lastName:string,email:string, password:string,userProfile: iUserProfile, roles:Array<Role >)
    {
        this.id =id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.userProfile = userProfile;
        this.roles = roles;

    }
}