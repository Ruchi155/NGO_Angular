import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Donation } from '../models/donation';
import { iUserProfile } from '../models/iUserProfile';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  
  private url = environment.apiDonationUrl;
  constructor(private http:HttpClient) { }
  getAllDonation():Observable<Donation[]>{
    return this.http.get<Donation[]>(this.url).pipe(catchError(this.errorHandler));
  }  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
  getUserProfileById(id:number):Observable<Donation>{
    return this.http.get<Donation>(this.url+ "finddonation/"+id);
  }
  deleteUserProfileById(id:number){
    return this.http.delete(this.url+"deletedonation/"+id);
  }
  updateUserProfile (id:number, profile:iUserProfile):Observable<iUserProfile>{
    console.log(this.url+"updatedonation/"+id , profile);
    return this.http.put<iUserProfile >(this.url+"updatedonation/"+id , profile);
  }


}
