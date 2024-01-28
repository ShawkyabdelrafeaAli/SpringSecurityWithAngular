package com.javatechie.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.javatechie.auth.AuthenticationResponse;
import com.javatechie.auth.AuthenticationaRequest;
import com.javatechie.auth.RegisterRequest;
import com.javatechie.config.JwtService;
import com.javatechie.entity.Role;
import com.javatechie.entity.User;
import com.javatechie.repository.UserRepository;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthenticationService {

	@Autowired
	private UserRepository repository;
    @Autowired
	private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
	public AuthenticationResponse register(RegisterRequest request) {
  			
	  var user = User.builder()
			  .firstname(request.getFirstname())
			  .lastname(request.getLastname())
			  .email(request.getEmail())
              .password(passwordEncoder.encode(request.getPassword()))
              .role(Role.USER)
              .build();
	  repository.save(user);
	  var jwtToken = jwtService.generateToken(user); 
	return AuthenticationResponse.builder()
			.token(jwtToken)
			.build();
	}

	public  AuthenticationResponse authenticate(AuthenticationaRequest request) {
	
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getEmail(),
						request.getPassword()
						)
				);
		var user  = repository.findByEmail(request.getEmail())
				.orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
			
	}

	
	
}
