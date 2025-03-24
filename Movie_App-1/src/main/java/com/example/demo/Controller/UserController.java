package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.User;
import com.example.demo.Services.AuthService;

@RestController
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private AuthService authService;
	
	 @PostMapping("/login")
	    public String login(@RequestParam String email, @RequestParam String password) {
	        return authService.login(email, password);
	    }

	    @PostMapping("/signup")
	    public User signUp(@RequestBody User user) {
	        return authService.signUp(user);
	    }
	
	

}
