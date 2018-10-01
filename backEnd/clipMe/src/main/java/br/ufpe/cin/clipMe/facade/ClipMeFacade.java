package br.ufpe.cin.clipMe.facade;

import java.util.List;

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

import br.ufpe.cin.clipMe.controller.LoginController;
import br.ufpe.cin.clipMe.controller.TemplateController;
import br.ufpe.cin.clipMe.controller.UserController;
import br.ufpe.cin.clipMe.model.Template;
import br.ufpe.cin.clipMe.model.User;
import br.ufpe.cin.clipMe.repository.TemplateRepository;
import br.ufpe.cin.clipMe.repository.UserRepository;

@RestController
@RequestMapping("/")
public class ClipMeFacade {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TemplateRepository templateRepository;
	
	
	//-----------//
	//   LOGIN   //
	//-----------//
	
	@PostMapping("/login")
	public boolean login(@Valid @RequestBody User user) {
		return new LoginController().login(userRepository, user);
	}
	
	
	//------------//
	//  TEMPLATE  //
	//------------//
	
	@PostMapping("/templates")
	public Template addTemplate(@Valid @RequestBody Template template) {
		return new TemplateController().add(templateRepository, template);
	}
	
	@GetMapping("/templates")
	public List<Template> retrieveAllTemplate() {
		return new TemplateController().retrieveAll(templateRepository);
	}
	
	@GetMapping("/templates/{id}")
	public Template retrieveTemplate(@PathVariable long id) {
		return new TemplateController().retrieve(templateRepository, id);
	}

	@DeleteMapping("/templates/{id}")
	public void deleteTemplate(@PathVariable long id) {
		new TemplateController().delete(templateRepository, id);
	}

	@PutMapping("/templates/{id}")
	public ResponseEntity<Object> updateTemplate(@RequestBody Template template, @PathVariable long id) {
		return new TemplateController().update(templateRepository, template, id);
	}
	
	
	//----------//
	//   USER   //
	//----------//
	
	@PostMapping("/users")
	public User addUser(@Valid @RequestBody User entity) {
		return new UserController().add(userRepository, entity);
	}
	
	@GetMapping("/users")
	public List<User> retrieveAllUser() {
		return new UserController().retrieveAll(userRepository);
	}
	
	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable long id) {
		return new UserController().retrieve(userRepository, id);
	}

	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable long id) {
		new UserController().delete(userRepository, id);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User entity, @PathVariable long id) {
		return new UserController().update(userRepository, entity, id);
	}
	
}
