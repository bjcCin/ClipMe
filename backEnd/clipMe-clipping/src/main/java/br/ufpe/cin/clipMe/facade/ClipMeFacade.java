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

import br.ufpe.cin.clipMe.controller.ClippingController;
import br.ufpe.cin.clipMe.controller.TemplateController;
import br.ufpe.cin.clipMe.model.Clipping;
import br.ufpe.cin.clipMe.model.Template;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryClipping;
import br.ufpe.cin.clipMe.repository.InterfaceRepositoryTemplate;

@RestController
@RequestMapping("/")
public class ClipMeFacade {
	
	@Autowired
	private InterfaceRepositoryTemplate templateRepository;
	
	@Autowired
	private InterfaceRepositoryClipping clippingRepository;

	//Singleton
	private TemplateController templateController = TemplateController.getInstance();
	private ClippingController clippingController = ClippingController.getInstance();
	
	
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
	
	
	//--------------//
	//   CLIPPING   //
	//--------------//

	@PostMapping("/clipping")
	public Clipping addClipping(@Valid @RequestBody Clipping entity) {
		return clippingController.add(clippingRepository, entity);
	}

	@GetMapping("/clipping")
	public List<Clipping> retrieveAllClipping() {
		return clippingController.retrieveAll(clippingRepository);
	}

	@GetMapping("/clipping/{id}")
	public Clipping retrieveClipping(@PathVariable long id) {
		return clippingController.retrieve(clippingRepository, id);
	}

	@DeleteMapping("/clipping/{id}")
	public void deleteClipping(@PathVariable long id) {
		clippingController.delete(clippingRepository, id);
	}

	@PutMapping("/clipping/{id}")
	public ResponseEntity<Object> updateClipping(@RequestBody Clipping entity, @PathVariable long id) {
		return clippingController.update(clippingRepository, entity, id);
	}
	
}
