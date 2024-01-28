import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8086/student";
  
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  
//   getData(): Observable<Student[]> {
//     // Get the token from local storage
//     const token = localStorage.getItem('jwt');

//     // Include the token in the request headers
//     const headers = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//     });

//     // Make the secure API call
//     return this.http.get<Student[]>(`${this.baseURL}/findAll`, { headers });
// }

public getStudentsList(): Observable<Student[]> {
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
  return this.http.get<Student[]>(`${this.baseURL}/findAll`, { headers: httpHeaders });
}

  // getStudentsList(): Observable <Student[]>{
    
  //   return this.http.get<Student[]>(`${this.baseURL}/findAll`,{
  //       headers: this.createAuthorizationHeader(),
  //   });
  // }
 

  createStudent(student: Student): Observable<Object>{
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
    return this.http.post(`${this.baseURL}/add`, student ,{ headers: httpHeaders });
  }

  getSudentById(id: number): Observable<Student>{
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
    return this.http.get<Student>(`${this.baseURL}/getById/${id}`, { headers: httpHeaders });
  }

  
  deleteStudent(id: number): Observable<void>{
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
    return this.http.delete<void>(`${this.baseURL}/delete/${id}`, { headers: httpHeaders });
  }
  
  updateStudent(id: number,student: Student): Observable<Student>{
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
    return this.http.put<Student>(`${this.baseURL}/update/${id}`, student,{ headers: httpHeaders });
  }


//   createAuthorizationHeader(){
//     const jwtToken = localStorage.getItem('jwt');
   
//    let autHeaders: HttpHeaders = new HttpHeaders();
//    return autHeaders.set(
//      'Authorization', "Bearer" + jwtToken
//    )

  
// }

}


