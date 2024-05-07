import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorProdutos from "../../buscadores/buscadorProduto";
import RemovedorProduto from "../../removedores/removedorProduto";
import RemovedorProdutoLocal from "../../removedores/local/removedorProdutoLocal";

interface Produto {
    id: string;
    nome: string;
    marca: string;
    preco: string;
    generoConsumidor: string;
    quantidadeConsumida: number; 
}

interface State {
    produtos: Produto[] | Object[] | any;
}

class ListagemProdutosMaisConsumidos extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            produtos: [],
        };
    }

    public async buscarProdutos() {
        let buscadorProdutos = new BuscadorProdutos();
        const produtos = await buscadorProdutos.buscar();
        
        produtos.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida)

        // Pegar os 10 produtos mais consumidos
        const produtosMaisConsumidos = produtos.slice(0, 10);
        this.setState({ produtos: produtosMaisConsumidos });
    }

    public excluirRemoto(idProduto: string) {
        let removedor = new RemovedorProduto();
        removedor.remover({ id: idProduto });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorProdutoLocal();
        let produtos = removedorLocal.remover(this.state.produtos, id);
        this.setState({
            produtos: produtos
        });
        this.excluirRemoto(id);
    }

    componentDidMount() {
        this.buscarProdutos();
    }

    render() {
        const { produtos } = this.state;

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos</strong></h5>
                <hr />
                {produtos.length === 0 ? (
                    <p>Não existem produtos cadastrados.</p>
                ) : (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Preço</th>
                            <th>Gênero Consumidor</th>
                            <th>Quantidade Consumida</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto: Produto) => (
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.generoConsumidor}</td>
                                <td>{produto.quantidadeConsumida}</td>
                                <td>
                                    <button className="btn-small red" onClick={(e) => this.excluirLocal(produto.id, e)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 )}
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidos;
