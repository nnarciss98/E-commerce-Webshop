import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrlAuth = 'http://localhost:8080/api/v1/auth/authenticate';
  private apiUrlRegister = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) {}

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    street: string,
    streetNumber: number,
    postalCode: number,
    city: string,
    country: string
  ): Observable<any> {
    return this.http.post<any>(this.apiUrlRegister, {
      firstname,
      lastname,
      email,
      password,
      street,
      streetNumber,
      postalCode,
      city,
      country,
    });
  }

  // Login method to authenticate the user and return JWT
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrlAuth, { email, password });
  }

  // Save JWT token to localStorage for authentication
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Retrieve the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove JWT token from localStorage (for logging out)
  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  // Check if the user is authenticated by checking the presence of a token
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Get the JWT token from localStorage and add it to HTTP headers for authenticated requests
  getAuthHeaders() {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
