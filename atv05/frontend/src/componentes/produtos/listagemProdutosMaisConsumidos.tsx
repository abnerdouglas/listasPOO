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
    produtosConsumidos: { nome: string; quantidade: number }[];
    currentPage: number;
    itemsPerPage: number;
}

class ListagemProdutosMaisConsumidos extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosConsumidos: [],
            currentPage: 1,
            itemsPerPage: 5 // Número fixo de itens por página
        };
        this.modalRef = React.createRef();
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) {
        event.preventDefault();
        this.setState({ currentPage: pageNumber });
    }

    async componentDidMount() {
        M.Modal.init(this.modalRef.current!);
        
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
        const { produtosConsumidos, currentPage, itemsPerPage } = this.state;

        // Lógica de Paginação
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        const currentProducts = produtosConsumidos.slice(indexOfFirstProduct, indexOfLastProduct);
        const totalPages = Math.ceil(produtosConsumidos.length / itemsPerPage);

        return (
            <div>
                <h5><strong>Listagem dos Produtos Mais Consumidos</strong></h5>
                <hr />
                {produtosConsumidos.length === 0 ? (
                    <p>Não existem produtos consumidos por clientes.</p>
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
                {/* Paginação */}
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li className={index + 1 === currentPage ? "active" : "waves-effect"} key={index}>
                            <a href="#!" onClick={(e) => this.handlePageChange(e, index + 1)}>{index + 1}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListagemProdutosMaisConsumidos;
