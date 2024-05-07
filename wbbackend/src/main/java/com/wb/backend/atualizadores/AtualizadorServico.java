package com.wb.backend.atualizadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.backend.entidades.Servico;
import com.wb.backend.verificadores.VerificadorStringNula;

@Component
public class AtualizadorServico implements Atualizador<Servico> {
	@Autowired
	private VerificadorStringNula verificadorString;
	
	@Override
	public void atualizar(Servico alvo, Servico atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getDescricao())) {
			alvo.setDescricao(atualizacao.getDescricao());
		}
        if (!verificadorString.verificar(atualizacao.getDuracao())) {
			alvo.setDuracao(atualizacao.getDuracao());
		}
		if (!verificadorString.verificar(atualizacao.getGeneroConsumidor())) {
			alvo.setGeneroConsumidor(atualizacao.getGeneroConsumidor());
		}
	}
}