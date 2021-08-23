import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; 

import { catchError } from 'rxjs/operators'; 
import { iUserProfile } from '../models/iUserProfile';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService
 {
  private url = environment.apiProfileUrl;
  constructor(private http:HttpClient) { }
  getAllUserProfiles():Observable<iUserProfile[]>{
    return this.http.get<iUserProfile[]>(this.url).pipe(catchError(this.errorHandler));
  }  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
  getUserProfileById(id:number):Observable<iUserProfile>{
    return this.http.get<iUserProfile>(this.url+ "findprofile/"+id);
  }
  deleteUserProfileById(id:number){
    return this.http.delete(this.url+"deleteprofile/"+id);
  }
  updateUserProfile (id:number, profile:iUserProfile):Observable<iUserProfile>{
    console.log(this.url+"updateprofile/"+id , profile);
    return this.http.put<iUserProfile >(this.url+"updateprofile/"+id , profile);
  }

}
