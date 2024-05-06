package com.wb.backend.entidades;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.hateoas.RepresentationModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Cliente extends RepresentationModel<Cliente> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;

	@Column
	private String nomeSocial;

	@Column
	private String cpf;

	@Column
	private String dataEmissaoCpf;

	@Column
	private String rg;

	@Column
	private String dataEmissaoRg;

	@Column
	private String genero;

	@Column
	private String valorConsumido;

	@Column
	private int numeroProdutosConsumidos;

	@Column
	private int numeroServicosConsumidos;
	
	@OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Telefone> telefones = new ArrayList<>();
}