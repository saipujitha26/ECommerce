import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from 'src/app/classes/user';


const BASIC_URL = "http://localhost:8001";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  // apiUrl: string = "http://localhost:8001";

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/user/add`, user, { responseType: 'text' as 'json' })
      .pipe(
        map(response => {
          try {
            return JSON.parse(response); // If it's JSON, parse it
          } catch {
            return response; // If it's plain text, return it as is
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 200 && typeof error.error === 'string') {
        errorMessage = error.error;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }


  doAuth(user : User){
       
    return this.http.post("http://localhost:8001/token", user, {responseType: "text"});
  }

  getUserDetails(paramValue: string){

    const token = localStorage.getItem("Token");
    const email = localStorage.getItem("auth-user");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.http.get(`http://localhost:8001/user/email/?email=${paramValue}`,{headers: header}  )
  }


  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(BASIC_URL + "/forgot-password", { email });
  }

  resetPassword(email: string, confirmationCode: string, newPassword: string): Observable<any> {
    return this.http.post(BASIC_URL + "/reset-password", { email, confirmationCode, newPassword });
  }


}
