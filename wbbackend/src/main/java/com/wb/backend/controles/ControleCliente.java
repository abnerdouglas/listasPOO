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

import com.wb.backend.atualizadores.AtualizadorCliente;
import com.wb.backend.entidades.Cliente;
import com.wb.backend.hateoas.HateoasCliente;
import com.wb.backend.repositorios.RepositorioCliente;

@CrossOrigin
@RestController
public class ControleCliente {
	@Autowired
	private RepositorioCliente repositorio;
	@Autowired
	private HateoasCliente hateoas;
	@Autowired
	private AtualizadorCliente atualizador;

	@GetMapping("/cliente/{id}")
	public ResponseEntity<Cliente> obterCliente(@PathVariable Long id) {
		Cliente cliente = repositorio.findById(id).get();
		if (cliente != null) {
			hateoas.adicionarLink(cliente);
			return new ResponseEntity<Cliente>(cliente, HttpStatus.FOUND);
		} else {
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> obterClientes() {
		List<Cliente> clientes = repositorio.findAll();
		hateoas.adicionarLink(clientes);
		return new ResponseEntity<List<Cliente>>(clientes, HttpStatus.FOUND);
	}

	@PutMapping("/cliente/atualizar")
	public ResponseEntity<?> atualizarCliente(@RequestBody Cliente atualizacao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		Cliente cliente = repositorio.getById(atualizacao.getId());
		if (cliente != null) {
			atualizador.atualizar(cliente, atualizacao);
			repositorio.save(cliente);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@PostMapping("/cliente/cadastrar")
	public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente novo) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		if (novo != null) {
			repositorio.save(novo);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@DeleteMapping("/cliente/excluir")
	public ResponseEntity<?> excluirCliente(@RequestBody Cliente exclusao) {
		Cliente cliente = repositorio.getById(exclusao.getId());
		if (cliente == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			repositorio.delete(cliente);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
}