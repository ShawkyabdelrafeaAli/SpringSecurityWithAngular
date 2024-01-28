import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.css']
})
export class CourceListComponent implements OnInit{
 
  courses: Course[]=[];
  
  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCources();
  }

  private getCources(){
    this.courseService.getCourcesList().subscribe(data => {
      this.courses = data;
    });
  }

  courceDetails(id: number){
    this.router.navigate(['cource-details', id]);
  }

  updateCource(id: number){
    this.router.navigate(['update-cource', id]);
  }

  deleteCource(id: number){
    this.courseService.deleteCource(id).subscribe( data => {
      console.log(data);
      this.getCources();
    })
  }

  public searchCourse(key:String):void{

    const results: Course[]=[];
    for (const course of this.courses){
    if(course.cName.toLowerCase().indexOf(key.toLowerCase())!==-1)
     {results.push(course);
    }
    }
    this.courses= results;
    if(results.length===0 || !key){
      this.getCources();
    }
  }
}
  

