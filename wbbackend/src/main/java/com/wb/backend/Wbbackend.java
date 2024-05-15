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
		// SpringApplication.run(Wbbackend.class, args);
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
			produto1.setPreco("49");
			produto1.setGeneroConsumidor("Masculino");
			repositorioProduto.save(produto1);

			// produto2
			Produto produto2 = new Produto();
			produto2.setNome("Gel Modelador");
			produto2.setMarca("Alpha");
			produto2.setPreco("59");
			produto2.setGeneroConsumidor("Masculino");
			repositorioProduto.save(produto2);

			// produto3
			Produto produto3 = new Produto();
			produto3.setNome("Perfume");
			produto3.setMarca("Boticário");
			produto3.setPreco("259");
			produto3.setGeneroConsumidor("Feminino");
			repositorioProduto.save(produto3);

			// produt4
			Produto produto4 = new Produto();
			produto4.setNome("Protetor Solar");
			produto4.setMarca("Nivea Sun");
			produto4.setPreco("39");
			produto4.setGeneroConsumidor("Feminino");
			repositorioProduto.save(produto4);

			// servico1
			Servico servico1 = new Servico();
			servico1.setNome("Corte de Cabelo");
			servico1.setDescricao("Corte Social");
			servico1.setDuracao("45");
			servico1.setPreco("60");
			servico1.setGeneroConsumidor("Masculino");
			repositorioServico.save(servico1);

			// servico2
			Servico servico2 = new Servico();
			servico2.setNome("Manicure");
			servico2.setDescricao("Serviço de beleza para os pés e as mãos");
			servico2.setDuracao("120");
			servico2.setPreco("150");
			servico2.setGeneroConsumidor("Feminino");
			repositorioServico.save(servico2);

			// servico3
			Servico servico3 = new Servico();
			servico3.setNome("Massagem");
			servico3.setDescricao("Serviço de relaxamento muscular de alta qualidade");
			servico3.setDuracao("90");
			servico3.setPreco("250");
			servico3.setGeneroConsumidor("Feminino");
			repositorioServico.save(servico3);

			// servico4
			Servico servico4 = new Servico();
			servico4.setNome("Limpeza de pele");
			servico4.setDescricao("Serviço de limpeza das impurezas do rosto");
			servico4.setDuracao("60");
			servico4.setPreco("180");
			servico4.setGeneroConsumidor("Feminino");
			repositorioServico.save(servico4);

			//serviços associados ao cliente - 1
			ServicosConsumidos servicoConsumido1 = new ServicosConsumidos();
			servicoConsumido1.setCliente(cliente1); 
			servicoConsumido1.setNome(servico1.getNome());
			servicoConsumido1.setPreco(servico1.getPreco());
			servicoConsumido1.setQuantidade(1); 
			cliente1.getServicosConsumidos().add(servicoConsumido1);

			ServicosConsumidos servicoConsumido2 = new ServicosConsumidos();
			servicoConsumido2.setCliente(cliente1); 
			servicoConsumido2.setNome(servico2.getNome());
			servicoConsumido2.setPreco(servico2.getPreco());
			servicoConsumido2.setQuantidade(1); 
			cliente1.getServicosConsumidos().add(servicoConsumido2);

			//produtos associados ao cliente - 1
			ProdutosConsumidos produtoConsumido1 = new ProdutosConsumidos();
			produtoConsumido1.setCliente(cliente1);
			produtoConsumido1.setNome(produto1.getNome());
			produtoConsumido1.setPreco(produto1.getPreco());
			produtoConsumido1.setQuantidade(1);
			cliente1.getProdutosConsumidos().add(produtoConsumido1);
			
			ProdutosConsumidos produtoConsumido2 = new ProdutosConsumidos();
			produtoConsumido2.setCliente(cliente1);
			produtoConsumido2.setNome(produto2.getNome());
			produtoConsumido2.setPreco(produto2.getPreco());
			produtoConsumido2.setQuantidade(1);
			cliente1.getProdutosConsumidos().add(produtoConsumido2);

			repositorioCliente.save(cliente1);


			//serviços associados ao cliente - 2
			ServicosConsumidos servicoConsumido3 = new ServicosConsumidos();
			servicoConsumido3.setCliente(cliente2); 
			servicoConsumido3.setNome(servico3.getNome());
			servicoConsumido3.setPreco(servico3.getPreco());
			servicoConsumido3.setQuantidade(1); 
			cliente2.getServicosConsumidos().add(servicoConsumido3);

			ServicosConsumidos servicoConsumido4 = new ServicosConsumidos();
			servicoConsumido4.setCliente(cliente2); 
			servicoConsumido4.setNome(servico4.getNome());
			servicoConsumido4.setPreco(servico4.getPreco());
			servicoConsumido4.setQuantidade(1); 
			cliente2.getServicosConsumidos().add(servicoConsumido4);

			//produtos associados ao cliente - 2
			ProdutosConsumidos produtoConsumido3 = new ProdutosConsumidos();
			produtoConsumido3.setCliente(cliente2);
			produtoConsumido3.setNome(produto3.getNome());
			produtoConsumido3.setPreco(produto3.getPreco());
			produtoConsumido3.setQuantidade(2);
			cliente2.getProdutosConsumidos().add(produtoConsumido3);
			
			ProdutosConsumidos produtoConsumido4= new ProdutosConsumidos();
			produtoConsumido4.setCliente(cliente2);
			produtoConsumido4.setNome(produto4.getNome());
			produtoConsumido4.setPreco(produto4.getPreco());
			produtoConsumido4.setQuantidade(1);
			cliente2.getProdutosConsumidos().add(produtoConsumido4);

			repositorioCliente.save(cliente2);


			//serviços associados ao cliente - 3
			ServicosConsumidos servicoConsumido5 = new ServicosConsumidos();
			servicoConsumido5.setCliente(cliente3); 
			servicoConsumido5.setNome(servico1.getNome());
			servicoConsumido5.setPreco(servico1.getPreco());
			servicoConsumido5.setQuantidade(3); 
			cliente3.getServicosConsumidos().add(servicoConsumido5);

			ServicosConsumidos servicoConsumido6 = new ServicosConsumidos();
			servicoConsumido6.setCliente(cliente3); 
			servicoConsumido6.setNome(servico2.getNome());
			servicoConsumido6.setPreco(servico2.getPreco());
			servicoConsumido6.setQuantidade(1); 
			cliente3.getServicosConsumidos().add(servicoConsumido6);

			//produtos associados ao cliente - 3
			ProdutosConsumidos produtoConsumido5 = new ProdutosConsumidos();
			produtoConsumido5.setCliente(cliente3);
			produtoConsumido5.setNome(produto1.getNome());
			produtoConsumido5.setPreco(produto1.getPreco());
			produtoConsumido5.setQuantidade(2);
			cliente3.getProdutosConsumidos().add(produtoConsumido5);
			
			ProdutosConsumidos produtoConsumido6 = new ProdutosConsumidos();
			produtoConsumido6.setCliente(cliente3);
			produtoConsumido6.setNome(produto2.getNome());
			produtoConsumido6.setPreco(produto2.getPreco());
			produtoConsumido6.setQuantidade(1);
			cliente3.getProdutosConsumidos().add(produtoConsumido6);

			repositorioCliente.save(cliente3);
		}
	}
}