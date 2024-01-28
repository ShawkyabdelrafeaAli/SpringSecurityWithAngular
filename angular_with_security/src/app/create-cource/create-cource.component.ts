import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-cource',
  templateUrl: './create-cource.component.html',
  styleUrls: ['./create-cource.component.css']
})
export class CreateCourceComponent implements OnInit {
  cource: Course = new Course();
  registerForm!: FormGroup; 

  constructor(private courseService: CourseService,private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveCource(){
    this.courseService.createCource(this.cource).subscribe( data =>{
      console.log(data);
      this.goToCourceList();
    },
    error => console.log(error));
  }

  goToCourceList(){
    this.router.navigate(['/courses']);
  }
  
  onSubmit(){
    console.log(this.cource);
    this.saveCource();
  }

  loginForm = new FormGroup({
    cName:new FormControl('',[Validators.required]),
    cPrice:new FormControl('',[Validators.required]),
  })
loginCourse()
{
  console.warn(this.loginForm.value)
}

get cName(){
  return this.loginForm.get('cName');
}
get cPrice(){
  return this.loginForm.get('cprice');
}

}
