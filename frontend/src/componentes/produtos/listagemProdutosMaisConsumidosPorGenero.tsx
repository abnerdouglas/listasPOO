import React, { Component } from "react";
import M from 'materialize-css';
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
    currentPage: number;
    itemsPerPage: number;
}

class ListagemProdutosMaisConsumidosPorGenero extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosConsumidosMasculinos: [],
            produtosConsumidosFemininos: [],
            currentPage: 1,
            itemsPerPage: 5 // Número fixo de itens por página
        };
        this.modalRef = React.createRef();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange = (pageNumber: number) => {
        this.setState({ currentPage: pageNumber });
    }

    async componentDidMount() {
        M.Modal.init(this.modalRef.current!);
        await this.fetchData();
    }

    fetchData = async () => {
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

    totalPages = () => {
        const { itemsPerPage } = this.state;
        const totalMasculinos = this.state.produtosConsumidosMasculinos.length;
        const totalFemininos = this.state.produtosConsumidosFemininos.length;
        return Math.ceil((totalMasculinos + totalFemininos) / itemsPerPage);
    }

    render() {
        const { produtosConsumidosMasculinos, produtosConsumidosFemininos, currentPage } = this.state;

        // Lógica de Paginação
        const totalPages = this.totalPages();
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

        // Índices de itens para a página atual
        const indexOfLastProduct = currentPage * this.state.itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - this.state.itemsPerPage;
        const allProducts = [...produtosConsumidosMasculinos, ...produtosConsumidosFemininos];
        const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    {currentProducts.length === 0 ? (
                        <p>Não existem produtos consumidos pelo gênero masculino.</p>
                    ) : (
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome do Produto</th>
                                    <th>Quantidade Consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.quantidade}  {this.renderQuantidade(produto.quantidade)} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    {currentProducts.length === 0 ? (
                        <p>Não existem produtos consumidos pelo gênero feminino.</p>
                    ) : (
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome do Produto</th>
                                    <th>Quantidade Consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.quantidade} {this.renderQuantidade(produto.quantidade)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Paginação */}
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={currentPage === number ? "active" : ""}>
                            <a href="#!" onClick={() => this.handlePageChange(number)}>{number}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidosPorGenero;
