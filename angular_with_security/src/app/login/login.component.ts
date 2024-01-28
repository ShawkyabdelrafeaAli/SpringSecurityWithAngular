import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  loginForm!: FormGroup;
    token!:string;
  constructor(private service:JwtService, private fb:FormBuilder,private router: Router){
    
  }

  
  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],
    })
  }

     submitForm(){
    this.service.login(this.loginForm.value).subscribe(
    (response)=>{
       console.log(response);
     
         
         const jwtToken = response.token;
         localStorage.setItem('jwt',jwtToken);
         this.router.navigateByUrl("/dashboard");
       }
      
   )
  // this.goToDashboard();
  }
  // goToDashboard(){
  //   this.router.navigate(['/dashboard']);
  // }

}