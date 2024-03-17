import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        if (this.produtos.length == 0) {
            console.log(`Não há produtos cadastrados ainda.`)
            return;
        }

        console.log(`\n-> Início da exclusão do Produto <-`);
    
        console.log("\nProdutos disponíveis:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome}`);
        });
    
        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto a ser excluído através do número: `);
    
        if (escolhaProduto < 1 || escolhaProduto > this.produtos.length || isNaN(escolhaProduto)) {
            console.log("\nOpção inválida.");
            return;
        }
    
        let produtoIndex = escolhaProduto - 1; 
    
        if (produtoIndex >= 0 && produtoIndex < this.produtos.length) {
            this.produtos.splice(produtoIndex, 1);
            console.log('\nProduto excluído com sucesso!');
        } else {
            console.log('\nÍndice de produto inválido!');
        }
    } 
}