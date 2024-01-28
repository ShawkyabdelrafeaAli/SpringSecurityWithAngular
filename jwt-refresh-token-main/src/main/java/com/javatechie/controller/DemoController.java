package com.javatechie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.entity.Hello;

@RestController
@RequestMapping("/api/v1/demo-controller")
public class DemoController {

	@GetMapping
	public Hello sayHello()
      {
		return new  Hello("Hello From Authorized API Request . ");
		
		}
}
