import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao{
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto foi cadastrado ainda.\n");
            return;
        }
        
        console.log(`\n-> Início da atualzação de um Perviço <-`);

        console.log("\nProdutos disponíveis:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome}`);
        });
    
        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto a ser excluído através do número: `); 

        let produtoEscolhido = this.produtos[escolhaProduto - 1]; 
    
        if (produtoEscolhido) {
            let novoNome = this.entrada.receberTexto(`Informe o nome do serviço: `)
            let novaMarca = this.entrada.receberTexto(`Informe a marca: `)
            let novoPreco = this.entrada.receberTexto(`Informe o preço: `)
            let novoGenero = this.entrada.receberTexto(`Informe o principal gênero consumidor: `)

            produtoEscolhido.atualizarDados(novoNome, novaMarca, novoPreco, novoGenero)
            console.log('\nServiço atualizado com sucesso!');
        } else {
            console.log('\nÍndice de serviço inválido!');
        }
    }
}