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
}

class ListagemClientesPorGenero extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
        };
        this.excluirLocal = this.excluirLocal.bind(this);
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

    render() {
        const { clientes } = this.state;

        // Separando clientes por gênero
        const clientesMasculinos = clientes.filter(cliente => cliente.genero === 'Masculino');
        const clientesFemininos = clientes.filter(cliente => cliente.genero === 'Feminino');

        return (
            <div>
                <h5><strong> Listagem de Clientes Por Gênero</strong></h5>
                <hr />
                
                {/* Tabela para clientes masculinos */}
                <h6><strong>Clientes Masculinos</strong></h6>
                {clientesMasculinos.length === 0 ? (
                    <p>Não existem clientes cadastrados do sexo masculino.</p>
                ) : (
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Gênero</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientesMasculinos.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.genero}</td>
                                    <td>
                                        <button className="btn-small red" onClick={() => this.excluirRemoto(cliente.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* Tabela para clientes femininos */}
                <h6><strong>Clientes Femininos</strong></h6>
                {clientesFemininos.length === 0 ? (
                    <p>Não existem clientes cadastrados do sexo feminino.</p>
                ) : (
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Gênero</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientesFemininos.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.genero}</td>
                                    <td>
                                        <button className="btn-small red" onClick={(e) => this.excluirLocal(cliente.id, e)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default ListagemClientesPorGenero;
