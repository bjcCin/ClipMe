package br.ufpe.cin.clipMe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import br.ufpe.cin.clipMe.model.Template;
import br.ufpe.cin.clipMe.repository.TemplateRepository;

public class TemplateController {

	public Template add(TemplateRepository repository, Template entity) {
		return repository.save(entity);
	}
	
	public List<Template> retrieveAll(TemplateRepository repository) {
		return repository.findAll();
	}
	
	public Template retrieve(TemplateRepository repository, long id) {
		Optional<Template> optional = repository.findById(id);
		if (!optional.isPresent()){

		}
		return optional.get();
	}
	
	public void delete(TemplateRepository repository, long id) {
		repository.deleteById(id);
	}
	
	public ResponseEntity<Object> update(TemplateRepository repository, Template entity, @PathVariable long id) {

		Optional<Template> optional = repository.findById(id);

		if (!optional.isPresent()){
			return ResponseEntity.notFound().build();
		}
		
		entity.setId(id);
		repository.save(entity);

		return ResponseEntity.noContent().build();
	}
	
}
