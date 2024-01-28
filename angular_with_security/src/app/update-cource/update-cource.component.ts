import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-cource',
  templateUrl: './update-cource.component.html',
  styleUrls: ['./update-cource.component.css']
})
export class UpdateCourceComponent implements OnInit {



  id!: number;
  cource: Course = new Course();
  constructor(private courceService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
       
    this.courceService.getCourceById(this.id).subscribe(data => {
      this.cource= data;
    }, error => console.log(error));
  }

  updateCource(){
    this.courceService.updateCource(this.id,this.cource).subscribe( data =>{
      this.goToCourceList();
    }
    , error => console.log(error));
  }


goToCourceList(){
  this.router.navigate(['/courses']);
}
}
