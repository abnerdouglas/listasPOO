import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";
import RemovedorCliente from "../../removedores/removedorCliente";
import RemovedorClienteLocal from "../../removedores/local/removedorClienteLocal";

interface Cliente {
    id: string;
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    rg: string;
    dataEmissaoRg: string;
    genero: string;
    telefones: {
        ddd: string;
        numero: string;
    }[];
    produtosConsumidos: {
        quantidade: number;
    }[];
    servicosConsumidos: {
        quantidade: number;
    }[];
}

interface State {
    clientes: Cliente[] | Object[] | any;
    currentPage: number;
    itemsPerPage: number;
}

class ListagemTop10ClientesEmConsumo extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
            currentPage: 1,
            itemsPerPage: 5
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async componentDidMount() {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        this.setState({ clientes });
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente();
        removedor.remover({ id: idCliente });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorClienteLocal();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.setState({
            clientes: clientes
        });
        this.excluirRemoto(id);
    }

    handlePageChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) {
        event.preventDefault();
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { clientes, currentPage, itemsPerPage } = this.state;

        // Ordenar os clientes por total consumido
        const clientesOrdenados = clientes.sort((a: Cliente, b: Cliente) => {
            const totalA = a.produtosConsumidos.reduce((acc, produto) => acc + produto.quantidade, 0) + 
                           a.servicosConsumidos.reduce((acc, servico) => acc + servico.quantidade, 0);
            const totalB = b.produtosConsumidos.reduce((acc, produto) => acc + produto.quantidade, 0) + 
                           b.servicosConsumidos.reduce((acc, servico) => acc + servico.quantidade, 0);
            return totalB - totalA;
        });

        // Lógica de Paginação
        const indexOfLastClient = currentPage * itemsPerPage;
        const indexOfFirstClient = indexOfLastClient - itemsPerPage;
        const currentClients = clientesOrdenados.slice(indexOfFirstClient, indexOfLastClient);
        const totalPages = Math.ceil(clientesOrdenados.length / itemsPerPage);

        return (
            <div>
                <h5><strong>Listagem dos 10 Clientes Que Mais Consumiram Produtos e Serviços</strong></h5>
                <hr />

                {clientes.length === 0 ? (
                    <p>Não existem clientes cadastrados.</p>
                ) : (
                    <div>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Total Consumido</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClients.map((cliente: Cliente) => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>
                                            {cliente.produtosConsumidos.reduce((acc, produto) => acc + produto.quantidade, 0) + 
                                             cliente.servicosConsumidos.reduce((acc, servico) => acc + servico.quantidade, 0)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Paginação */}
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className={index + 1 === currentPage ? "active" : "waves-effect"} key={index}>
                                    <a href="#!" onClick={(e) => this.handlePageChange(e, index + 1)}>{index + 1}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default ListagemTop10ClientesEmConsumo;
