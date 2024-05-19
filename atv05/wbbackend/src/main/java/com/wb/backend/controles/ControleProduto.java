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

import com.wb.backend.atualizadores.AtualizadorProduto;
import com.wb.backend.entidades.Produto;
import com.wb.backend.hateoas.HateoasProduto;
import com.wb.backend.repositorios.RepositorioProduto;

@CrossOrigin
@RestController
public class ControleProduto {
	@Autowired
	private RepositorioProduto repositorio;
	@Autowired
	private HateoasProduto hateoas;
	@Autowired
	private AtualizadorProduto atualizador;

	@GetMapping("/produto/{id}")
	public ResponseEntity<Produto> obterProduto(@PathVariable Long id) {
		Produto produto = repositorio.findById(id).get();
		if (produto != null) {
			hateoas.adicionarLink(produto);
			return new ResponseEntity<Produto>(produto, HttpStatus.FOUND);
		} else {
			return new ResponseEntity<Produto>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/produtos")
	public ResponseEntity<List<Produto>> obterProdutos() {
		List<Produto> produtos = repositorio.findAll();
		hateoas.adicionarLink(produtos);
		return new ResponseEntity<List<Produto>>(produtos, HttpStatus.FOUND);
	}

	@PutMapping("/produto/atualizar")
	public ResponseEntity<?> atualizarProduto(@RequestBody Produto atualizacao) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		Produto produto = repositorio.getById(atualizacao.getId());
		if (produto != null) {
			atualizador.atualizar(produto, atualizacao);
			repositorio.save(produto);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@PostMapping("/produto/cadastrar")
	public ResponseEntity<?> cadastrarProduto(@RequestBody Produto novo) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		if (novo != null) {
			repositorio.save(novo);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@DeleteMapping("/produto/excluir")
	public ResponseEntity<?> excluirProduto(@RequestBody Produto exclusao) {
		Produto produto = repositorio.getById(exclusao.getId());
		if (produto == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			repositorio.delete(produto);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
}