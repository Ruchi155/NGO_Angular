import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; 

import { catchError } from 'rxjs/operators';  
import { environment } from 'src/environments/environment'; 
import { DonationType } from './../models/donationtype';
@Injectable({
  providedIn: 'root'
})
export class DonationTypeService {
  private url = environment.apiDonationTypeUrl;
  constructor(private http:HttpClient) { }
  getAllDonationType():Observable<DonationType[]>{
    return this.http.get<DonationType[]>(this.url).pipe(catchError(this.errorHandler));
  }  

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
  

}
