package com.javatechie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.entity.Course;
import com.javatechie.repository.CourseRepo;

@Service
public class CourseService {

	

	@Autowired
	private CourseRepo courseRepo;
	
	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}
	public List<Course> findAllCourse(){
		return courseRepo.findAll();
	}
	
	public Course updateCourse(Course course) {
	
	
	 
	 Course  current = courseRepo.findById(course.getcId()).get();
	 
	 current.setcName(course.getcName());
	 current.setcPrice(course.getcPrice());
	
	 return courseRepo.save(current);
}



	public String deleteCourse(Long id) {
	if(courseRepo.existsById(id)) {
		
		courseRepo.deleteById(id);
		
		return "deleted" + id;
	}else {
		return "this  Id not there   trying another Id ";
	}
		
	} 
     public Course getCourseDetailsById(long id) {
		
		return courseRepo.findById(id).orElse(null);
	}
	
	
	
//	public void deleteStudent(int id) {
//	
//	 studentRepo.deleteById(id);
//		
//	} 
}


