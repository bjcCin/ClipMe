package br.ufpe.cin.clipMe.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.UserRepository;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserRepository repository;
	
	@PostMapping
	public boolean login(@Valid @RequestBody User user) {
		
		if(user.getLogin() == null || user.getPassword() == null){
			return false;
		}
		
		User _user = repository.findByLogin(user.getLogin());
		
		return _user != null && user.getPassword().equals(_user.getPassword());
	}
	
}
