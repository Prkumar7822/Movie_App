package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepo;
import com.example.demo.Sequrity.movieSequrity;

@Service
public class AuthService {

	@Autowired
	private UserRepo userRepository;
	
	@Autowired
	private movieSequrity jwt;
	

	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	 public String login(String email, String password) {
		 
		 
		 Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(email, password));

			SecurityContextHolder.getContext().setAuthentication(authentication);

			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		 

	        return jwt.generateToken(email);
	      

	    }

	    public User signUp(User user) {
	        user.setPassword(passwordEncoder.encode(user.getPassword()));
	        return userRepository.save(user);
	    }
	
}
