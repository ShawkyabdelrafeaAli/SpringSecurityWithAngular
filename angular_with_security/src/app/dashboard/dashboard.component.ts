import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message!: string;
  constructor(private Service:JwtService){
  }
  ngOnInit(): void {
    
  }
  //  hello(){
  //   this.Service.hello().subscribe(
  //     (response)=>{
  //       console.log(response);
  //       this.message = response.message;
  //     }
  //     )
  //  }
}
