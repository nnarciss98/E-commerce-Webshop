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

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrlAuth, { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  // check if the user is authenticated and the JWT is valid
  isUserAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Check if the token has expired
      const expirationDate = payload.exp * 1000;
      if (Date.now() > expirationDate) {
        return false; // Token expired, not authenticated
      }

      return true; // Token is valid, user is authenticated
    } catch (e) {
      console.error('Error decoding token:', e);
      return false;
    }
  }

  // add JWT to HTTP request headers
  getAuthHeaders() {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getUserEmail(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
        return payload.email || null;
      } catch (e) {
        console.error('Error decoding token:', e);
        return null;
      }
    }
    return null;
  }
}
