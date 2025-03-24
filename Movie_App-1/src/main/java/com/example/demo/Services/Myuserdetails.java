package com.example.demo.Services;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepo;

@Service
public class Myuserdetails implements UserDetailsService {

	@Autowired
	private UserRepo userRepository;
	
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
	

		User byEmail = userRepository.findByEmail(email);
		
		if(byEmail!=null) {
			return new org.springframework.security.core.userdetails.User(byEmail.getEmail(), byEmail.getPassword(),
					Collections.singleton(new SimpleGrantedAuthority(byEmail.getRole())));
		}
		
		throw new UsernameNotFoundException("User not found with email: " + email);
		 
		 
	}

}
