import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorProdutos from "../../buscadores/buscadorProduto";
import RemovedorProduto from "../../removedores/removedorProduto";
import RemovedorProdutoLocal from "../../removedores/local/removedorProdutoLocal";
import BuscadorClientes from "../../buscadores/buscadorCliente";

interface Produto {
    id: string;
    nome: string;
    marca: string;
    preco: string;
    generoConsumidor: string;
    quantidadeConsumida: number; 
}

interface Cliente {
    id: string;
    genero: string;
}

interface State {
    produtos: Produto[] | Object[] | any;
    clientes: Cliente[] | Object[] | any;
}

class ListagemProdutosMaisConsumidosPorGenero extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            produtos: [],
            clientes: []
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

    public async buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        this.setState({ clientes: clientes });
    }

    public excluirRemoto(idProduto: string) {
        let removedor = new RemovedorProduto();
        removedor.remover({ id: idProduto });
    }

    public excluirLocal(id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        let removedorLocal = new RemovedorProdutoLocal();
        let produtos = removedorLocal.remover(this.state.produtos, id);
        this.setState({
            produtos: produtos
        });
        this.excluirRemoto(id);
    }

    async componentDidMount() {
        await this.buscarProdutos();
        await this.buscarClientes();
    }

    render() {
        const { produtos } = this.state;
        
        // Filtrar produtos por gênero
        const produtosMasculinos = produtos.filter(produto => produto.generoConsumidor === 'Masculino' || produto.generoConsumidor === 'masculino');
        const produtosFemininos = produtos.filter(produto => produto.generoConsumidor === 'Feminino' || produto.generoConsumidor === 'feminino');

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos Por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    {produtosMasculinos.length === 0 ? (
                        <p>Não existem produtos consumidos por clientes do sexo masculino.</p>
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
                                {produtosMasculinos.map((produto: Produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.marca}</td>
                                        <td>R${produto.preco},00</td>
                                        <td>{produto.generoConsumidor}</td>
                                        <td>{produto.quantidadeConsumida} unidades</td>
                                        <td>
                                            <button className="btn-small red" onClick={(e) => this.excluirLocal(produto.id, e)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    {produtosFemininos.length === 0 ? (
                        <p>Não existem produtos consumidos por clientes do sexo feminino.</p>
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
                                {produtosFemininos.map((produto: Produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.marca}</td>
                                        <td>R${produto.preco},00</td>
                                        <td>{produto.generoConsumidor}</td>
                                        <td>{produto.quantidadeConsumida} unidades</td>
                                        <td>
                                            <button className="btn-small red" onClick={(e) => this.excluirLocal(produto.id, e)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidosPorGenero;
