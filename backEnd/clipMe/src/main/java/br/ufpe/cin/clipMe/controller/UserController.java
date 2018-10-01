package br.ufpe.cin.clipMe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryUser;

public class UserController {
	
	private static UserController instance = new UserController();
	
	private UserController(){
		
	}
	
	public static UserController getInstance() {
		return instance;
	}

	public User add(InterfaceRepositoryUser repository, User entity) {
		return repository.save(entity);
	}
	
	public List<User> retrieveAll(InterfaceRepositoryUser repository) {
		return repository.findAll();
	}
	
	public User retrieve(InterfaceRepositoryUser repository, long id) {
		Optional<User> optional = repository.findById(id);
		if (!optional.isPresent()){

		}
		return optional.get();
	}
	
	public void delete(InterfaceRepositoryUser repository, long id) {
		repository.deleteById(id);
	}
	
	public ResponseEntity<Object> update(InterfaceRepositoryUser repository, User entity, @PathVariable long id) {

		Optional<User> optional = repository.findById(id);

		if (!optional.isPresent()){
			return ResponseEntity.notFound().build();
		}
		
		entity.setId(id);
		repository.save(entity);

		return ResponseEntity.noContent().build();
	}
}
