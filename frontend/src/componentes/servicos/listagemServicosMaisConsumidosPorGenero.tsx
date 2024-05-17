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
    currentPage: number;
    itemsPerPage: number;
}

class ListagemServicosMaisConsumidosPorGenero extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            servicosConsumidosMasculinos: [],
            servicosConsumidosFemininos: [],
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
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

        // Calcular a soma das quantidades de servicos consumidos por gênero
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

        // Ordenar os servicos pelo total consumido
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

    totalPages = () => {
        const { itemsPerPage } = this.state;
        const totalMasculinos = this.state.servicosConsumidosMasculinos.length;
        const totalFemininos = this.state.servicosConsumidosFemininos.length;
        return Math.ceil((totalMasculinos + totalFemininos) / itemsPerPage);
    }

    render() {
        const { servicosConsumidosMasculinos, servicosConsumidosFemininos, currentPage } = this.state;


        // Lógica de Paginação
        const totalPages = this.totalPages();
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

        // Índices de itens para a página atual
        const indexOfLastService = currentPage * this.state.itemsPerPage;
        const indexOfFirstService = indexOfLastService - this.state.itemsPerPage;
        const allServices = [...servicosConsumidosMasculinos, ...servicosConsumidosFemininos];
        const currentServices = allServices.slice(indexOfFirstService, indexOfLastService);

        return (
            <div>
                <h5><strong>Listagem dos Serviços Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    {currentServices.length === 0 ? (
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
                                {currentServices.map((servico, index) => (
                                    <tr key={index}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.quantidade}  {this.renderQuantidade(servico.quantidade)} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    {currentServices.length === 0 ? (
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
                                {currentServices.map((servico, index) => (
                                    <tr key={index}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.quantidade} {this.renderQuantidade(servico.quantidade)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Paginação */}
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className={currentPage === number ? "active" : ""}>
                                <a href="#!" onClick={() => this.handlePageChange(number)}>{number}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListagemServicosMaisConsumidosPorGenero;
