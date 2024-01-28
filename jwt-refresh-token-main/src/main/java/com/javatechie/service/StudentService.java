package com.javatechie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.javatechie.entity.Student;
import com.javatechie.repository.StudentRepo;


@Service
public class StudentService {

	@Autowired
	private StudentRepo studentRepo;
	
	public Student addSudents(Student student) {
		return studentRepo.save(student);
	}
	public List<Student> findAllStudent(){
		return studentRepo.findAll();
	}
	
	public Student updateStudent( Student student) {
	
	 Student current = studentRepo.findById(student.getsId()).get();
	 
	 current.setsName(student.getsName());
	 current.setsEmail(student.getsEmail());
	 current.setsPhone(student.getsPhone());
	 current.setsAddress(student.getsAddress());
	 current.setCourse(student.getCourse());
	 return studentRepo.save(current );
}



	public String deleteStudent(long id) {
	if(studentRepo.existsById(id)) {
		
		studentRepo.deleteById(id);
		
		return "deleted" + id;
	}else {
		return "this  Id not there   trying another Id ";
	}
		
	} 
	
     public Student getStudentDetailsById(long id) {
		
		return studentRepo.findById(id).orElse(null);
	}
	
	
	
//	public void deleteStudent(int id) {
//	
//	 studentRepo.deleteById(id);
//		
//	} 
}

