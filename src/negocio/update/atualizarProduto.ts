import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class AtualizarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n-> Início da atualzação de um produto <-`);

        let nomeAtualProduto = this.entrada.receberTexto(`Digite o nome do produto a ser atualizado: `);
        let produto = this.buscarProdutoPorNome(nomeAtualProduto) 

        if(produto) {
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do produto: `)
            let novaMarca = this.entrada.receberTexto(`Informe a nova marca: `)
            let novoPreco = this.entrada.receberTexto(`Informe o novo preço: `)
            let novoGenero = this.entrada.receberTexto(`Informe o novo principal gênero consumidro: `)

            produto.atualizarDados(novoNome, novaMarca, novoPreco, novoGenero)
            console.log('Produto atualizado com sucesso!')
        } else {
            console.log('Produto não encontrado!')
        }
    }

    private buscarProdutoPorNome(nome: string) : Produto | undefined {
        return this.produtos.find(produto => produto.nome === nome)
    }
   
}