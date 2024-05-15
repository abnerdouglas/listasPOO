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
    produtosConsumidosMasculinos: { nome: string; quantidade: number }[];
    produtosConsumidosFemininos: { nome: string; quantidade: number }[];
}

class ListagemProdutosMaisConsumidosPorGenero extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosConsumidosMasculinos: [],
            produtosConsumidosFemininos: [],
        };
    }

    async componentDidMount() {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

        // Calcular a soma das quantidades de produtos consumidos por gênero
        const produtosConsumidosMasculinos: { [nome: string]: number } = {};
        const produtosConsumidosFemininos: { [nome: string]: number } = {};

        clientes.forEach((cliente: Cliente) => {
            cliente.produtosConsumidos.forEach((produto) => {
                if (cliente.genero === "Masculino") {
                    if (!produtosConsumidosMasculinos[produto.nome]) {
                        produtosConsumidosMasculinos[produto.nome] = 0;
                    }
                    produtosConsumidosMasculinos[produto.nome] += produto.quantidade;
                } else if (cliente.genero === "Feminino") {
                    if (!produtosConsumidosFemininos[produto.nome]) {
                        produtosConsumidosFemininos[produto.nome] = 0;
                    }
                    produtosConsumidosFemininos[produto.nome] += produto.quantidade;
                }
            });
        });

        // Converter para arrays de objetos com nome e quantidade
        const produtosArrayMasculinos = Object.entries(produtosConsumidosMasculinos).map(([nome, quantidade]) => ({ nome, quantidade }));
        const produtosArrayFemininos = Object.entries(produtosConsumidosFemininos).map(([nome, quantidade]) => ({ nome, quantidade }));

        // Ordenar os produtos pelo total consumido
        produtosArrayMasculinos.sort((a, b) => b.quantidade - a.quantidade);
        produtosArrayFemininos.sort((a, b) => b.quantidade - a.quantidade);

        this.setState({ 
            produtosConsumidosMasculinos: produtosArrayMasculinos,
            produtosConsumidosFemininos: produtosArrayFemininos,
        });
    }

    renderQuantidade = (quantidade: number) => {
        return quantidade === 1 ? "vez" : "vezes";
    }

    render() {
        const { produtosConsumidosMasculinos, produtosConsumidosFemininos } = this.state;

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Quantidade Consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtosConsumidosMasculinos.map((produto, index) => (
                                <tr key={index}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}  {this.renderQuantidade(produto.quantidade)} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Quantidade Consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtosConsumidosFemininos.map((produto, index) => (
                                <tr key={index}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade} {this.renderQuantidade(produto.quantidade)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidosPorGenero;
