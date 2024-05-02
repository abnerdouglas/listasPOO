package com.wb.wbbackend;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Endereco;
import com.wb.wbbackend.entidades.Telefone;
import com.wb.wbbackend.repositorios.RepositorioCliente;

@SpringBootApplication
public class WbbackendApplication {

	public static void main(String[] args) {
		// Propriedades
		Map<String,Object> propriedades = new HashMap<>();
		propriedades.put("server.port", "32832");
		propriedades.put("spring.jpa.show-sql", "true");
		
		// Inicialização de propriedades em código
		SpringApplication app = new SpringApplication(WbbackendApplication.class);
		app.setDefaultProperties(propriedades);
        app.run(args);
        
        // Forma padrão para iniciar a aplicação
		SpringApplication.run(WbbackendApplication.class, args);
	}

	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public RepositorioCliente repositorio;

		@Override
		public void run(ApplicationArguments args) throws Exception {
			Cliente cliente = new Cliente();
			cliente.setNome("Pedro Alcântara de Bragança e Bourbon");
			cliente.setSobreNome("Dom Pedro");
			cliente.setEmail("pedro.alcantara@gmail.com");

			Endereco endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente.setEndereco(endereco);
			Telefone telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente.getTelefones().add(telefone);
			repositorio.save(cliente);

			Cliente cliente2 = new Cliente();
			cliente2.setNome("Teresa Cristina de Bourbon-Duas Sicílias");
			cliente2.setSobreNome("Mãe dos Brasileiros");
			cliente2.setEmail("teresa.cristina@gmail.com");

			endereco = new Endereco();
			endereco.setCidade("Ipanema");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Rua Visconde de Pirajá");
			endereco.setNumero("289");
			endereco.setCodigoPostal("04277-020");
			endereco.setInformacoesAdicionais("A rua Visconde de Pirajá começa na esquina da Rua Canning com Gomes Carneiro e termina na Avenida Epitácio Pessoa no Jardim de Alah.");

			cliente2.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("34252425");
			cliente2.getTelefones().add(telefone);
			repositorio.save(cliente2);

			Cliente cliente3 = new Cliente();
			cliente3.setNome("Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança");
			cliente3.setSobreNome("Pricesa Isabel");
			cliente3.setEmail("princesa.isabel@gmail.com");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente3.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("22");
			telefone.setNumero("34750934");
			cliente3.getTelefones().add(telefone);
			repositorio.save(cliente3);

			Cliente cliente4 = new Cliente();
			cliente4.setNome("Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias");
			cliente4.setSobreNome("Pricesa Leopoldina");
			cliente4.setEmail("princesa.leopoldina@gmail.com");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente4.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("12");
			telefone.setNumero("39904712");
			cliente4.getTelefones().add(telefone);
			repositorio.save(cliente4);

		}
	}
}