import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";
import RemovedorCliente from "../../removedores/removedorCliente";
import RemovedorClienteLocal from "../../removedores/local/removedorClienteLocal";

interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}

interface Servico {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}

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
    servicosConsumidos: Servico[];
    produtosConsumidos: Produto[];
}

interface State {
    clientes: Cliente[] | Object[] | any;
    currentPage: number;
    itemsPerPage: number;
}

class Listagem10PioresClientesEmConsumo extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
            currentPage: 1,
            itemsPerPage: 5 // Número fixo de itens por página
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async componentDidMount() {
        await this.buscarClientes();
    }

    async buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

        // Ordenar os clientes pelo valor consumido em ordem crescente
        clientes.sort((a, b) => this.calcularValorConsumido(a) - this.calcularValorConsumido(b));

        this.setState({ clientes });
    }

    calcularValorConsumido(cliente: Cliente): number {
        // Soma dos preços dos produtos e serviços consumidos
        const produtos = cliente.produtosConsumidos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
        const servicos = cliente.servicosConsumidos.reduce((total, servico) => total + servico.preco * servico.quantidade, 0);
        return produtos + servicos;
    }

    excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente();
        removedor.remover({ id: idCliente });
    }

    excluirLocal(id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        let removedorLocal = new RemovedorClienteLocal();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.setState({
            clientes: clientes
        });
        this.excluirRemoto(id);
    }

    handlePageChange = (pageNumber: number) => {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { clientes, currentPage, itemsPerPage } = this.state;

        // Lógica de Paginação
        const indexOfLastClient = currentPage * itemsPerPage;
        const indexOfFirstClient = indexOfLastClient - itemsPerPage;
        const currentClients = clientes.slice(indexOfFirstClient, indexOfLastClient);
        const totalPages = Math.ceil(clientes.length / itemsPerPage);

        return (
            <div>
                <h5><strong>Listagem Dos 10 Clientes Que Menos Consumiram em Valor</strong></h5>
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
                                    <th>Valor Consumido</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClients.map((cliente) => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>R${this.calcularValorConsumido(cliente)},00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Paginação */}
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                                    <a href="#!" onClick={() => this.handlePageChange(index + 1)}>{index + 1}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Listagem10PioresClientesEmConsumo;
