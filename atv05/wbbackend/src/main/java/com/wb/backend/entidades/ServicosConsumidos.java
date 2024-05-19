package com.wb.backend.entidades;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@Entity
public class ServicosConsumidos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @Column
    private String preco;

    @Column
    private int quantidade;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    @JsonBackReference
    private Cliente cliente;

    public ServicosConsumidos(){
    }

    public ServicosConsumidos(Cliente cliente, String nome, String preco, int quantidade){
        this.cliente = cliente;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
