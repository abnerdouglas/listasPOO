import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";

interface Cliente {
    id: string;
    servicosConsumidos: {
        nome: string;
        quantidade: number;
    }[];
}

interface State {
    servicosConsumidos: { nome: string; quantidade: number }[];
    currentPage: number;
    itemsPerPage: number;
}

class ListagemServicosMaisConsumidos extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            servicosConsumidos: [],
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

        // Calcular a soma das quantidades de servicos consumidos por todos os clientes
        const servicosConsumidos: { [nome: string]: number } = {};
        clientes.forEach((cliente: Cliente) => {
            cliente.servicosConsumidos.forEach((servico) => {
                if (!servicosConsumidos[servico.nome]) {
                    servicosConsumidos[servico.nome] = 0;
                }
                servicosConsumidos[servico.nome] += servico.quantidade;
            });
        });

        // Converter para um array de objetos com nome e quantidade
        const servicosArray = Object.entries(servicosConsumidos).map(([nome, quantidade]) => ({ nome, quantidade }));

        // Ordenar os servicos pelo total consumido
        servicosArray.sort((a, b) => b.quantidade - a.quantidade);

        this.setState({ servicosConsumidos: servicosArray });
    }

    renderQuantidade = (quantidade: number) => {
        return quantidade === 1 ? "vez" : "vezes";
    }

    render() {
        const { servicosConsumidos, currentPage, itemsPerPage } = this.state;

        // Lógica de Paginação
        const indexOfLastService = currentPage * itemsPerPage;
        const indexOfFirstService = indexOfLastService - itemsPerPage;
        const currentServices = servicosConsumidos.slice(indexOfFirstService, indexOfLastService);
        const totalPages = Math.ceil(servicosConsumidos.length / itemsPerPage);

        return (
            <div>
                <h5><strong>Listagem dos Serviços Mais Consumidos</strong></h5>
                <hr />
                {servicosConsumidos.length === 0 ? (
                    <p>Não existem serviços consumidos pelos clientes.</p>
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

export default ListagemServicosMaisConsumidos;
