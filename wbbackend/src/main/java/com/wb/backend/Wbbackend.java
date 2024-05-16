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

			// 30 CLIENTES

			Cliente cliente1 = new Cliente("Pedro Alcântara", "Dom Pedro", "532.285.423-45", "21/10/1994", "30.945.385-2", "18/10/1994", "Masculino", "21", "92340-2312");
			repositorioCliente.save(cliente1);

			Cliente cliente2 = new Cliente("Teresa Cristina", "Mãe dos Brasileiros", "122.285.423-45", "28/10/1990", "90.925.385-2", "10/10/1990", "Feminino", "21", "97230-2113");
			repositorioCliente.save(cliente2);

			Cliente cliente3 = new Cliente("Isabel Cristina", "Princesa Isabel", "922.282.421-95", "13/07/2000", "30.945.385-1", "28/10/2000", "Feminino", "21", "91237-1023");
			repositorioCliente.save(cliente3);

			Cliente cliente4 = new Cliente("Leopoldina Teresa", "Princesa Leopoldina", "112.285.223-45", "21/10/1934", "50.985.685-2", "18/10/1934", "Feminino", "21", "97123-1020");
			repositorioCliente.save(cliente4);
			
			Cliente cliente5 = new Cliente("João Silva", "Joãozinho", "123.456.789-00", "10/05/1980", "987654321", "05/05/1995", "Masculino", "21", "98765-4321");
			repositorioCliente.save(cliente5);

			Cliente cliente6 = new Cliente("Maria Oliveira", "Mariinha", "987.654.321-00", "15/08/1985", "123456789", "10/10/2000", "Feminino", "21", "91234-5678");
			repositorioCliente.save(cliente6);

			Cliente cliente7 = new Cliente("José Santos", "Zé", "987.123.654-00", "20/03/1975", "654987321", "15/07/1990", "Masculino", "21", "97654-3210");
			repositorioCliente.save(cliente7);

			Cliente cliente8 = new Cliente("Ana Costa", "Aninha", "456.789.123-00", "25/12/1990", "987654123", "20/02/2005", "Feminino", "21", "92345-6789");
			repositorioCliente.save(cliente8);

			Cliente cliente9 = new Cliente("Carlos Pereira", "Carlão", "654.321.987-00", "30/09/1983", "321987654", "25/06/1998", "Masculino", "21", "93456-7890");
			repositorioCliente.save(cliente9);

			Cliente cliente10 = new Cliente("Sandra Oliveira", "Sandrinha", "159.753.258-00", "05/06/1978", "987654321", "30/03/1992", "Feminino", "21", "94567-8901");
			repositorioCliente.save(cliente10);

			Cliente cliente11 = new Cliente("Antônio Silva", "Toninho", "753.951.852-00", "10/11/1965", "123456789", "05/09/1980", "Masculino", "21", "95678-9012");
			repositorioCliente.save(cliente11);

			Cliente cliente12 = new Cliente("Fernanda Souza", "Nanda", "852.369.741-00", "15/04/1987", "654987321", "10/12/2002", "Feminino", "21", "96789-0123");
			repositorioCliente.save(cliente12);

			Cliente cliente13 = new Cliente("Ricardo Santos", "Ricardinho", "369.852.741-00", "20/08/1972", "987654123", "15/01/1995", "Masculino", "21", "97890-1234");
			repositorioCliente.save(cliente13);

			Cliente cliente14 = new Cliente("Mariana Lima", "Mari", "258.963.147-00", "25/02/1989", "321987654", "20/05/2000", "Feminino", "21", "98901-2345");
			repositorioCliente.save(cliente14);

			Cliente cliente15 = new Cliente("Paulo Oliveira", "Paulinho", "963.741.852-00", "30/07/1977", "987654321", "25/08/1993", "Masculino", "21", "90012-3456");
			repositorioCliente.save(cliente15);

			Cliente cliente16 = new Cliente("Carla Silva", "Carlinha", "147.258.369-00", "05/01/1984", "123456789", "30/11/1997", "Feminino", "21", "91234-5678");
			repositorioCliente.save(cliente16);

			Cliente cliente17 = new Cliente("Marcos Santos", "Marquinhos", "852.741.963-00", "10/06/1969", "654987321", "05/04/1984", "Masculino", "21", "93456-7890");
			repositorioCliente.save(cliente17);

			Cliente cliente18 = new Cliente("Patrícia Costa", "Paty", "369.147.258-00", "15/09/1981", "987654123", "10/02/1996", "Feminino", "21", "94567-8901");
			repositorioCliente.save(cliente18);

			Cliente cliente19 = new Cliente("Daniel Oliveira", "Dani", "741.852.963-00", "20/12/1974", "321987654", "15/07/1989", "Masculino", "21", "95678-9012");
			repositorioCliente.save(cliente19);

			Cliente cliente20 = new Cliente("Laura Pereira", "Laurinha", "963.852.741-00", "25/03/1992", "987654321", "20/06/2004", "Feminino", "21", "96789-0123");
			repositorioCliente.save(cliente20);

			Cliente cliente21 = new Cliente("Gustavo Souza", "Guto", "258.369.147-00", "30/08/1976", "123456789", "25/05/1991", "Masculino", "21", "97890-1234");
			repositorioCliente.save(cliente21);

			Cliente cliente22 = new Cliente("Juliana Lima", "Ju", "147.963.852-00", "05/02/1980", "654987321", "30/09/1994", "Feminino", "21", "98901-2345");
			repositorioCliente.save(cliente22);

			Cliente cliente23 = new Cliente("Rodrigo Oliveira", "Digo", "369.741.852-00", "10/07/1973", "987654123", "05/12/1988", "Masculino", "21", "90012-3456");
			repositorioCliente.save(cliente23);

			Cliente cliente24 = new Cliente("Cristina Silva", "Cris", "852.963.741-00", "15/12/1986", "321987654", "10/02/2001", "Feminino", "21", "91230-2360");
			repositorioCliente.save(cliente24);

			Cliente cliente25 = new Cliente("Fabio Santos", "Fabinho", "444.555.666-77", "22/10/1990", "77.88.99-00", "22/10/2000", "Masculino", "21", "92230-2361");
			repositorioCliente.save(cliente25);

			Cliente cliente26 = new Cliente("Larissa Oliveira", "Lari", "333.222.111-00", "23/11/1995", "11.22.33-44", "23/11/2005", "Feminino", "21", "93230-2362");
			repositorioCliente.save(cliente26);

			Cliente cliente27 = new Cliente("Rafael Pereira", "Rafa", "222.333.444-55", "24/12/1980", "44.55.66-77", "24/12/1990", "Masculino", "21", "94230-2363");
			repositorioCliente.save(cliente27);

			Cliente cliente28 = new Cliente("Camila Lima", "Camis", "111.222.333-44", "25/01/1985", "55.66.77-88", "25/01/1995", "Feminino", "21", "95230-2364");
			repositorioCliente.save(cliente28);

			Cliente cliente29 = new Cliente("Lucas Oliveira", "Lu", "777.888.999-00", "26/02/1992", "77.88.99-00", "26/02/2002", "Masculino", "21", "96230-2365");
			repositorioCliente.save(cliente29);

			Cliente cliente30 = new Cliente("Aline Santos", "Li", "999.888.777-66", "27/03/1987", "99.88.77-66", "27/03/1997", "Feminino", "21", "97230-2366");
			repositorioCliente.save(cliente30);


			// 20 PRODUTOS

			Produto produto1 = new Produto("Shampoo Pantene Hidratação", "Pantene", "25.99");
			repositorioProduto.save(produto1);

			Produto produto2 = new Produto("Condicionador Tresemmé Reconstrução", "Tresemmé", "19.99");
			repositorioProduto.save(produto2);

			Produto produto3 = new Produto("Creme Facial Nivea", "Nivea", "39.90");
			repositorioProduto.save(produto3);

			Produto produto4 = new Produto("Perfume Gabriela Sabatini", "Gabriela Sabatini", "99.99");
			repositorioProduto.save(produto4);

			Produto produto5 = new Produto("Protetor Solar Sundown FPS 50", "Sundown", "29.90");
			repositorioProduto.save(produto5);

			Produto produto6 = new Produto("Hidratante Corporal Neutrogena", "Neutrogena", "34.90");
			repositorioProduto.save(produto6);

			Produto produto7 = new Produto("Shampoo Johnson's Baby", "Johnson & Johnson", "12.99");
			repositorioProduto.save(produto7);

			Produto produto8 = new Produto("Condicionador Dove Reconstrução Completa", "Dove", "17.50");
			repositorioProduto.save(produto8);

			Produto produto9 = new Produto("Gel de Limpeza Facial Neutrogena", "Neutrogena", "22.90");
			repositorioProduto.save(produto9);

			Produto produto10 = new Produto("Perfume Calvin Klein Eternity", "Calvin Klein", "199.99");
			repositorioProduto.save(produto10);

			Produto produto11 = new Produto("Protetor Solar Banana Boat FPS 70", "Banana Boat", "39.90");
			repositorioProduto.save(produto11);

			Produto produto12 = new Produto("Creme para Mãos Granado Pink", "Granado", "9.99");
			repositorioProduto.save(produto12);

			Produto produto13 = new Produto("Shampoo Seda Recarga Natural", "Seda", "10.99");
			repositorioProduto.save(produto13);

			Produto produto14 = new Produto("Condicionador Elsève Reparação Total 5", "L'Oréal", "15.90");
			repositorioProduto.save(produto14);

			Produto produto15 = new Produto("Hidratante Facial Natura Chronos", "Natura", "59.90");
			repositorioProduto.save(produto15);

			Produto produto16 = new Produto("Perfume Carolina Herrera Good Girl", "Carolina Herrera", "349.90");
			repositorioProduto.save(produto16);

			Produto produto17 = new Produto("Protetor Solar La Roche-Posay Anthelios", "La Roche-Posay", "59.90");
			repositorioProduto.save(produto17);

			Produto produto18 = new Produto("Sabonete Líquido Dove Original", "Dove", "7.99");
			repositorioProduto.save(produto18);

			Produto produto19 = new Produto("Máscara Capilar Pantene Hidro-Cauterização", "Pantene", "19.99");
			repositorioProduto.save(produto19);

			Produto produto20 = new Produto("Gel de Barbear Gillette Mach3", "Gillette", "12.90");
			repositorioProduto.save(produto20);


			// 20 SERVIÇOS

			Servico servico1 = new Servico("Corte de Cabelo", "Corte Social para todas as idades", "45", "60");
			repositorioServico.save(servico1);

			Servico servico2 = new Servico("Manicure", "Manicure profissional para unhas", "60", "40");
			repositorioServico.save(servico2);

			Servico servico3 = new Servico("Pedicure", "Pedicure profissional para pés", "60", "50");
			repositorioServico.save(servico3);

			Servico servico4 = new Servico("Coloração de Cabelo", "Coloração personalizada", "120", "150");
			repositorioServico.save(servico4);

			Servico servico5 = new Servico("Escova Progressiva", "Alisamento e tratamento capilar", "180", "200");
			repositorioServico.save(servico5);

			Servico servico6 = new Servico("Design de Sobrancelhas", "Design de sobrancelhas personalizado", "30", "50");
			repositorioServico.save(servico6);

			Servico servico7 = new Servico("Limpeza de Pele", "Limpeza facial profunda", "60", "80");
			repositorioServico.save(servico7);

			Servico servico8 = new Servico("Massagem Relaxante", "Massagem relaxante de corpo inteiro", "60", "100");
			repositorioServico.save(servico8);

			Servico servico9 = new Servico("Banho de Lua", "Clareamento dos pelos do corpo", "90", "120");
			repositorioServico.save(servico9);

			Servico servico10 = new Servico("Depilação", "Depilação corporal completa", "90", "150");
			repositorioServico.save(servico10);

			Servico servico11 = new Servico("Tratamento Capilar", "Tratamento intensivo para cabelos danificados", "90", "120");
			repositorioServico.save(servico11);

			Servico servico12 = new Servico("Maquiagem Profissional", "Maquiagem para eventos especiais", "60", "100");
			repositorioServico.save(servico12);

			Servico servico13 = new Servico("Alongamento de Unhas", "Alongamento de unhas em gel", "120", "200");
			repositorioServico.save(servico13);

			Servico servico14 = new Servico("Peeling Facial", "Tratamento para rejuvenescimento facial", "45", "80");
			repositorioServico.save(servico14);

			Servico servico15 = new Servico("Reflexologia", "Massagem terapêutica nos pés", "30", "50");
			repositorioServico.save(servico15);

			Servico servico16 = new Servico("Drenagem Linfática", "Massagem para redução de retenção de líquidos", "60", "90");
			repositorioServico.save(servico16);

			Servico servico17 = new Servico("Micropigmentação", "Maquiagem definitiva para sobrancelhas", "90", "150");
			repositorioServico.save(servico17);

			Servico servico18 = new Servico("Peeling de Diamante", "Tratamento para renovação da pele", "45", "80");
			repositorioServico.save(servico18);

			Servico servico19 = new Servico("Design de Barba", "Design de barba personalizado", "30", "50");
			repositorioServico.save(servico19);

			Servico servico20 = new Servico("Spa dos Pés", "Tratamento relaxante para os pés", "30", "60");
			repositorioServico.save(servico20);

			
			//SERVIÇOS CONSUMIDOS

			ServicosConsumidos servicoConsumido1 = new ServicosConsumidos(cliente1, servico1.getNome(), servico1.getPreco(), 1);
			cliente1.getServicosConsumidos().add(servicoConsumido1);
			repositorioCliente.save(cliente1);


			// ServicosConsumidos servicoConsumido2 = new ServicosConsumidos();
			// servicoConsumido2.setCliente(cliente1); 
			// servicoConsumido2.setNome(servico2.getNome());
			// servicoConsumido2.setPreco(servico2.getPreco());
			// servicoConsumido2.setQuantidade(1); 
			// cliente1.getServicosConsumidos().add(servicoConsumido2);

			// ProdutosConsumidos produtoConsumido1 = new ProdutosConsumidos();
			// produtoConsumido1.setCliente(cliente1);
			// produtoConsumido1.setNome(produto1.getNome());
			// produtoConsumido1.setPreco(produto1.getPreco());
			// produtoConsumido1.setQuantidade(1);
			// cliente1.getProdutosConsumidos().add(produtoConsumido1);
			
			// ProdutosConsumidos produtoConsumido2 = new ProdutosConsumidos();
			// produtoConsumido2.setCliente(cliente1);
			// produtoConsumido2.setNome(produto2.getNome());
			// produtoConsumido2.setPreco(produto2.getPreco());
			// produtoConsumido2.setQuantidade(1);
			// cliente1.getProdutosConsumidos().add(produtoConsumido2);

			// repositorioCliente.save(cliente1);


			// //serviços associados ao cliente - 2
			// ServicosConsumidos servicoConsumido3 = new ServicosConsumidos();
			// servicoConsumido3.setCliente(cliente2); 
			// servicoConsumido3.setNome(servico3.getNome());
			// servicoConsumido3.setPreco(servico3.getPreco());
			// servicoConsumido3.setQuantidade(1); 
			// cliente2.getServicosConsumidos().add(servicoConsumido3);

			// ServicosConsumidos servicoConsumido4 = new ServicosConsumidos();
			// servicoConsumido4.setCliente(cliente2); 
			// servicoConsumido4.setNome(servico4.getNome());
			// servicoConsumido4.setPreco(servico4.getPreco());
			// servicoConsumido4.setQuantidade(1); 
			// cliente2.getServicosConsumidos().add(servicoConsumido4);

			// //produtos associados ao cliente - 2
			// ProdutosConsumidos produtoConsumido3 = new ProdutosConsumidos();
			// produtoConsumido3.setCliente(cliente2);
			// produtoConsumido3.setNome(produto3.getNome());
			// produtoConsumido3.setPreco(produto3.getPreco());
			// produtoConsumido3.setQuantidade(2);
			// cliente2.getProdutosConsumidos().add(produtoConsumido3);
			
			// ProdutosConsumidos produtoConsumido4= new ProdutosConsumidos();
			// produtoConsumido4.setCliente(cliente2);
			// produtoConsumido4.setNome(produto4.getNome());
			// produtoConsumido4.setPreco(produto4.getPreco());
			// produtoConsumido4.setQuantidade(1);
			// cliente2.getProdutosConsumidos().add(produtoConsumido4);

			// repositorioCliente.save(cliente2);


			// //serviços associados ao cliente - 3
			// ServicosConsumidos servicoConsumido5 = new ServicosConsumidos();
			// servicoConsumido5.setCliente(cliente3); 
			// servicoConsumido5.setNome(servico1.getNome());
			// servicoConsumido5.setPreco(servico1.getPreco());
			// servicoConsumido5.setQuantidade(3); 
			// cliente3.getServicosConsumidos().add(servicoConsumido5);

			// ServicosConsumidos servicoConsumido6 = new ServicosConsumidos();
			// servicoConsumido6.setCliente(cliente3); 
			// servicoConsumido6.setNome(servico2.getNome());
			// servicoConsumido6.setPreco(servico2.getPreco());
			// servicoConsumido6.setQuantidade(1); 
			// cliente3.getServicosConsumidos().add(servicoConsumido6);

			// //produtos associados ao cliente - 3
			// ProdutosConsumidos produtoConsumido5 = new ProdutosConsumidos();
			// produtoConsumido5.setCliente(cliente3);
			// produtoConsumido5.setNome(produto1.getNome());
			// produtoConsumido5.setPreco(produto1.getPreco());
			// produtoConsumido5.setQuantidade(2);
			// cliente3.getProdutosConsumidos().add(produtoConsumido5);
			
			// ProdutosConsumidos produtoConsumido6 = new ProdutosConsumidos();
			// produtoConsumido6.setCliente(cliente3);
			// produtoConsumido6.setNome(produto2.getNome());
			// produtoConsumido6.setPreco(produto2.getPreco());
			// produtoConsumido6.setQuantidade(1);
			// cliente3.getProdutosConsumidos().add(produtoConsumido6);

			// repositorioCliente.save(cliente3);
		}
	}
}