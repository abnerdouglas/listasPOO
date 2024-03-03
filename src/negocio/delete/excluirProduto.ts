import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class ExcluirProduto  {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\n-> Início da exclusão do produto <-`);
    
        let nome = this.entrada.receberTexto(`Digite o nome do produto a ser excluído: `);
        let produtoIndex = this.buscarIndiceProdutoPorNome(nome);
    
        if (produtoIndex !== -1) {
            this.produtos.splice(produtoIndex, 1);
            console.log('Produto excluído com sucesso!');
        } else {
            console.log('Produto não encontrado!');
        }
    }
    
    private buscarIndiceProdutoPorNome(nome: string): number {
        return this.produtos.findIndex(produto => produto.nome === nome);
    }
    
}