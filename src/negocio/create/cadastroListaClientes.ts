
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";

export default class CadastroListaClientes {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes
        this.produtos = produtos
    }
    public lista(): void {
        //lista de clientes para teste
        const clientesTeste: Array<Cliente> = [
            new Cliente("João da Silva", "Joãozinho", new CPF("12345678910", new Date(1990, 0, 1)), "M"),
            new Cliente("Maria Oliveira", "Mari", new CPF("98765432121", new Date(1985, 4, 15)), "F"),
            new Cliente("Pedro Santos", "Pedrinho", new CPF("23456789032", new Date(1982, 8, 20)), "M"),
            new Cliente("Ana Pereira", "Aninha", new CPF("54321098743", new Date(1978, 6, 3)), "F"),
            new Cliente("Lucas Souza", "Luquinhas", new CPF("87654321054", new Date(1995, 10, 11)), "M"),
            new Cliente("Gabriela Lima", "Gabi", new CPF("34567890165", new Date(1989, 2, 29)), "F"),
            new Cliente("Felipe Costa", "Fe", new CPF("67890123476", new Date(1980, 7, 17)), "M"),
            new Cliente("Jéssica Almeida", "Jess", new CPF("90123456787", new Date(1976, 11, 5)), "F"),
            new Cliente("Rafaela Ferreira", "Rafa", new CPF("45678901298", new Date(1992, 3, 23)), "F"),
            new Cliente("Marcelo Oliveira", "Marcinho", new CPF("78901234509", new Date(1983, 5, 8)), "M"),
            new Cliente("Camila Santos", "Camis", new CPF("56789012310", new Date(1975, 1, 14)), "F"),
            new Cliente("Luiz Silva", "Luizinho", new CPF("12345678920", new Date(1998, 9, 30)), "M"),
            new Cliente("Bruna Pereira", "Bruninha", new CPF("23456789031", new Date(1981, 8, 2)), "F"),
            new Cliente("Thiago Souza", "Thiaguinho", new CPF("54321098742", new Date(1977, 6, 19)), "M"),
            new Cliente("Amanda Lima", "Amandinha", new CPF("87654321053", new Date(1994, 4, 27)), "F"),
            new Cliente("Andréia Costa", "Andrezinha", new CPF("34567890164", new Date(1988, 10, 4)), "F"),
            new Cliente("Gustavo Almeida", "Gustavinho", new CPF("67890123475", new Date(1984, 0, 21)), "M"),
            new Cliente("Larissa Ferreira", "Larissinha", new CPF("90123456786", new Date(1979, 2, 9)), "F"),
            new Cliente("Renato Oliveira", "Renatinho", new CPF("45678901297", new Date(1991, 8, 15)), "M"),
            new Cliente("Natália Santos", "Natinha", new CPF("78901234508", new Date(1986, 5, 26)), "F"),
            new Cliente("Henrique Silva", "Henriquinho", new CPF("56789012319", new Date(1974, 11, 10)), "M"),
            new Cliente("Mariana Pereira", "Marianinha", new CPF("12345678920", new Date(1997, 7, 7)), "F"),
            new Cliente("Ricardo Souza", "Ricardinho", new CPF("23456789031", new Date(1980, 1, 18)), "M"),
            new Cliente("Patrícia Lima", "Paty", new CPF("54321098742", new Date(1976, 3, 3)), "F"),
            new Cliente("Daniel Costa", "Danielzinho", new CPF("87654321053", new Date(1993, 9, 29)), "M"),
            new Cliente("Laura Almeida", "Laurinha", new CPF("34567890164", new Date(1982, 4, 12)), "F"),
            new Cliente("Vinícius Ferreira", "Vinicinho", new CPF("67890123475", new Date(1978, 6, 25)), "M"),
            new Cliente("Juliana Oliveira", "Julianinha", new CPF("90123456786", new Date(1990, 8, 1)), "F"),
            new Cliente("Bruno Santos", "Bruninho", new CPF("45678901297", new Date(1973, 2, 14)), "M"),
            new Cliente("Carolina Silva", "Carolzinha", new CPF("78901234508", new Date(1987, 10, 6)), "F"),
        ];

        const produtosTeste : Array<Produto> = [
            new Produto('Perfume', 'Boticário', '250', 'M'),
            new Produto('Creme para Barbear', 'Nivea', '120', 'M'),
            new Produto('Gel de Cabelo', 'LOréal', '180', 'M'),
            new Produto('Loção Pós-Barba', 'Gillette', '150', 'M'),
            new Produto('Desodorante', 'Dove', '100', 'M'),
            new Produto('Shampoo', 'Head & Shoulders', '200', 'M'),
            new Produto('Condicionador', 'Pantene', '220', 'M'),
            new Produto('Sabonete Corporal', 'Dove Men', '90', 'M'),
            new Produto('Hidratante Facial', 'Nivea Men', '180', 'M'),
            new Produto('Gel de Limpeza Facial', 'Neutrogena Men', '150', 'M'),
            new Produto('Creme Hidratante', 'Nivea', '150', 'F'),
            new Produto('Base Líquida', 'MAC', '300', 'F'),
            new Produto('Batom', 'Maybelline', '100', 'F'),
            new Produto('Rímel', 'Lancôme', '200', 'F'),
            new Produto('Esmalte', 'Colorama', '50', 'F'),
            new Produto('Creme para as Mãos', 'OPI', '80', 'F'),
            new Produto('Loção Corporal', 'Victorias Secret', '180', 'F'),
            new Produto('Máscara Facial', 'Garnier', '120', 'F'),
            new Produto('Shampoo Seco', 'Batiste', '180', 'F'),
            new Produto('Protetor Solar', 'Nivea Sun', '30', 'F'),
            new Produto('Creme Anti-Idade', 'LOréal Paris', '150', 'F'),
            new Produto('Esfoliante Facial', 'Neutrogena', '80', 'F'),
            new Produto('Tônico Facial', 'Garnier', '100', 'F'),
            new Produto('Bálsamo Labial', 'EOS', '50', 'F'),
            new Produto('Máscara Capilar', 'Pantene Pro-V', '200', 'F'),
            new Produto('Óleo Corporal', 'Johnsons', '120', 'F'),
            new Produto('Sérum Facial', 'The Ordinary', '150', 'F'),
            new Produto('Removedor de Maquiagem', 'Bioderma', '90', 'F'),
            new Produto('Creme para Mãos', 'Natura', '130', 'F'),
            new Produto('Creme para Pés', 'Jequiti', '100', 'F'),
        ];

        this.clientes.push(...clientesTeste);
        this.produtos.push(...produtosTeste);
        
        const indicesProdutos = Array.from({ length: this.produtos.length }, (_, index) => index);

        for (let i = indicesProdutos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indicesProdutos[i], indicesProdutos[j]] = [indicesProdutos[j], indicesProdutos[i]];
        }

        this.clientes.forEach(cliente => {
            const produtosDisponiveis = this.produtos.filter(produto => produto.genero === cliente.genero);
        
            if (produtosDisponiveis.length === 0) {
                console.log(`Não há produtos disponíveis para o gênero ${cliente.genero} do cliente ${cliente.nome}.`);
                return; // Sai da iteração atual se não houver produtos disponíveis
            }
        
            const quantidadeProdutos = Math.floor(Math.random() * 15);
        
            const produtosConsumidosCliente: Produto[] = [];
        
            for (let i = 0; i < quantidadeProdutos; i++) {
                const indiceProdutoAleatorio = Math.floor(Math.random() * produtosDisponiveis.length);
                const produtoAleatorio = produtosDisponiveis[indiceProdutoAleatorio];
        
                if (!produtosConsumidosCliente.includes(produtoAleatorio)) {
                    produtosConsumidosCliente.push(produtoAleatorio);
                    cliente.registrarProdutoConsumido(produtoAleatorio);
                }
            }
        });

        console.log(`Lista de clientes e produtos cadastrados.`)
    }
}
