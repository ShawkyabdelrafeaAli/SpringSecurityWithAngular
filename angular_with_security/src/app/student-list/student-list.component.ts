import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Course } from '../course';

import { HttpErrorResponse } from '@angular/common/http';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
 
  students: Student[]=[];
  courses:Course[]=[];

 
  constructor(private studentService: StudentService,private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
    // this.getCourses();
    // this.getdata();
   
  } 
  // getdata(){
  //   this.studentService.getData().subscribe(data => {
  //     this.students = data;
  //     console.log(data);
  //   });
  //  }
   getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
      console.log(data);
    });
   }
  
  //   getStudents(){
  //    this.studentService.getStudentsList().subscribe(data => {
  //      this.students = data;
  //     console.log(data);
  //    });
  //  }
  //  getCourses(){
  //   this.courseService.getCourcesList().subscribe(data=>{
  //     this.courses = data;
  //   })
  //  }
  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

  updateStudent(sId: number){
    console.log(sId);
    this.router.navigate(['update-student', sId]);
  }

deleteStudent(id: number):void{
  this.studentService.deleteStudent(id).subscribe(
    (response: void)=>{
      console.log(response);
    this.getStudents();
    },
    (error: HttpErrorResponse)=>{
    alert(error.message);
    }
    );
  
}
public searchStudent(key:String):void{

  const results: Student[]=[];
  for (const student of this.students){
    if(student.sName.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||student.sEmail.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||student.sPhone.toLowerCase().indexOf(key.toLowerCase())!==-1
    ||student.sAddress.toLowerCase().indexOf(key.toLowerCase())!==-1)
     {results.push(student);
    }
  }
  this.students= results;
  if(results.length===0 || !key){
    this.getStudents();
  }
}

  // deleteStudent(id: number){
  //   this.studentService.deleteStudent(id).subscribe( data => {
  //     console.log(data);
  //     this.getStudents();
  //   })
  // }

  
  // private getCources(){
  //   this.courseService.getCourcesList().subscribe(data => {
  //     this.courses = data;
  //   });
  // }
}


