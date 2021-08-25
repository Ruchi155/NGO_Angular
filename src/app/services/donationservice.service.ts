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
  getAllDonationByUserId(id:number):Observable<Donation[]>{
    return this.http.get<Donation[]> (this.url+ "user/"+id);
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
  createDonation(donation:Donation, userId:number):Observable<Donation>{
    console.log("UPloading data to server... " + donation.donationType.name);
    return this.http.post<Donation>(this.url+ "adddonation/"+userId, donation).pipe(catchError(this.errorHandler));
  }



}
