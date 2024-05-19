package com.wb.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wb.backend.entidades.Produto;

@Repository
public interface RepositorioProduto extends JpaRepository<Produto, Long> {
}