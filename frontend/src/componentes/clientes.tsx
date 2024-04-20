import React, { Component, MouseEvent, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscadores/buscadorClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import AtualizadorCliente from "../atualizadores/atualizadorCliente";

interface Cliente {
    id: string;
    nome: string;
    sobreNome: string;
    email: string;
}

interface State {
    clientes: Cliente[] | Object[];
    modoEdicao: boolean;
    clienteEditando: Cliente | null;
}

class Clientes extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
            modoEdicao: false,
            clienteEditando: null
        };
        this.excluirLocal = this.excluirLocal.bind(this);
        this.atualizarCliente = this.atualizarCliente.bind(this);
    }

    public atualizarCliente(cliente: Cliente) {
        let atualizadorCliente = new AtualizadorCliente();
        atualizadorCliente.atualizar(cliente);
        const clientesAtualizados = this.state.clientes.map(c => {
            if (c.id === cliente.id) {
                return cliente;
            } else {
                return c;
            }
        });
        this.setState({
            clientes: clientesAtualizados,
            modoEdicao: false,
            clienteEditando: null
        });
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = buscadorClientes.buscar();
        clientes.then(clientes => {
            this.setState({ clientes });
        });
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente();
        removedor.remover({ id: idCliente });
    }

    public excluirLocal(id: string, e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        let removedorLocal = new RemovedorClienteLocal();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.setState({
            clientes: clientes
        });
        this.excluirRemoto(id);
    }

    public ativarEdicao(cliente: Cliente, e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        this.setState({
            modoEdicao: true,
            clienteEditando: cliente
        });
    }

    componentDidMount() {
        this.buscarClientes();
    }

    render() {
        const { clientes, modoEdicao, clienteEditando } = this.state;

        if (clientes.length > 0) {
            return (
                <div>
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Clientes</h4></li>
                        {clientes.map(cliente => (
                            <li className="collection-item avatar" key={cliente.id}>
                                <i className="material-icons circle">person</i>
                                <span className="title">Nome: {cliente.nome}</span>
                                <p> Sobrenome: {cliente.sobreNome}</p>
                                <p> Email: {cliente.email}</p>
                                <div className="secondary-content">
                                    <a href="/" onClick={(e) => this.excluirLocal(cliente.id, e)}>
                                        <i className="material-icons">block</i>
                                    </a>
                                    <a href="/" onClick={(e) => this.ativarEdicao(cliente, e)}>
                                        <i className="material-icons">edit</i>
                                    </a>
                                </div>
                                {modoEdicao && clienteEditando && cliente.id === clienteEditando.id && (
                                    <div>
                                        <h5>Editar Cliente</h5>
                                        <input
                                            type="text"
                                            value={clienteEditando.nome}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                clienteEditando: { ...clienteEditando, nome: e.target.value }
                                            })}
                                        />
                                        <input
                                            type="text"
                                            value={clienteEditando.sobreNome}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                clienteEditando: { ...clienteEditando, sobreNome: e.target.value }
                                            })}
                                        />
                                        <input
                                            type="text"
                                            value={clienteEditando.email}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                clienteEditando: { ...clienteEditando, email: e.target.value }
                                            })}
                                        />
                                        <button className="btn waves-effect waves-light teal accent-3" onClick={() => this.atualizarCliente(clienteEditando)}>Salvar</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Clientes;
