
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
            new Cliente("João da Silva", "Joãozinho", new CPF("12345678910", new Date(1990, 10, 1)), [new RG("123456789", new Date(1990, 12, 5))], [new Telefone("12", "93204-1120")], "M"),
            new Cliente("Maria Oliveira", "Mari", new CPF("98765432121", new Date(1985, 4, 15)), [new RG("234567890", new Date(1985, 6, 20))], [new Telefone("11", "98765-4321")], "F"),
            new Cliente("Pedro Santos", "Pedrinho", new CPF("23456789032", new Date(1982, 8, 20)), [new RG("345678901", new Date(1982, 10, 25))], [new Telefone("21", "91234-5678")], "M"),
            new Cliente("Ana Pereira", "Aninha", new CPF("54321098743", new Date(1978, 6, 3)), [new RG("456789012", new Date(1978, 8, 7))], [new Telefone("31", "92345-6789")], "F"),
            new Cliente("Lucas Souza", "Luquinhas", new CPF("87654321054", new Date(1995, 10, 11)), [new RG("567890123", new Date(1995, 12, 15))], [new Telefone("41", "94321-0987")], "M"),
            new Cliente("Gabriela Lima", "Gabi", new CPF("34567890165", new Date(1989, 2, 29)), [new RG("678901234", new Date(1989, 4, 5))], [new Telefone("51", "95432-1098")], "F"),
            new Cliente("Felipe Costa", "Fe", new CPF("67890123476", new Date(1980, 7, 17)), [new RG("789012345", new Date(1980, 9, 21))], [new Telefone("13", "92341-2345")], "M"),
            new Cliente("Jéssica Almeida", "Jess", new CPF("90123456787", new Date(1976, 11, 5)), [new RG("890123456", new Date(1976, 1, 9))], [new Telefone("22", "93456-7890")], "F"),
            new Cliente("Rafaela Ferreira", "Rafa", new CPF("45678901298", new Date(1992, 3, 23)), [new RG("901234567", new Date(1992, 5, 27))], [new Telefone("32", "91234-5678")], "F"),
            new Cliente("Marcelo Oliveira", "Marcinho", new CPF("78901234509", new Date(1983, 5, 8)), [new RG("012345678", new Date(1983, 7, 12))], [new Telefone("42", "92345-6789")], "M"),
            new Cliente("Camila Santos", "Camis", new CPF("56789012310", new Date(1975, 1, 14)), [new RG("111222333", new Date(1975, 3, 19))], [new Telefone("52", "94321-0987")], "F"),
            new Cliente("Luiz Silva", "Luizinho", new CPF("12345678920", new Date(1998, 9, 30)), [new RG("234234234", new Date(1998, 11, 5))], [new Telefone("14", "93204-1120")], "M"),
            new Cliente("Bruna Pereira", "Bruninha", new CPF("23456789031", new Date(1981, 8, 2)), [new RG("345345345", new Date(1981, 10, 7))], [new Telefone("23", "92341-2345")], "F"),
            new Cliente("Thiago Souza", "Thiaguinho", new CPF("54321098742", new Date(1977, 6, 19)), [new RG("456456456", new Date(1977, 8, 23))], [new Telefone("33", "93456-7890")], "M"),
            new Cliente("Amanda Lima", "Amandinha", new CPF("87654321053", new Date(1994, 4, 27)), [new RG("567567567", new Date(1994, 6, 1))], [new Telefone("43", "91234-5678")], "F"),
            new Cliente("Andréia Costa", "Andrezinha", new CPF("34567890164", new Date(1988, 10, 4)), [new RG("678678678", new Date(1988, 12, 9))], [new Telefone("53", "92345-6789")], "F"),
            new Cliente("Gustavo Almeida", "Gustavinho", new CPF("67890123475", new Date(1984, 0, 21)), [new RG("789789789", new Date(1984, 2, 27))], [new Telefone("15", "95432-1098")], "M"),
            new Cliente("Larissa Ferreira", "Larissinha", new CPF("90123456786", new Date(1979, 2, 9)), [new RG("890890890", new Date(1979, 4, 15))], [new Telefone("24", "93204-1120")], "F"),
            new Cliente("Renato Oliveira", "Renatinho", new CPF("45678901297", new Date(1991, 8, 15)), [new RG("901901901", new Date(1991, 10, 20))], [new Telefone("34", "92341-2345")], "M"),
            new Cliente("Natália Santos", "Natinha", new CPF("78901234508", new Date(1986, 5, 26)), [new RG("000111222", new Date(1986, 7, 1))], [new Telefone("44", "93456-7890")], "F"),
            new Cliente("Henrique Silva", "Henriquinho", new CPF("56789012319", new Date(1974, 11, 10)), [new RG("123123123", new Date(1974, 1, 15))], [new Telefone("54", "91234-5678")], "M"),
            new Cliente("Mariana Pereira", "Marianinha", new CPF("12345678920", new Date(1997, 7, 7)), [new RG("234234234", new Date(1997, 9, 12))], [new Telefone("16", "92345-6789")], "F"),
            new Cliente("Ricardo Souza", "Ricardinho", new CPF("23456789031", new Date(1980, 1, 18)), [new RG("345345345", new Date(1980, 3, 25))], [new Telefone("25", "93204-1120")], "M"),
            new Cliente("Patrícia Lima", "Paty", new CPF("54321098742", new Date(1976, 3, 3)), [new RG("456456456", new Date(1976, 5, 9))], [new Telefone("35", "92341-2345")], "F"),
            new Cliente("Daniel Costa", "Danielzinho", new CPF("87654321053", new Date(1993, 9, 29)), [new RG("567567567", new Date(1993, 11, 5))], [new Telefone("45", "93456-7890")], "M"),
            new Cliente("Laura Almeida", "Laurinha", new CPF("34567890164", new Date(1982, 4, 12)), [new RG("678678678", new Date(1982, 6, 17))], [new Telefone("55", "91234-5678")], "F"),
            new Cliente("Vinícius Ferreira", "Vinicinho", new CPF("67890123475", new Date(1978, 6, 25)), [new RG("789789789", new Date(1978, 8, 30))], [new Telefone("17", "92345-6789")], "M"),
            new Cliente("Juliana Oliveira", "Julianinha", new CPF("90123456786", new Date(1990, 8, 1)), [new RG("890890890", new Date(1990, 10, 6))], [new Telefone("26", "93204-1120")], "F"),
            new Cliente("Bruno Santos", "Bruninho", new CPF("45678901297", new Date(1973, 2, 14)), [new RG("901901901", new Date(1973, 4, 20))], [new Telefone("36", "92341-2345")], "M"),
            new Cliente("Carolina Silva", "Carolzinha", new CPF("78901234508", new Date(1987, 10, 6)), [new RG("000111222", new Date(1987, 12, 12))], [new Telefone("46", "93456-7890")], "F")
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
