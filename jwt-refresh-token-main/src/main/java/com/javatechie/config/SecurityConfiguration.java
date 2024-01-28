package com.javatechie.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.RequiredArgsConstructor;

@EnableMethodSecurity
@EnableWebSecurity
@RequiredArgsConstructor
@Configuration
public class SecurityConfiguration {


	
	@Autowired
	private JwtAuthenticationFilter jwtAuthFilter;
	@Autowired
	private  AuthenticationProvider AuthenticationProvider;
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
		.csrf()
		.disable()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
		.authorizeHttpRequests()
      	.requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		.requestMatchers("/api/v1/auth/authenticate").permitAll()
//		.requestMatchers("/api/v1/auth/login").permitAll()
		.requestMatchers("/api/v1/auth/register").permitAll()
		.anyRequest()
		.authenticated()
		.and()
		.httpBasic();
	
//		.authenticationProvider(AuthenticationProvider);
	
		return http.build();
	}

	@Bean
    WebMvcConfigurer corsConfig() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").
				allowedMethods("*").
				allowedOrigins("http://localhost:4200");
			}
		};
	}


}
