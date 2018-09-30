package br.ufpe.cin.clipMe.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@PostMapping
	public User adicionar(@Valid @RequestBody User user) {
		return repository.save(user);
	}

	@GetMapping
	public List<User> retrieveAll() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public User retrieve(@PathVariable long id) {
		Optional<User> optional = repository.findById(id);

		if (!optional.isPresent()){

		}

		return optional.get();
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> update(@RequestBody User user, @PathVariable long id) {

		Optional<User> optional = repository.findById(id);

		if (!optional.isPresent()){
			return ResponseEntity.notFound().build();
		}
		
		user.setId(id);
		repository.save(user);

		return ResponseEntity.noContent().build();
	}
}
