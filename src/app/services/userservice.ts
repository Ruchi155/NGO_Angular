import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerUrl}/ngodonation/all`);
  }

  public addUser(user: Users):Observable<Users>{
    return this.http.post<Users>(`${this.apiServerUrl}/ngodonation/add`,user);
  }

  public updateUser(user:Users):Observable<Users>
  {
    return this.http.put<Users>(`${this.apiServerUrl}/ngodonation/update`,user)
  }

  public deleteUser(userid:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/ngodonation/delete/${userid}`);
  }
}
