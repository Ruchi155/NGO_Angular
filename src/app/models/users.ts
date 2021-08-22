export class Users{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rolename!: string;

     constructor(id:number,firstName: string, lastName:string,email:string, password:string,rolename:string)
    {
        this.id =id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.rolename=rolename;
    }

}