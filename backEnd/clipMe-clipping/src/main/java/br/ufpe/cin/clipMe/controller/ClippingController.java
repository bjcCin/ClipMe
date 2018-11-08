package br.ufpe.cin.clipMe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import br.ufpe.cin.clipMe.model.Clipping;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryClipping;

public class ClippingController {

	private static ClippingController instance = new ClippingController();
	
	private ClippingController(){
		
	}

	public static ClippingController getInstance() {
		return instance;
	}

	public Clipping add(InterfaceRepositoryClipping repository, Clipping entity) {
		return repository.save(entity);
	}
	
	public List<Clipping> retrieveAll(InterfaceRepositoryClipping repository) {
		return repository.findAll();
	}
	
	public Clipping retrieve(InterfaceRepositoryClipping repository, long id) {
		Optional<Clipping> optional = repository.findById(id);
		if (!optional.isPresent()){

		}
		return optional.get();
	}
	
	public void delete(InterfaceRepositoryClipping repository, long id) {
		repository.deleteById(id);
	}
	
	public ResponseEntity<Object> update(InterfaceRepositoryClipping repository, Clipping entity, @PathVariable long id) {

		Optional<Clipping> optional = repository.findById(id);

		if (!optional.isPresent()){
			return ResponseEntity.notFound().build();
		}
		
		entity.setId(id);
		repository.save(entity);

		return ResponseEntity.noContent().build();
	}
}
