
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

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
            new Cliente("João da Silva", "Joãozinho", new CPF("123.456.789-10", new Date(1990, 10, 1)), [new RG("12.345.678-9", new Date(1990, 12, 5))], [new Telefone("012", "93204-1120")], "M"),
            new Cliente("Maria Oliveira", "Mari", new CPF("987.654.321-21", new Date(1985, 4, 15)), [new RG("23.456.789-0", new Date(1985, 6, 20))], [new Telefone("011", "98765-4321")], "F"),
            new Cliente("Pedro Santos", "Pedrinho", new CPF("234.567.890-32", new Date(1982, 8, 20)), [new RG("34.567.890-1", new Date(1982, 10, 25))], [new Telefone("021", "91234-5678")], "M"),
            new Cliente("Ana Pereira", "Aninha", new CPF("543.210.987-43", new Date(1978, 6, 3)), [new RG("45.678.901-2", new Date(1978, 8, 7))], [new Telefone("031", "92345-6789")], "F"),
            new Cliente("Lucas Souza", "Luquinhas", new CPF("876.543.210-54", new Date(1995, 10, 11)), [new RG("56.789.012-3", new Date(1995, 12, 15))], [new Telefone("041", "94321-0987")], "M"),
            new Cliente("Gabriela Lima", "Gabi", new CPF("345.678.901-65", new Date(1989, 2, 29)), [new RG("67.890.123-4", new Date(1989, 4, 5))], [new Telefone("051", "95432-1098")], "F"),
            new Cliente("Felipe Costa", "Fe", new CPF("678.901.234-76", new Date(1980, 7, 17)), [new RG("78.901.234-5", new Date(1980, 9, 21))], [new Telefone("013", "92341-2345")], "M"),
            new Cliente("Jéssica Almeida", "Jess", new CPF("901.234.567-87", new Date(1976, 11, 5)), [new RG("89.012.345-6", new Date(1976, 1, 9))], [new Telefone("022", "93456-7890")], "F"),
            new Cliente("Rafaela Ferreira", "Rafa", new CPF("456.789.012-98", new Date(1992, 3, 23)), [new RG("90.123.456-7", new Date(1992, 5, 27))], [new Telefone("032", "91234-5678")], "F"),
            new Cliente("Marcelo Oliveira", "Marcinho", new CPF("789.012.345-09", new Date(1983, 5, 8)), [new RG("11.234.567-8", new Date(1983, 7, 12))], [new Telefone("042", "92345-6789")], "M"),
            new Cliente("Camila Santos", "Camis", new CPF("567.890.123-10", new Date(1975, 1, 14)), [new RG("11.122.233-3", new Date(1975, 3, 19))], [new Telefone("052", "94321-0987")], "F"),
            new Cliente("Luiz Silva", "Luizinho", new CPF("123.456.789-20", new Date(1998, 9, 30)), [new RG("23.423.423-4", new Date(1998, 11, 5))], [new Telefone("014", "93204-1120")], "M"),
            new Cliente("Bruna Pereira", "Bruninha", new CPF("234.567.890-31", new Date(1981, 8, 2)), [new RG("34.534.534-5", new Date(1981, 10, 7))], [new Telefone("023", "92341-2345")], "F"),
            new Cliente("Thiago Souza", "Thiaguinho", new CPF("543.210.987-42", new Date(1977, 6, 19)), [new RG("45.645.645-6", new Date(1977, 8, 23))], [new Telefone("033", "93456-7890")], "M"),
            new Cliente("Amanda Lima", "Amandinha", new CPF("876.543.210-53", new Date(1994, 4, 27)), [new RG("56.756.756-7", new Date(1994, 6, 1))], [new Telefone("043", "91234-5678")], "F"),
            new Cliente("Andréia Costa", "Andrezinha", new CPF("345.678.901-64", new Date(1988, 10, 4)), [new RG("67.867.867-8", new Date(1988, 12, 9))], [new Telefone("053", "92345-6789")], "F"),
            new Cliente("Gustavo Almeida", "Gustavinho", new CPF("678.901.234-75", new Date(1984, 0, 21)), [new RG("78.978.978-9", new Date(1984, 2, 27))], [new Telefone("015", "95432-1098")], "M"),
            new Cliente("Larissa Ferreira", "Larissinha", new CPF("901.234.567-86", new Date(1979, 2, 9)), [new RG("89.089.089-0", new Date(1979, 4, 15))], [new Telefone("024", "93204-1120")], "F"),
            new Cliente("Renato Oliveira", "Renatinho", new CPF("456.789.012-97", new Date(1991, 8, 15)), [new RG("90.190.190-1", new Date(1991, 10, 20))], [new Telefone("034", "92341-2345")], "M"),
            new Cliente("Natália Santos", "Natinha", new CPF("789.012.345-08", new Date(1986, 5, 26)), [new RG("77.711.122-2", new Date(1986, 7, 1))], [new Telefone("044", "93456-7890")], "F"),
            new Cliente("Henrique Silva", "Henriquinho", new CPF("567.890.123-19", new Date(1974, 11, 10)), [new RG("12.312.312-3", new Date(1974, 1, 15))], [new Telefone("054", "91234-5678")], "M"),
            new Cliente("Mariana Pereira", "Marianinha", new CPF("123.456.789-20", new Date(1997, 7, 7)), [new RG("23.423.423-4", new Date(1997, 9, 12))], [new Telefone("016", "92345-6789")], "F"),
            new Cliente("Ricardo Souza", "Ricardinho", new CPF("234.567.890-31", new Date(1980, 1, 18)), [new RG("34.534.534-5", new Date(1980, 3, 25))], [new Telefone("025", "93204-1120")], "M"),
            new Cliente("Patrícia Lima", "Paty", new CPF("543.210.987-42", new Date(1976, 3, 3)), [new RG("45.645.645-6", new Date(1976, 5, 9))], [new Telefone("035", "92341-2345")], "F"),
            new Cliente("Daniel Costa", "Danielzinho", new CPF("876.543.210-53", new Date(1993, 9, 29)), [new RG("56.756.756-7", new Date(1993, 11, 5))], [new Telefone("045", "93456-7890")], "M"),
            new Cliente("Laura Almeida", "Laurinha", new CPF("345.678.901-64", new Date(1982, 4, 12)), [new RG("67.867.867-8", new Date(1982, 6, 17))], [new Telefone("055", "91234-5678")], "F"),
            new Cliente("Vinícius Ferreira", "Vinicinho", new CPF("678.901.234-75", new Date(1978, 6, 25)), [new RG("78.978.978-9", new Date(1978, 8, 30))], [new Telefone("017", "92345-6789")], "M"),
            new Cliente("Juliana Oliveira", "Julianinha", new CPF("901.234.567-86", new Date(1990, 8, 1)), [new RG("89.089.089-0", new Date(1990, 10, 6))], [new Telefone("026", "93204-1120")], "F"),
            new Cliente("Bruno Santos", "Bruninho", new CPF("456.789.012-97", new Date(1973, 2, 14)), [new RG("90.190.190-1", new Date(1973, 4, 20))], [new Telefone("036", "92341-2345")], "M"),
            new Cliente("Carolina Silva", "Carolzinha", new CPF("789.012.345-08", new Date(1987, 10, 6)), [new RG("44.411.122-2", new Date(1987, 12, 12))], [new Telefone("046", "93456-7890")], "F")
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
                return; 
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
