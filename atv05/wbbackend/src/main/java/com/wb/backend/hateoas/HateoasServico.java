package com.wb.backend.hateoas;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.wb.backend.controles.ControleServico;
import com.wb.backend.entidades.Servico;

@Component
public class HateoasServico implements Hateoas<Servico> {

	@Override
	public void adicionarLink(List<Servico> lista) {
		for (Servico servico : lista) {
			long id = servico.getId();
			Link linkProprio = WebMvcLinkBuilder
					.linkTo(WebMvcLinkBuilder.methodOn(ControleServico.class).obterServico(id)).withSelfRel();
			servico.add(linkProprio);
		}
	}

	@Override
	public void adicionarLink(Servico objeto) {
		Link linkProprio = WebMvcLinkBuilder
				.linkTo(WebMvcLinkBuilder
						.methodOn(ControleServico.class)
						.obterServicos())
				.withRel("servicos");
		objeto.add(linkProprio);

	}

}
