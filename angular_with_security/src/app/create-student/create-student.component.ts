
import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Course } from '../course';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  course:Course = new Course();
  registerForm!: FormGroup; 

  constructor(private studentService: StudentService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    // this.registerForm =this.fb.group({
    //   sName:['',[Validators.required]],
    //   sEmail:['',[Validators.required,Validators.email]],
    //   sPhone:['',[Validators.required]],
    //   sAddress:['',[Validators.required]]
    // });
  }
  saveStudente(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/student-list']);
  }
  
  onSubmit(){
    console.log(this.student);
    console.log(this.course);
    this.saveStudente();
  }

  loginForm = new FormGroup({
    sName:new FormControl('',[Validators.required]),
    sEmail:new FormControl('',[Validators.required,Validators.email]),
    sPhone:new FormControl('',[Validators.required]),
    sAddress:new FormControl('',[Validators.required]),

  })
loginStudent()
{
  console.warn(this.loginForm.value)
}

get sName(){
  return this.loginForm.get('sName');
}
get sEmail(){
  return this.loginForm.get('sEmail');
}
get sPhone(){
  return this.loginForm.get('sPhone');
}
get sAddress(){
  return this.loginForm.get('sAddress');
}

}
