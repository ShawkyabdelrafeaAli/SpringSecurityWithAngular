import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-cource-details',
  templateUrl: './cource-details.component.html',
  styleUrls: ['./cource-details.component.css']
})
export class CourceDetailsComponent  implements OnInit {

  id!: number;
   cource!: Course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cource = new Course();


    this.courseService.getCourceById(this.id).subscribe( data => {
      this.cource = data;
    });
  }
}{
}
