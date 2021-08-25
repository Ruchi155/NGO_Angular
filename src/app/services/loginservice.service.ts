import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private apiBaseUrl= environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public login(username:string, password:string):Observable<any>
  {
    const headers=new HttpHeaders({Authorization: 'Basic' +btoa(username+":"+password)})
    return this.http.get("http://localhost:8090/login",{headers,responseType:'text' as 'json'});
  }
}
