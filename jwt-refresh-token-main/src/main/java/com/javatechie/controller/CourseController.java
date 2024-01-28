package com.javatechie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.entity.Course;
import com.javatechie.service.CourseService;


@RestController
@RequestMapping("/course")
public class CourseController {

		@Autowired
		private CourseService courseService;
//		@CrossOrigin(origins ="http://localhost:4200")
		@PostMapping("/add")
		public Course addCourse(@RequestBody Course course) {
			
			return courseService.addCourse(course);
		}
		@GetMapping("/findAll")
		public List<Course> findAllCourse(){
			return courseService.findAllCourse();
		}
		@PutMapping("/update/{id}")
	      public Course updateCourse(@RequestBody Course course) {
	    	  return courseService.updateCourse(course);
	      }
		
		@DeleteMapping("/delete/{id}")
		public String deleteDetails(@PathVariable long id) {
			
			return courseService.deleteCourse(id);
		}
		@GetMapping("/getById/{id}")
		public Course fetchDetailsById(@PathVariable long id ) {
			
			return courseService.getCourseDetailsById(id);
		}
	

}
