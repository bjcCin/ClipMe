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
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryTemplate;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryUser;

@RestController
@RequestMapping("/")
public class ClipMeFacade {

	@Autowired
	private InterfaceRepositoryUser userRepository;
	
	@Autowired
	private InterfaceRepositoryTemplate templateRepository;

	//Singleton
	private TemplateController templateController = TemplateController.getInstance();
	private LoginController loginController = LoginController.getInstance();
	private UserController userController = UserController.getInstance();
	
	
	//-----------//
	//   LOGIN   //
	//-----------//
	
	@PostMapping("/login")
	public boolean login(@Valid @RequestBody User user) {
		return loginController.login(userRepository, user);
	}
	
	
	//------------//
	//  TEMPLATE  //
	//------------//
	
	@PostMapping("/templates")
	public Template addTemplate(@Valid @RequestBody Template template) {
		return templateController.add(templateRepository, template);
	}
	
	@GetMapping("/templates")
	public List<Template> retrieveAllTemplate() {
		return templateController.retrieveAll(templateRepository);
	}
	
	@GetMapping("/templates/{id}")
	public Template retrieveTemplate(@PathVariable long id) {
		return templateController.retrieve(templateRepository, id);
	}

	@DeleteMapping("/templates/{id}")
	public void deleteTemplate(@PathVariable long id) {
		templateController.delete(templateRepository, id);
	}

	@PutMapping("/templates/{id}")
	public ResponseEntity<Object> updateTemplate(@RequestBody Template template, @PathVariable long id) {
		return templateController.update(templateRepository, template, id);
	}
	
	
	//----------//
	//   USER   //
	//----------//
	
	@PostMapping("/users")
	public String addUser(@Valid @RequestBody User entity) {
		return userController.add(userRepository, entity);
	}
	
	@GetMapping("/users")
	public List<User> retrieveAllUser() {
		return userController.retrieveAll(userRepository);
	}
	
	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable long id) {
		return userController.retrieve(userRepository, id);
	}

	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable long id) {
		userController.delete(userRepository, id);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User entity, @PathVariable long id) {
		return userController.update(userRepository, entity, id);
	}
	
}
