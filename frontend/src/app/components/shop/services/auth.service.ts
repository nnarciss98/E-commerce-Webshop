import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Hardcode the API URL here
  private apiUrlAuth = 'http://localhost:8080/api/v1/auth/authenticate'; // URL for authentication/login
  private apiUrlRegister = 'http://localhost:8080/api/v1/auth/register'; // URL for registration

  constructor(private http: HttpClient) {}

  // Register method to send a POST request to the backend
  register(
    lastname: string,
    firstname: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post<any>(this.apiUrlRegister, {
      lastname,
      firstname,
      email,
      password,
    });
  }

  // Login method (assuming it returns a JWT)
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrlAuth, { email, password });
  }

  // Save JWT token to localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove JWT token from localStorage (logout functionality)
  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  // Check if user is logged in (token exists)
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Add JWT token to HTTP headers for authenticated requests
  getAuthHeaders() {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
