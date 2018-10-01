package br.ufpe.cin.clipMe.controller;

import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.UserRepository;

public class LoginController {
	
	public boolean login(UserRepository repository, User entity) {
		
		if(entity.getLogin() == null || entity.getPassword() == null){
			return false;
		}
		
		User _entity = repository.findByLogin(entity.getLogin());
		
		return _entity != null && entity.getPassword().equals(_entity.getPassword());
	}
	
}
