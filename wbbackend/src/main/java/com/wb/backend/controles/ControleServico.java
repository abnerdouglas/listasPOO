package com.wb.backend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wb.backend.atualizadores.AtualizadorServico;
import com.wb.backend.entidades.Servico;
import com.wb.backend.hateoas.HateoasServico;
import com.wb.backend.repositorios.RepositorioServico;

@CrossOrigin
@RestController
public class ControleServico {
	@Autowired
	private RepositorioServico repositorio;
	@Autowired
	private HateoasServico hateoas;
	@Autowired
	private AtualizadorServico atualizador;

	@GetMapping("/servico/{id}")
	public ResponseEntity<Servico> obterServico(@PathVariable Long id) {
		Servico servico = repositorio.findById(id).get();
		if (servico != null) {
			hateoas.adicionarLink(servico);
			return new ResponseEntity<Servico>(servico, HttpStatus.FOUND);
		} else {
			return new ResponseEntity<Servico>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/servicos")
	public ResponseEntity<List<Servico>> obterServicos() {
		List<Servico> servicos = repositorio.findAll();
		hateoas.adicionarLink(servicos);
		return new ResponseEntity<List<Servico>>(servicos, HttpStatus.FOUND);
	}

	@PutMapping("/servico/atualizar")
	public ResponseEntity<?> atualizarServico(@RequestBody Servico atualizacao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		Servico servico = repositorio.getById(atualizacao.getId());
		if (servico != null) {
			atualizador.atualizar(servico, atualizacao);
			repositorio.save(servico);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@PostMapping("/servico/cadastrar")
	public ResponseEntity<?> cadastrarServico(@RequestBody Servico novo) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		if (novo != null) {
			repositorio.save(novo);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@DeleteMapping("/servico/excluir")
	public ResponseEntity<?> excluirServico(@RequestBody Servico exclusao) {
		Servico servico = repositorio.getById(exclusao.getId());
		if (servico == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			repositorio.delete(servico);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
}