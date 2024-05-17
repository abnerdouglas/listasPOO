package com.wb.backend;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

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

			 // Criação de 30 clientes
			 List<Cliente> clientes = List.of(
                new Cliente("Pedro Alcântara", "Dom Pedro", "532.285.423-45", "21/10/1994", "30.945.385-2", "18/10/1994", "Masculino", "21", "92340-2312"),
                new Cliente("Teresa Cristina", "Mãe dos Brasileiros", "122.285.423-45", "28/10/1990", "90.925.385-2", "10/10/1990", "Feminino", "21", "97230-2113"),
                new Cliente("Isabel Cristina", "Princesa Isabel", "922.282.421-95", "13/07/2000", "30.945.385-1", "28/10/2000", "Feminino", "21", "91237-1023"),
				new Cliente("Leopoldina Teresa", "Princesa Leopoldina", "112.285.223-45", "21/10/1934", "50.985.685-2", "18/10/1934", "Feminino", "21", "97123-1020"),
				new Cliente("João Silva", "Joãozinho", "123.456.789-00", "10/05/1980", "987654321", "05/05/1995", "Masculino", "21", "98765-4321"),
				new Cliente("Maria Oliveira", "Mariinha", "987.654.321-00", "15/08/1985", "123456789", "10/10/2000", "Feminino", "21", "91234-5678"),
				new Cliente("José Santos", "Zé", "987.123.654-00", "20/03/1975", "654987321", "15/07/1990", "Masculino", "21", "97654-3210"),
				new Cliente("Ana Costa", "Aninha", "456.789.123-00", "25/12/1990", "987654123", "20/02/2005", "Feminino", "21", "92345-6789"),
				new Cliente("Carlos Pereira", "Carlão", "654.321.987-00", "30/09/1983", "321987654", "25/06/1998", "Masculino", "21", "93456-7890"),
				new Cliente("Sandra Oliveira", "Sandrinha", "159.753.258-00", "05/06/1978", "987654321", "30/03/1992", "Feminino", "21", "94567-8901"),
				new Cliente("Antônio Silva", "Toninho", "753.951.852-00", "10/11/1965", "123456789", "05/09/1980", "Masculino", "21", "95678-9012"),
				new Cliente("Fernanda Souza", "Nanda", "852.369.741-00", "15/04/1987", "654987321", "10/12/2002", "Feminino", "21", "96789-0123"),
				new Cliente("Ricardo Santos", "Ricardinho", "369.852.741-00", "20/08/1972", "987654123", "15/01/1995", "Masculino", "21", "97890-1234"),
				new Cliente("Mariana Lima", "Mari", "258.963.147-00", "25/02/1989", "321987654", "20/05/2000", "Feminino", "21", "98901-2345"),
				new Cliente("Paulo Oliveira", "Paulinho", "963.741.852-00", "30/07/1977", "987654321", "25/08/1993", "Masculino", "21", "90012-3456"),
				new Cliente("Carla Silva", "Carlinha", "147.258.369-00", "05/01/1984", "123456789", "30/11/1997", "Feminino", "21", "91234-5678"),
				new Cliente("Marcos Santos", "Marquinhos", "852.741.963-00", "10/06/1969", "654987321", "05/04/1984", "Masculino", "21", "93456-7890"),
				new Cliente("Patrícia Costa", "Paty", "369.147.258-00", "15/09/1981", "987654123", "10/02/1996", "Feminino", "21", "94567-8901"),
				new Cliente("Daniel Oliveira", "Dani", "741.852.963-00", "20/12/1974", "321987654", "15/07/1989", "Masculino", "21", "95678-9012"),
				new Cliente("Laura Pereira", "Laurinha", "963.852.741-00", "25/03/1992", "987654321", "20/06/2004", "Feminino", "21", "96789-0123"),
				new Cliente("Gustavo Souza", "Guto", "258.369.147-00", "30/08/1976", "123456789", "25/05/1991", "Masculino", "21", "97890-1234"),
				new Cliente("Juliana Lima", "Ju", "147.963.852-00", "05/02/1980", "654987321", "30/09/1994", "Feminino", "21", "98901-2345"),
				new Cliente("Rodrigo Oliveira", "Digo", "369.741.852-00", "10/07/1973", "987654123", "05/12/1988", "Masculino", "21", "90012-3456"),
				new Cliente("Cristina Silva", "Cris", "852.963.741-00", "15/12/1986", "321987654", "10/02/2001", "Feminino", "21", "91230-2360"),
				new Cliente("Fabio Santos", "Fabinho", "444.555.666-77", "22/10/1990", "77.88.99-00", "22/10/2000", "Masculino", "21", "92230-2361"),
				new Cliente("Larissa Oliveira", "Lari", "333.222.111-00", "23/11/1995", "11.22.33-44", "23/11/2005", "Feminino", "21", "93230-2362"),
				new Cliente("Rafael Pereira", "Rafa", "222.333.444-55", "24/12/1980", "44.55.66-77", "24/12/1990", "Masculino", "21", "94230-2363"),
				new Cliente("Camila Lima", "Camis", "111.222.333-44", "25/01/1985", "55.66.77-88", "25/01/1995", "Feminino", "21", "95230-2364"),
				new Cliente("Lucas Oliveira", "Lu", "777.888.999-00", "26/02/1992", "77.88.99-00", "26/02/2002", "Masculino", "21", "96230-2365"),
				new Cliente("Aline Santos", "Li", "999.888.777-66", "27/03/1987", "99.88.77-66", "27/03/1997", "Feminino", "21", "97230-2366")
			);

            repositorioCliente.saveAll(clientes);

            // Criação de 20 produtos
            List<Produto> produtos = List.of(
                new Produto("Shampoo Pantene Hidratação", "Pantene", "25.90"),
                new Produto("Condicionador Tresemmé Reconstrução", "Tresemmé", "19.90"),
				new Produto("Creme Facial Nivea", "Nivea", "39.90"),
				new Produto("Perfume Gabriela Sabatini", "Gabriela Sabatini", "99.99"),
				new Produto("Protetor Solar Sundown FPS 50", "Sundown", "29.90"),
				new Produto("Hidratante Corporal Neutrogena", "Neutrogena", "34.90"),
				new Produto("Shampoo Johnson's Baby", "Johnson & Johnson", "12.99"),
				new Produto("Condicionador Dove Reconstrução Completa", "Dove", "17.50"),
				new Produto("Gel de Limpeza Facial Neutrogena", "Neutrogena", "22.90"),
				new Produto("Perfume Calvin Klein Eternity", "Calvin Klein", "199.99"),
				new Produto("Protetor Solar Banana Boat FPS 70", "Banana Boat", "39.90"),
				new Produto("Creme para Mãos Granado Pink", "Granado", "9.99"),
				new Produto("Shampoo Seda Recarga Natural", "Seda", "10.99"),
				new Produto("Condicionador Elsève Reparação Total 5", "L'Oréal", "15.90"),
				new Produto("Hidratante Facial Natura Chronos", "Natura", "59.90"),
				new Produto("Perfume Carolina Herrera Good Girl", "Carolina Herrera", "349.90"),
				new Produto("Protetor Solar La Roche-Posay Anthelios", "La Roche-Posay", "59.90"),
				new Produto("Sabonete Líquido Dove Original", "Dove", "7.99"),
				new Produto("Máscara Capilar Pantene Hidro-Cauterização", "Pantene", "19.99"),
				new Produto("Gel de Barbear Gillette Mach3", "Gillette", "12.90")
            );

            repositorioProduto.saveAll(produtos);

            // Criação de 20 serviços
            List<Servico> servicos = List.of(
                new Servico("Corte de Cabelo", "Corte Social para todas as idades", "45", "60"),
                new Servico("Manicure", "Manicure profissional para unhas", "60", "40"),
                new Servico("Pedicure", "Pedicure profissional para pés", "60", "50"),
				new Servico("Coloração de Cabelo", "Coloração personalizada", "120", "150"),
				new Servico("Escova Progressiva", "Alisamento e tratamento capilar", "180", "200"),
				new Servico("Design de Sobrancelhas", "Design de sobrancelhas personalizado", "30", "50"),
				new Servico("Limpeza de Pele", "Limpeza facial profunda", "60", "80"),
				new Servico("Massagem Relaxante", "Massagem relaxante de corpo inteiro", "60", "100"),
				new Servico("Banho de Lua", "Clareamento dos pelos do corpo", "90", "120"),
				new Servico("Depilação", "Depilação corporal completa", "90", "150"),
				new Servico("Tratamento Capilar", "Tratamento intensivo para cabelos danificados", "90", "120"),
				new Servico("Maquiagem Profissional", "Maquiagem para eventos especiais", "60", "100"),
				new Servico("Alongamento de Unhas", "Alongamento de unhas em gel", "120", "200"),
				new Servico("Peeling Facial", "Tratamento para rejuvenescimento facial", "45", "80"),
				new Servico("Reflexologia", "Massagem terapêutica nos pés", "30", "50"),
				new Servico("Drenagem Linfática", "Massagem para redução de retenção de líquidos", "60", "90"),
				new Servico("Micropigmentação", "Maquiagem definitiva para sobrancelhas", "90", "150"),
				new Servico("Peeling de Diamante", "Tratamento para renovação da pele", "45", "80"),
				new Servico("Design de Barba", "Design de barba personalizado", "30", "50"),
				new Servico("Spa dos Pés", "Tratamento relaxante para os pés", "30", "60")
			);

            repositorioServico.saveAll(servicos);

			Random random = new Random();

            // Adiciona produtos e serviços consumidos aos clientes
            for (Cliente cliente : clientes) {
				int numProdutos = random.nextInt(5) + 1; 
				int numServicos = random.nextInt(5) + 1;

                // Adiciona alguns produtos consumidos
                for (int i = 0; i < numProdutos; i++) {
                    Produto produto = produtos.get(random.nextInt(produtos.size()));
					int quantidade = random.nextInt(3) + 1;

					ProdutosConsumidos produtoConsumido = new ProdutosConsumidos();
					produtoConsumido.setCliente(cliente);
					produtoConsumido.setNome(produto.getNome());
					produtoConsumido.setPreco(produto.getPreco());
					produtoConsumido.setQuantidade(quantidade);
					cliente.getProdutosConsumidos().add(produtoConsumido);
                }

                // Adiciona alguns serviços consumidos
                for (int i = 0; i < numServicos; i++) {
					Servico servico = servicos.get(random.nextInt(servicos.size()));
					int quantidade = random.nextInt(3) + 1; 

					ServicosConsumidos servicoConsumido = new ServicosConsumidos();
					servicoConsumido.setCliente(cliente);
					servicoConsumido.setNome(servico.getNome());
					servicoConsumido.setPreco(servico.getPreco());
					servicoConsumido.setQuantidade(quantidade);
					cliente.getServicosConsumidos().add(servicoConsumido);
				}
            }

            repositorioCliente.saveAll(clientes);
		}
	}
}