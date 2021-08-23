import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl= environment.apiUserUrl;

  constructor(private http: HttpClient) { }

  formData!: Users;

  public getUserById(id:number): Observable<any>
  {
    return this.http.get(`${this.apiServerUrl}/${id}`)
  }

  public getUserByEmail(email:string):Observable<any>
  {
    return this.http.get(`${this.apiServerUrl}/${email}`)
  }
  
  public getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerUrl}/`);
  }

  public addUser(user: Users):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/adduser`,user);
  }

  public updateUser(user:Users):Observable<Users>
  {
    return this.http.put<Users>(`${this.apiServerUrl}/updateuser`,user);
  }

  public deleteUser(userid:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteuser/${userid}`);
  }

  public getRoleName(role:Role):Observable<any>
  {
    return this.http.post(`${this.apiServerUrl}/adduser`,role);
  }

 
}
