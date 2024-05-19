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
}

interface State {
    clientes: Cliente[] | Object[] | any;
    currentPage: number;
    itemsPerPage: number;
}

class ListagemClientesPorGenero extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
            currentPage: 1,
            itemsPerPage: 5
        };
        this.excluirLocal = this.excluirLocal.bind(this);
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

    public handlePageChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) {
        event.preventDefault();
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { clientes, currentPage, itemsPerPage } = this.state;

        // Separando clientes por gênero
        const clientesMasculinos = clientes.filter(cliente => cliente.genero === 'Masculino');
        const clientesFemininos = clientes.filter(cliente => cliente.genero === 'Feminino');

        // Lógica de Paginação para clientes masculinos
        const indexOfLastClientMasc = currentPage * itemsPerPage;
        const indexOfFirstClientMasc = indexOfLastClientMasc - itemsPerPage;
        const currentClientsMasc = clientesMasculinos.slice(indexOfFirstClientMasc, indexOfLastClientMasc);
        const totalPagesMasc = Math.ceil(clientesMasculinos.length / itemsPerPage);

        // Lógica de Paginação para clientes femininos
        const indexOfLastClientFem = currentPage * itemsPerPage;
        const indexOfFirstClientFem = indexOfLastClientFem - itemsPerPage;
        const currentClientsFem = clientesFemininos.slice(indexOfFirstClientFem, indexOfLastClientFem);
        const totalPagesFem = Math.ceil(clientesFemininos.length / itemsPerPage);

        return (
            <div>
                <h5><strong> Listagem de Clientes Por Gênero</strong></h5>
                <hr />
                
                {/* Tabela para clientes masculinos */}
                <h6><strong>Clientes Masculinos</strong></h6>
                {currentClientsMasc.length === 0 ? (
                    <p>Não existem clientes cadastrados do sexo masculino.</p>
                ) : (
                    <div>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Gênero</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClientsMasc.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.genero}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Paginação para clientes masculinos */}
                        <ul className="pagination">
                            {Array.from({ length: totalPagesMasc }, (_, index) => (
                                <li className={index + 1 === currentPage ? "active" : "waves-effect"} key={index}>
                                    <a href="#!" onClick={(e) => this.handlePageChange(e, index + 1)}>{index + 1}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tabela para clientes femininos */}
                <h6><strong>Clientes Femininos</strong></h6>
                {currentClientsFem.length === 0 ? (
                    <p>Não existem clientes cadastrados do sexo feminino.</p>
                ) : (
                    <div>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Gênero</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClientsFem.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.genero}</td>           
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Paginação para clientes femininos */}
                        <ul className="pagination">
                            {Array.from({ length: totalPagesFem }, (_, index) => (
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

export default ListagemClientesPorGenero;
