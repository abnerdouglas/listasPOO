package com.wb.wbbackend.atualizadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Telefone;
import com.wb.wbbackend.verificadores.VerificadorStringNula;
import com.wb.wbbackend.verificadores.VerificadorTelefoneNulo;

@Component
public class AtualizadorCliente implements Atualizador<Cliente> {
	@Autowired
	private VerificadorStringNula verificadorString;
	
	@Autowired
	private VerificadorTelefoneNulo verificadorTelefone;

	@Override
	public void atualizar(Cliente alvo, Cliente atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getNomeSocial())) {
			alvo.setNomeSocial(atualizacao.getNomeSocial());
		}
		if (!verificadorString.verificar(atualizacao.getCpf())) {
			alvo.setCpf(atualizacao.getCpf());
		}
		if (!verificadorString.verificar(atualizacao.getDataEmissaoCpf())) {
			alvo.setDataEmissaoCpf(atualizacao.getDataEmissaoCpf());
		}
		if (!verificadorString.verificar(atualizacao.getRg())) {
			alvo.setRg(atualizacao.getRg());
		}
		if (!verificadorString.verificar(atualizacao.getDataEmissaoRg())) {
			alvo.setDataEmissaoRg(atualizacao.getDataEmissaoRg());
		}
		if (!verificadorString.verificar(atualizacao.getGenero())) {
			alvo.setGenero(atualizacao.getGenero());
		}
		
		if (atualizacao.getTelefones().size() > 0) {
			alvo.getTelefones().clear();
			for (Telefone telefone : atualizacao.getTelefones()) {
				if (!verificadorTelefone.verificar(telefone)) {
					Telefone novoTelefone = new Telefone();
					novoTelefone.setDdd(telefone.getDdd());
					novoTelefone.setNumero(telefone.getNumero());
					alvo.getTelefones().add(telefone);
				}
			}
		}
	}
}