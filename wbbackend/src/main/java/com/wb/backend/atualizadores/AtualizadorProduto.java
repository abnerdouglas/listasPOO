package com.wb.backend.atualizadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.backend.entidades.Produto;
import com.wb.backend.verificadores.VerificadorStringNula;

@Component
public class AtualizadorProduto implements Atualizador<Produto> {
	@Autowired
	private VerificadorStringNula verificadorString;
	
	@Override
	public void atualizar(Produto alvo, Produto atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getMarca())) {
			alvo.setMarca(atualizacao.getMarca());
		}
		if (!verificadorString.verificar(atualizacao.getPreco())) {
			alvo.setPreco(atualizacao.getPreco());
		}
		if (!verificadorString.verificar(atualizacao.getGeneroConsumidor())) {
			alvo.setGeneroConsumidor(atualizacao.getGeneroConsumidor());
		}
	}
}