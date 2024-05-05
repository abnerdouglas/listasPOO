package com.wb.backend.verificadores;

public interface Verificador<T> {
	public boolean verificar(T objeto);
}