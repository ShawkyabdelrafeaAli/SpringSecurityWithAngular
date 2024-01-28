import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import { CreateCourceComponent } from './create-cource/create-cource.component';
import { UpdateCourceComponent } from './update-cource/update-cource.component';
import { CourceDetailsComponent } from './cource-details/cource-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    StudentListComponent,
   CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CourceListComponent,
    CreateCourceComponent,
    CourceDetailsComponent,
    UpdateCourceComponent,
    AuthComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
