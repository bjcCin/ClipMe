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

import br.ufpe.cin.clipMe.model.Template;
import br.ufpe.cin.clipMe.repository.TemplateRepository;

@RestController
@RequestMapping("/template")
public class TemplateController {

	
	@Autowired
	private TemplateRepository repository;
	
	@PostMapping
	public Template adicionar(@Valid @RequestBody Template template) {
		return repository.save(template);
	}

	@GetMapping
	public List<Template> retrieveAll() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public Template retrieve(@PathVariable long id) {
		Optional<Template> optional = repository.findById(id);

		if (!optional.isPresent()){

		}

		return optional.get();
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> update(@RequestBody Template template, @PathVariable long id) {

		Optional<Template> optional = repository.findById(id);

		if (!optional.isPresent()){
			return ResponseEntity.notFound().build();
		}
		
		template.setId(id);
		repository.save(template);

		return ResponseEntity.noContent().build();
	}
}
