package com.wb.backend.hateoas;

import java.util.List;

public interface Hateoas<T> {
	public void adicionarLink(List<T> lista);
	public void adicionarLink(T objeto);
}