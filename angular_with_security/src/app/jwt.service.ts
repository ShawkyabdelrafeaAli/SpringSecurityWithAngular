import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { RegisterRequest } from 'src/register-request';
import { Student } from './student';
import { Token } from '@angular/compiler';
 const BASE_URL = ["http://localhost:8086/"] 

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  //  jwtToken = localStorage.getItem('jwt');

  constructor(private http:HttpClient  ) { }
 


  register(signRequest:any):Observable<any>{
   return this.http.post(BASE_URL+ 'api/v1/auth/register',signRequest);
  }

  login(loginRequest:any):Observable<any>{
    return this.http.post(BASE_URL+ 'api/v1/auth/authenticate',loginRequest);
  }
  
//  getAllStudent():Observable<Student[]>{
//    return this.http.get<Student[]>(BASE_URL+ 'student/findAll',{
//     headers:this.createAuthorizationHeader()
//    })

  hello():Observable<any>{
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
    return this.http.get(BASE_URL+'api/v1/demo-controller',{ headers: httpHeaders })
     
  }

  static logout(){
    window.localStorage.removeItem('jwt');
  }
  // saveToken(jwt: string):void{
  //   localStorage.setItem('jwt',jwt);
  //   this.token = jwt;
  //   this.isLoggedIn = true;
  // }
  // decodedJwt():void{
  //   if(this.token!=undefined){
  //     const decodedToken = he
  //   }
  // }

  }


