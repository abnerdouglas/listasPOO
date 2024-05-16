package com.wb.backend.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Produto extends RepresentationModel<Produto> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;

	@Column
	private String marca;

	@Column
	private String preco;

	public Produto(){
	}

	public Produto(String nome, String marca, String preco){
		this.nome = nome;
		this.marca = marca;
		this.preco = preco;
	}
}