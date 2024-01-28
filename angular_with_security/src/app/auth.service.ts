import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8086/api/v1/auth'; 
  private ApiUrl = 'http://localhost:8086/student'; 


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
      // Your login logic here
      // Assuming you get a JWT token upon successful login
      const token = 'your_jwt_token';

      // Store the token in local storage for future requests
      localStorage.setItem('jwtToken', token);

      return this.http.post<any>(`${this.apiUrl}/authenticate`, { username, password });
  }

  getData(): Observable<any> {
      // Get the token from local storage
      const token = localStorage.getItem('jwt');

      // Include the token in the request headers
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      });

      // Make the secure API call
      return this.http.get<any>(`${this.ApiUrl}/findAll`, { headers });
  }
}
