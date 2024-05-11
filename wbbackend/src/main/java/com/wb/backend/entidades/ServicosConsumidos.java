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

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    @JsonBackReference
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "servico_id")
    private Servico servico;

    @Column
    private int quantidade;

    @Column
    private int valorUnitario;
}
