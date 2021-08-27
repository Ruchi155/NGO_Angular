import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiAuthUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }
  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }


  logout(): Observable<any> {
    return this.http.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
