import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

    
  
login(){
      this.authService.login('your_username', 'your_password').subscribe(
          (response) => {
              console.log('Login successful', response);
  
          }
      )
        }

          getdata(){
              this.authService.getData().subscribe(
                  (data) => {
                      console.log('Secure data:', data);
                  },
                  (error) => {
                      console.error('Error fetching secure data:', error);
                  }
              );
          
  }
}