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
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('authToken');
    }
    return null;
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

  getUserEmail(): string | null {
    const token = this.getToken(); // Récupérer le token JWT
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Décoder le payload du JWT
        return payload.email || null; // Retourner l'email s'il existe dans le token
      } catch (e) {
        console.error('Error decoding token:', e);
        return null;
      }
    }
    return null; // Pas de token ou erreur
  }
}
