package com.wb.backend.atualizadores;

public interface Atualizador<T> {
	public void atualizar(T alvo, T atualizacao);
}