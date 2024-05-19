import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";

interface Cliente {
    id: string;
    genero: string;
    servicosConsumidos: {
        nome: string;
        quantidade: number;
    }[];
}

interface State {
    servicosConsumidosMasculinos: { nome: string; quantidade: number }[];
    servicosConsumidosFemininos: { nome: string; quantidade: number }[];
    currentPageMasculinos: number;
    currentPageFemininos: number;
    itemsPerPage: number;
}

class ListagemServicosMaisConsumidosPorGenero extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            servicosConsumidosMasculinos: [],
            servicosConsumidosFemininos: [],
            currentPageMasculinos: 1,
            currentPageFemininos: 1,
            itemsPerPage: 5 // Número fixo de itens por página
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
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

        // Calcular a soma das quantidades de serviços consumidos por gênero
        const servicosConsumidosMasculinos: { [nome: string]: number } = {};
        const servicosConsumidosFemininos: { [nome: string]: number } = {};

        clientes.forEach((cliente: Cliente) => {
            cliente.servicosConsumidos.forEach((servico) => {
                if (cliente.genero === "Masculino") {
                    if (!servicosConsumidosMasculinos[servico.nome]) {
                        servicosConsumidosMasculinos[servico.nome] = 0;
                    }
                    servicosConsumidosMasculinos[servico.nome] += servico.quantidade;
                } else if (cliente.genero === "Feminino") {
                    if (!servicosConsumidosFemininos[servico.nome]) {
                        servicosConsumidosFemininos[servico.nome] = 0;
                    }
                    servicosConsumidosFemininos[servico.nome] += servico.quantidade;
                }
            });
        });

        // Converter para arrays de objetos com nome e quantidade
        const servicosArrayMasculinos = Object.entries(servicosConsumidosMasculinos).map(([nome, quantidade]) => ({ nome, quantidade }));
        const servicosArrayFemininos = Object.entries(servicosConsumidosFemininos).map(([nome, quantidade]) => ({ nome, quantidade }));

        // Ordenar os serviços pelo total consumido
        servicosArrayMasculinos.sort((a, b) => b.quantidade - a.quantidade);
        servicosArrayFemininos.sort((a, b) => b.quantidade - a.quantidade);

        this.setState({
            servicosConsumidosMasculinos: servicosArrayMasculinos,
            servicosConsumidosFemininos: servicosArrayFemininos,
        });
    }

    renderQuantidade = (quantidade: number) => {
        return quantidade === 1 ? "vez" : "vezes";
    }

    totalPages = (totalItems: number) => {
        return Math.ceil(totalItems / this.state.itemsPerPage);
    }

    render() {
        const { servicosConsumidosMasculinos, servicosConsumidosFemininos, currentPageMasculinos, currentPageFemininos, itemsPerPage } = this.state;

        const totalPagesMasculinos = this.totalPages(servicosConsumidosMasculinos.length);
        const totalPagesFemininos = this.totalPages(servicosConsumidosFemininos.length);
        const pageNumbersMasculinos = Array.from({ length: totalPagesMasculinos }, (_, i) => i + 1);
        const pageNumbersFemininos = Array.from({ length: totalPagesFemininos }, (_, i) => i + 1);

        const indexOfLastServiceMasculinos = currentPageMasculinos * itemsPerPage;
        const indexOfFirstServiceMasculinos = indexOfLastServiceMasculinos - itemsPerPage;
        const currentServicesMasculinos = servicosConsumidosMasculinos.slice(indexOfFirstServiceMasculinos, indexOfLastServiceMasculinos);

        const indexOfLastServiceFemininos = currentPageFemininos * itemsPerPage;
        const indexOfFirstServiceFemininos = indexOfLastServiceFemininos - itemsPerPage;
        const currentServicesFemininos = servicosConsumidosFemininos.slice(indexOfFirstServiceFemininos, indexOfLastServiceFemininos);

        return (
            <div>
                <h5><strong>Listagem dos Serviços Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    {currentServicesMasculinos.length === 0 ? (
                        <p>Não existem serviços consumidos pelos gênero masculino.</p>
                    ) : (
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome do Serviço</th>
                                    <th>Quantidade Consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentServicesMasculinos.map((servico, index) => (
                                    <tr key={index}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.quantidade} {this.renderQuantidade(servico.quantidade)}</td>
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
                    {currentServicesFemininos.length === 0 ? (
                        <p>Não existem serviços consumidos pelos gênero feminino.</p>
                    ) : (
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome do Serviço</th>
                                    <th>Quantidade Consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentServicesFemininos.map((servico, index) => (
                                    <tr key={index}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.quantidade} {this.renderQuantidade(servico.quantidade)}</td>
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

export default ListagemServicosMaisConsumidosPorGenero;
