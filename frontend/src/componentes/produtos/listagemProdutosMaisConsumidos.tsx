import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";

interface Cliente {
    id: string;
    genero: string;
    produtosConsumidos: {
        nome: string;
        quantidade: number;
    }[];
}

interface State {
    produtosConsumidos: { nome: string; quantidade: number }[];
}

class ListagemProdutosMaisConsumidos extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosConsumidos: [],
        };
    }

    async componentDidMount() {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        
        // Calcular a soma das quantidades de produtos consumidos por todos os clientes
        const produtosConsumidos: { [nome: string]: number } = {};
        clientes.forEach((cliente: Cliente) => {
            cliente.produtosConsumidos.forEach((produto) => {
                if (!produtosConsumidos[produto.nome]) {
                    produtosConsumidos[produto.nome] = 0;
                }
                produtosConsumidos[produto.nome] += produto.quantidade;
            });
        });

        // Converter para um array de objetos com nome e quantidade
        const produtosArray = Object.entries(produtosConsumidos).map(([nome, quantidade]) => ({ nome, quantidade }));

        // Ordenar os produtos pelo total consumido
        produtosArray.sort((a, b) => b.quantidade - a.quantidade);

        this.setState({ produtosConsumidos: produtosArray });
    }

    renderQuantidade = (quantidade: number) => {
        return quantidade === 1 ? "vez" : "vezes";
    }

    render() {
        const { produtosConsumidos } = this.state;

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos</strong></h5>
                <hr />

                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Quantidade Consumida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtosConsumidos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.quantidade} {this.renderQuantidade(produto.quantidade)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidos;
