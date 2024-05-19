package com.wb.backend.verificadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.backend.entidades.Telefone;

@Component
public class VerificadorTelefoneNulo implements Verificador<Telefone> {
	@Autowired
	private VerificadorStringNula verificadorString;

	@Override
	public boolean verificar(Telefone objeto) {
		if (objeto != null) {
			boolean ddd = verificadorString.verificar(objeto.getDdd());
			boolean numero = verificadorString.verificar(objeto.getNumero());
			return ddd | numero;
		} else {
			return true;
		}
	}
}