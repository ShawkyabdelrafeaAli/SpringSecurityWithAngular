import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  //  jwtToken = localStorage.getItem('jwt');
  // token!:string ;
  static jwtToken: any;
  constructor( private service: JwtService , private router:Router){

  }
  
        
  ngOnInit(): void {
   
  }


  logout(){
    JwtService.logout();
    this.router.navigateByUrl("/login")
  }
  // static gettoken(jwtToken:string) {
  
  // }

  // static isAdminLoggedIn():boolean{
  //   if(this.jwtToken()==null){
  //     return true;
  //   }
  //   return false;
  // }
 
}
