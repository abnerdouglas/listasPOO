package com.wb.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wb.backend.entidades.Cliente;

@Repository
public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
}