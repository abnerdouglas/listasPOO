package com.wb.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wb.backend.entidades.Servico;

@Repository
public interface RepositorioServico extends JpaRepository<Servico, Long> {
}