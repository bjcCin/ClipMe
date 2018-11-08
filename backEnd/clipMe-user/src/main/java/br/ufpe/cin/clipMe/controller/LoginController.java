package br.ufpe.cin.clipMe.controller;

import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryUser;

public class LoginController {
	
	private static LoginController instance = new LoginController();
	
	private LoginController(){
		
	}
	
	public static LoginController getInstance() {
		return instance;
	}

	public boolean login(InterfaceRepositoryUser repository, User entity) {
		
		if(entity.getLogin() == null || entity.getPassword() == null){
			return false;
		}
		
		User _entity = repository.findByLogin(entity.getLogin());
		
		return _entity != null && entity.getPassword().equals(_entity.getPassword());
	}
	
}
