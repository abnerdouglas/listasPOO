import React, { Component, MouseEvent, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscadores/buscadorClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import AtualizadorCliente from "../atualizadores/atualizadorCliente";
import './styles.css'

interface Cliente {
    id: string;
    nome: string;
    sobreNome: string;
    email: string;
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    };
    telefones: {
        ddd: string;
        numero: string;
    };
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
                                <i className="material-icons circle purple lighten">person</i>

                                <h6><strong> Nome:  </strong> {cliente.nome}</h6>

                                <h6><strong> Sobrenome: </strong> {cliente.sobreNome}</h6>

                                <h6><strong> Email: </strong> {cliente.email}</h6>

                                <h6><strong> Estado: </strong> {cliente.endereco ? cliente.endereco.estado : ''}</h6>

                                <h6><strong> Cidade: </strong> {cliente.endereco ? cliente.endereco.cidade : ''}</h6>

                                <h6><strong> Bairro: </strong> {cliente.endereco ? cliente.endereco.bairro : ''}</h6>

                                <h6><strong> Rua: </strong> {cliente.endereco ? cliente.endereco.rua : ''}</h6>

                                <h6><strong> Número: </strong> {cliente.endereco ? cliente.endereco.numero : ''}</h6>

                                <h6><strong> Código Postal: </strong> {cliente.endereco ? cliente.endereco.codigoPostal : ''}</h6>

                                <h6><strong> Informações Adicionais: </strong> {cliente.endereco ? cliente.endereco.informacoesAdicionais : ''}</h6>

                                {Array.isArray(cliente.telefones) && cliente.telefones.map((telefones, index) => (
                                    <h6 key={index}> <strong> Telefone: </strong> ({telefones.ddd}) {telefones.numero}</h6>
                                ))}

                                <div className="secondary-content">
                                    <a href="/" className="button-edition" onClick={(e) => this.excluirLocal(cliente.id, e)}>
                                        <i className="material-icons">block</i>
                                    </a>
                                    <span className="button-spacing"></span>
                                    <a href="/" onClick={(e) => this.ativarEdicao(cliente, e)}>
                                        <i className="material-icons">edit</i>
                                    </a>
                                </div>

                                {modoEdicao && clienteEditando && cliente.id === clienteEditando.id && (

                                    <div className="edit-client-background">
                                        <h5><strong> Editar Cliente </strong></h5>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o nome"
                                                value={clienteEditando.nome}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, nome: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o Sobrenome"
                                                value={clienteEditando.sobreNome}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, sobreNome: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o email"
                                                value={clienteEditando.email}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, email: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o estado"
                                                value={clienteEditando.endereco.estado}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, estado: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite a cidade"
                                                value={clienteEditando.endereco.cidade}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, cidade: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o bairro"
                                                value={clienteEditando.endereco.bairro}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, bairro: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite a rua"
                                                value={clienteEditando.endereco.rua}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, rua: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o número residencial"
                                                value={clienteEditando.endereco.numero}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, numero: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite o código postal"
                                                value={clienteEditando.endereco.codigoPostal}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, codigoPostal: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                placeholder="Edite as informações adicionais"
                                                value={clienteEditando.endereco.informacoesAdicionais}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({
                                                    clienteEditando: { ...clienteEditando, endereco: { ...clienteEditando.endereco, informacoesAdicionais: e.target.value } }
                                                })}
                                            />
                                        </div>
                                        <button className="btn purple lighten" onClick={() => this.atualizarCliente(clienteEditando)}>Salvar</button>
                                        <button className="btn red lighten" onClick={() => this.setState({ modoEdicao: false, clienteEditando: null })}> Cancelar </button>
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
