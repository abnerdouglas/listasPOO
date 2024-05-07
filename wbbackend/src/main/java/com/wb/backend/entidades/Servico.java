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
public class Servico extends RepresentationModel<Produto> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;

	@Column
	private String descricao;

	@Column
	private String preco;

    @Column
	private String duracao;

	@Column
	private String generoConsumidor;

	@Column
	private int quantidadeConsumida;
}