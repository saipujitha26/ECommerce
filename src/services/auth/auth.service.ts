import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  register(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "/sign-up", signupRequest);
  }

  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username, password };

    return this.http.post<any>(BASIC_URL + '/authenticate', body, { headers, observe: 'response' }).pipe(
      map(res => {
        const authHeader = res.headers.get('authorization');
        if (authHeader) {
          const token = authHeader.substring(7);
          const user = res.body;
          if (token && user) {
            this.isLoggedIn = true;
            return true;
          }
        }
        return false;
      })
    );
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
