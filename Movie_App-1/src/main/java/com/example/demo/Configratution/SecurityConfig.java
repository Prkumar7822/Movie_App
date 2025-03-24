package com.example.demo.Configratution;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.example.demo.Services.Myuserdetails;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private Myuserdetails myuserdetails;
	
	
	 @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	            .authorizeRequests()
	            .requestMatchers("/auth/**").permitAll()
	            .anyRequest().authenticated();
	        return http.build();
	    }

	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	    
	    @Bean 
	    public AuthenticationProvider authenticationProvider() {
	    	DaoAuthenticationProvider daoProvider=new DaoAuthenticationProvider();
	    	daoProvider.setPasswordEncoder(passwordEncoder());
	    	daoProvider.setUserDetailsService(myuserdetails);
	    	return daoProvider;
	    }
	    

		@Bean
		public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
			return configuration.getAuthenticationManager();
		}
}
