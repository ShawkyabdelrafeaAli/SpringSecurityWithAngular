import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateCourceComponent } from './create-cource/create-cource.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateCourceComponent } from './update-cource/update-cource.component';
import { AuthComponent } from './auth/auth.component';
import { StudentDetailsComponent } from './student-details/student-details.component';






const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'register', component: RegisterComponent,},
  { path: 'login', component: LoginComponent,},
  {path: 'dashboard', component: DashboardComponent,},
  { path: 'student-list', component: StudentListComponent, },
  { path: 'course-list', component: CourceListComponent,},
  { path: 'add-student', component: CreateStudentComponent,},
  { path: 'add-course', component: CreateCourceComponent,},
  { path: 'update-student', component: UpdateStudentComponent,},
  { path: 'update-course', component: UpdateCourceComponent,},
  {path: 'student-details', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
