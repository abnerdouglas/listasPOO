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
    currentPageMasculinos: number;
    currentPageFemininos: number;
    itemsPerPage: number;
}

class ListagemProdutosMaisConsumidosPorGenero extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosConsumidosMasculinos: [],
            produtosConsumidosFemininos: [],
            currentPageMasculinos: 1,
            currentPageFemininos: 1,
            itemsPerPage: 5
        };
        this.modalRef = React.createRef();
        this.handlePageChangeMasculinos = this.handlePageChangeMasculinos.bind(this);
        this.handlePageChangeFemininos = this.handlePageChangeFemininos.bind(this);
    }

    handlePageChangeMasculinos(pageNumber: number) {
        this.setState({ currentPageMasculinos: pageNumber });
    }

    handlePageChangeFemininos(pageNumber: number) {
        this.setState({ currentPageFemininos: pageNumber });
    }

    async componentDidMount() {
        M.Modal.init(this.modalRef.current!);
        await this.fetchData();
    }

    fetchData = async () => {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

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

        const produtosArrayMasculinos = Object.entries(produtosConsumidosMasculinos).map(([nome, quantidade]) => ({ nome, quantidade }));
        const produtosArrayFemininos = Object.entries(produtosConsumidosFemininos).map(([nome, quantidade]) => ({ nome, quantidade }));

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

    totalPages = (totalItems: number) => {
        return Math.ceil(totalItems / this.state.itemsPerPage);
    }

    render() {
        const { produtosConsumidosMasculinos, produtosConsumidosFemininos, currentPageMasculinos, currentPageFemininos, itemsPerPage } = this.state;

        const totalPagesMasculinos = this.totalPages(produtosConsumidosMasculinos.length);
        const totalPagesFemininos = this.totalPages(produtosConsumidosFemininos.length);
        const pageNumbersMasculinos = Array.from({ length: totalPagesMasculinos }, (_, i) => i + 1);
        const pageNumbersFemininos = Array.from({ length: totalPagesFemininos }, (_, i) => i + 1);

        const indexOfLastProductMasculinos = currentPageMasculinos * itemsPerPage;
        const indexOfFirstProductMasculinos = indexOfLastProductMasculinos - itemsPerPage;
        const currentProductsMasculinos = produtosConsumidosMasculinos.slice(indexOfFirstProductMasculinos, indexOfLastProductMasculinos);

        const indexOfLastProductFemininos = currentPageFemininos * itemsPerPage;
        const indexOfFirstProductFemininos = indexOfLastProductFemininos - itemsPerPage;
        const currentProductsFemininos = produtosConsumidosFemininos.slice(indexOfFirstProductFemininos, indexOfLastProductFemininos);

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    {currentProductsMasculinos.length === 0 ? (
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
                                {currentProductsMasculinos.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.quantidade} {this.renderQuantidade(produto.quantidade)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <ul className="pagination">
                        {pageNumbersMasculinos.map(number => (
                            <li key={number} className={currentPageMasculinos === number ? "active" : ""}>
                                <a href="#!" onClick={() => this.handlePageChangeMasculinos(number)}>{number}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    {currentProductsFemininos.length === 0 ? (
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
                                {currentProductsFemininos.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.quantidade} {this.renderQuantidade(produto.quantidade)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <ul className="pagination">
                        {pageNumbersFemininos.map(number => (
                            <li key={number} className={currentPageFemininos === number ? "active" : ""}>
                                <a href="#!" onClick={() => this.handlePageChangeFemininos(number)}>{number}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidosPorGenero;
