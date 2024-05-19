import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos
        this.clientes = clientes
    }
    public listar(): void {
        if (this.produtos.length == 0) {
            console.log("Nenhum produto foi cadastrado ainda.\n");
        } else {
            console.log(`\nLISTA DE TODOS OS PRODUTOS:\n`);
            
            this.produtos.forEach(produto => {
                console.log(`--------------------------------------`);
                console.log(`Nome do produto: ${produto.nome}`);
                console.log(`Marca: ${produto.marca}`);
                console.log(`Preço: R$${produto.preco},00`);
                console.log(`Gênero Principal: ${produto.genero}`)
                
                let clienteAssociado = this.clientes.find(cliente => cliente.getProdutosConsumidos.some(item => item.nome === produto.nome));

                if (clienteAssociado) {
                    console.log(`Cliente associado: ${clienteAssociado.nome}`);
                } else {
                    console.log(`Nenhum cliente associado disponível.`);
                }
                
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
    }
}