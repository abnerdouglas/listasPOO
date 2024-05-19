import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    private clientes: Array<Cliente>;

    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n-> Início do cadastro de um produto <-`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let marca = this.entrada.receberTexto(`Informe a marca: `)
        let preco = this.entrada.receberTexto(`Informe o preço: `)
        let genero = this.entrada.receberTexto(`Informe o principal gênero consumidor: `)

        if(this.clientes.length > 0){
            console.log("\nClientes disponíveis:");
            this.clientes.forEach((cliente, index) => {
                console.log(`${index + 1}. ${cliente.nome}`);
         });
        } else {
            console.log(`Não há clientes cadastrados disponíveis para serem associados. Cadastro de Produto Concluído.`)
            return;
        }

        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente através do número: `);
 
        if (escolhaCliente < 1 || escolhaCliente > this.clientes.length || isNaN(escolhaCliente)) {
             console.log("Opção inválida.");
             return;
        }
 
        let clienteEscolhido = this.clientes[escolhaCliente - 1];
 
        let produto = new Produto(nome, marca, preco, genero);
         
        clienteEscolhido.registrarProdutoConsumido(produto);
 
        this.produtos.push(produto);
        console.log(`\nCadastro de Produto Concluído :)\n`);
    }
}