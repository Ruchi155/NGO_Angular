import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl= environment.apiUserUrl;

  constructor(private http: HttpClient) { }
 
  public login(username: string, password:string):Observable<any>{
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username+":"+password)});
     return this.http.get(environment.apiBaseUrl+ "/login", {headers,responseType: 'text' as 'json'});
  }
  public getUserById(id:number): Observable<any>
  {
 
    return this.http.get(`${this.apiServerUrl}/finduser/${id}`); 
  }

  public getUserByEmail(email:string):Observable<Users>
  {
    return this.http.get<Users>(`${this.apiServerUrl}/finduserEmail/${email}`);
  }
  
  public getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerUrl}/`);
  }
 
  public updateUser(id:number, user:Users):Observable<Users>{
    console.log(this.apiServerUrl+"updateuser/"+id , user);
    return this.http.put<Users >(this.apiServerUrl+"/updateuser/"+id , user);
  }
 
  public deleteUser(userid:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteuser/${userid}`);
  } 
}
