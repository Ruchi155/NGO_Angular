import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl= environment.apiUserUrl;

  constructor(private http: HttpClient) { }

  formData!: Users;

  public getUser(id:number): Observable<any>
  {
    return this.http.get(`${this.apiServerUrl}/${id}`)
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
}
