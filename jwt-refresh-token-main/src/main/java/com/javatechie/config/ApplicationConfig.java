package com.javatechie.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.javatechie.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class ApplicationConfig {
//
//	@Value("${allowed.origin}")
//	private String allowedOrigin;
//	
//	@Bean
//	public WebMvcConfigurer getCorsConfiguration() {
//		return new WebMvcConfigurer() {
//			
//			@Override
//			public void addCorsMappings(CorsRegistry register) {
//				register.addMapping("/**")
//				.allowedOrigins("http://localhost:4200")
//				.allowedMethods("GET","POST","PUT","DELETE")
//				.allowedHeaders("*");
//			}
//		};
//	}
	
	@Autowired
	private  UserRepository repository;
	@Bean
	public UserDetailsService userDetailsService() {
		return username-> repository.findByEmail(username)
				.orElseThrow(()-> new UsernameNotFoundException("User not found "));
			
		}
	@Bean 
	public AuthenticationProvider authenticationProvider() {
		
		DaoAuthenticationProvider authProvidor = new DaoAuthenticationProvider();
		authProvidor.setUserDetailsService(userDetailsService() );
		authProvidor.setPasswordEncoder(passwordEncoder());
		return authProvidor;
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		
		return config.getAuthenticationManager();
	}
	@Bean
	public PasswordEncoder passwordEncoder() {
		// TODO Auto-generated method stub
		return new BCryptPasswordEncoder();
	}
	

	
	
}

