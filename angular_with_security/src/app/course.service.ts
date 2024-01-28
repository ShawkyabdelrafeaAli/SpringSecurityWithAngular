import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  private baseURL = "http://localhost:8086/course";
  
  constructor(private http: HttpClient) { }
  
  getCourcesList(): Observable <Course[]>{
    const token = localStorage.getItem('jwt');
    // Launch DevTools to step through the code in the debugger;
    // debugger;
    // check if token is valid string as well
    if (token == null) {
      throw new Error('Authorization token not found');
    }
    // Use local object
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Course[]>(`${this.baseURL}/findAll`,{ headers: httpHeaders });
  }

  createCource(cource: Course): Observable<Object>{
    const token = localStorage.getItem('jwt');
    // Launch DevTools to step through the code in the debugger;
    // debugger;
    // check if token is valid string as well
    if (token == null) {
      throw new Error('Authorization token not found');
    }
    // Use local object
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.baseURL}/add`, cource ,{ headers: httpHeaders });
  }

  getCourceById(id: number): Observable<Course>{
    const token = localStorage.getItem('jwt');
    // Launch DevTools to step through the code in the debugger;
    // debugger;
    // check if token is valid string as well
    if (token == null) {
      throw new Error('Authorization token not found');
    }
    // Use local object
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Course>(`${this.baseURL}/getById/${id}`,{ headers: httpHeaders });
  }

  updateCource(id: number, cource: Course): Observable<Course>{
    const token = localStorage.getItem('jwt');
    // Launch DevTools to step through the code in the debugger;
    // debugger;
    // check if token is valid string as well
    if (token == null) {
      throw new Error('Authorization token not found');
    }
    // Use local object
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.put<Course>(`${this.baseURL}/update/${id}`, cource, { headers: httpHeaders });
  }
  
  deleteCource(id: number): Observable<Object>{
    const token = localStorage.getItem('jwt');
    // Launch DevTools to step through the code in the debugger;
    // debugger;
    // check if token is valid string as well
    if (token == null) {
      throw new Error('Authorization token not found');
    }
    // Use local object
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(`${this.baseURL}/delete/${id}`,{ headers: httpHeaders });
  }



}

