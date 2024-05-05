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
		//SpringApplication.run(WbbackendApplication.class, args);
	}

	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public RepositorioCliente repositorio;

		@Override
		public void run(ApplicationArguments args) throws Exception {

			//cliente1
			Cliente cliente1 = new Cliente();
			cliente1.setNome("Pedro Alcântara de Bragança e Bourbon");
			cliente1.setNomeSocial("Dom Pedro");
			cliente1.setCpf("532285423-45");
			cliente1.setDataEmissaoCpf("21/10/1994");
			cliente1.setRg("309453852");
			cliente1.setDataEmissaoRg("18/10/1994");
			cliente1.setGenero("Masculino");

			Telefone telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente1.getTelefones().add(telefone);
			repositorio.save(cliente1);

			//cliente2
			Cliente cliente2 = new Cliente();
			cliente2.setNome("Teresa Cristina de Bourbon-Duas Sicílias");
			cliente2.setNomeSocial("Mãe dos Brasileiros");
			cliente2.setCpf("122285423-45");
			cliente2.setDataEmissaoCpf("28/10/1990");
			cliente2.setRg("909253852");
			cliente2.setDataEmissaoRg("10/10/1990");
			cliente2.setGenero("Feminino");
			
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente2.getTelefones().add(telefone);
			repositorio.save(cliente2);

			Cliente cliente3 = new Cliente();
			cliente3.setNome("Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança");
			cliente3.setNomeSocial("Pricesa Isabel");
			cliente3.setCpf("922282421-95");
			cliente3.setDataEmissaoCpf("13/07/2000");
			cliente3.setRg("309453851");
			cliente3.setDataEmissaoRg("28/10/2000");
			cliente3.setGenero("Feminino");

			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente3.getTelefones().add(telefone);
			repositorio.save(cliente3);

			Cliente cliente4 = new Cliente();
			cliente4.setNome("Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias");
			cliente4.setNomeSocial("Pricesa Leopoldina");
			cliente4.setCpf("112285223-45");
			cliente4.setDataEmissaoCpf("21/10/1934");
			cliente4.setRg("509656852");
			cliente4.setDataEmissaoRg("18/10/1934");
			cliente4.setGenero("Feminino");

			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente4.getTelefones().add(telefone);
			repositorio.save(cliente4);

		}
	}
}