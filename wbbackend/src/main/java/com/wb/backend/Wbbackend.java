package com.wb.backend;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.wb.backend.entidades.Cliente;
import com.wb.backend.entidades.ServicosConsumidos;
import com.wb.backend.entidades.Produto;
import com.wb.backend.entidades.ProdutosConsumidos;
import com.wb.backend.entidades.Servico;
import com.wb.backend.entidades.Telefone;
import com.wb.backend.repositorios.RepositorioCliente;
import com.wb.backend.repositorios.RepositorioProduto;
import com.wb.backend.repositorios.RepositorioServico;

@SpringBootApplication
public class Wbbackend {

	public static void main(String[] args) {
		// Propriedades
		Map<String, Object> propriedades = new HashMap<>();
		propriedades.put("server.port", "32832");
		propriedades.put("spring.jpa.show-sql", "true");

		// Inicialização de propriedades em código
		SpringApplication app = new SpringApplication(Wbbackend.class);
		app.setDefaultProperties(propriedades);
		app.run(args);

		// Forma padrão para iniciar a aplicação
		// SpringApplication.run(Backend.class, args);
	}

	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public RepositorioCliente repositorioCliente;

		@Autowired
		public RepositorioProduto repositorioProduto;

		@Autowired
		public RepositorioServico repositorioServico;

		@Override
		public void run(ApplicationArguments args) throws Exception {

			// cliente1
			Cliente cliente1 = new Cliente();
			cliente1.setNome("Pedro Alcântara");
			cliente1.setNomeSocial("Dom Pedro");
			cliente1.setCpf("532.285.423-45");
			cliente1.setDataEmissaoCpf("21/10/1994");
			cliente1.setRg("30.945.385-2");
			cliente1.setDataEmissaoRg("18/10/1994");
			cliente1.setGenero("Masculino");
			Telefone telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente1.getTelefones().add(telefone);
			repositorioCliente.save(cliente1);

			// cliente2
			Cliente cliente2 = new Cliente();
			cliente2.setNome("Teresa Cristina");
			cliente2.setNomeSocial("Mãe dos Brasileiros");
			cliente2.setCpf("122.285.423-45");
			cliente2.setDataEmissaoCpf("28/10/1990");
			cliente2.setRg("90.925.385-2");
			cliente2.setDataEmissaoRg("10/10/1990");
			cliente2.setGenero("Feminino");
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente2.getTelefones().add(telefone);
			repositorioCliente.save(cliente2);

			// cliente3
			Cliente cliente3 = new Cliente();
			cliente3.setNome("Isabel Cristina");
			cliente3.setNomeSocial("Pricesa Isabel");
			cliente3.setCpf("922.282.421-95");
			cliente3.setDataEmissaoCpf("13/07/2000");
			cliente3.setRg("30.945.385-1");
			cliente3.setDataEmissaoRg("28/10/2000");
			cliente3.setGenero("Feminino");
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente3.getTelefones().add(telefone);
			repositorioCliente.save(cliente3);

			// cliente4
			Cliente cliente4 = new Cliente();
			cliente4.setNome("Leopoldina Teresa");
			cliente4.setNomeSocial("Pricesa Leopoldina");
			cliente4.setCpf("112.285.223-45");
			cliente4.setDataEmissaoCpf("21/10/1934");
			cliente4.setRg("50.965.685-2");
			cliente4.setDataEmissaoRg("18/10/1934");
			cliente4.setGenero("Feminino");
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente4.getTelefones().add(telefone);
			repositorioCliente.save(cliente4);

			// produto1
			Produto produto1 = new Produto();
			produto1.setNome("Shampoo");
			produto1.setMarca("Dove");
			produto1.setPreco(49);
			produto1.setGeneroConsumidor("Masculino");
			produto1.setQuantidadeConsumida(10);
			repositorioProduto.save(produto1);

			// produto2
			Produto produto2 = new Produto();
			produto2.setNome("Gel Modelador");
			produto2.setMarca("Alpha");
			produto2.setPreco(59);
			produto2.setGeneroConsumidor("Masculino");
			produto2.setQuantidadeConsumida(15);
			repositorioProduto.save(produto2);

			// produto3
			Produto produto3 = new Produto();
			produto3.setNome("Perfume");
			produto3.setMarca("Boticário");
			produto3.setPreco(259);
			produto3.setGeneroConsumidor("Feminino");
			produto3.setQuantidadeConsumida(5);
			repositorioProduto.save(produto3);

			// produt4
			Produto produto4 = new Produto();
			produto4.setNome("Protetor Solar");
			produto4.setMarca("Nivea Sun");
			produto4.setPreco(39);
			produto4.setGeneroConsumidor("Feminino");
			produto4.setQuantidadeConsumida(20);
			repositorioProduto.save(produto4);

			// servico1
			Servico servico1 = new Servico();
			servico1.setNome("Corte de Cabelo");
			servico1.setDescricao("Corte Social");
			servico1.setDuracao("45");
			servico1.setPreco(60);
			servico1.setGeneroConsumidor("Masculino");
			servico1.setQuantidadeConsumida(5);
			repositorioServico.save(servico1);

			// servico2
			Servico servico2 = new Servico();
			servico2.setNome("Manicure");
			servico2.setDescricao("Serviço de beleza para os pés e as mãos");
			servico2.setDuracao("120");
			servico2.setPreco(150);
			servico2.setGeneroConsumidor("Feminino");
			servico2.setQuantidadeConsumida(10);
			repositorioServico.save(servico2);

			// servico3
			Servico servico3 = new Servico();
			servico3.setNome("Massagem");
			servico3.setDescricao("Serviço de relaxamento muscular de alta qualidade");
			servico3.setDuracao("90");
			servico3.setPreco(250);
			servico3.setGeneroConsumidor("Feminino");
			servico3.setQuantidadeConsumida(25);
			repositorioServico.save(servico3);

			// servico4
			Servico servico4 = new Servico();
			servico4.setNome("Limpeza de pele");
			servico4.setDescricao("Serviço de limpeza das impurezas do rosto");
			servico4.setDuracao("60");
			servico4.setPreco(180);
			servico4.setGeneroConsumidor("Feminino");
			servico4.setQuantidadeConsumida(18);
			repositorioServico.save(servico4);

			//produtos e serviços associados ao cliente
			ServicosConsumidos servicosConsumidos = new ServicosConsumidos();
			servicosConsumidos.setCliente(cliente1); 
			servicosConsumidos.setServico(servico1);
			servicosConsumidos.setQuantidade(1); 
			cliente1.getServicosConsumidos().add(servicosConsumidos);

			ProdutosConsumidos produtosConsumidos = new ProdutosConsumidos();
			produtosConsumidos.setCliente(cliente1);
			produtosConsumidos.setProduto(produto1);
			produtosConsumidos.setQuantidade(1);
			cliente1.getProdutosConsumidos().add(produtosConsumidos);
			repositorioCliente.save(cliente1);
		}
	}
}