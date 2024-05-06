import React, { ChangeEvent, Component } from "react";
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import AtualizadorCliente from "../../atualizadores/atualizadorCliente";
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
    };
}

interface State {
    clientes: Cliente[] | Object[] | any;
    clienteEditando: Cliente | null | any;
}

class ListagemClientes extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
            clienteEditando: null
        };
        this.modalRef = React.createRef();
        this.excluirLocal = this.excluirLocal.bind(this);
        this.atualizarCliente = this.atualizarCliente.bind(this);
    }

    public atualizarCliente() {
        const { clienteEditando } = this.state;
        if (clienteEditando) {
            let atualizadorCliente = new AtualizadorCliente();
            atualizadorCliente.atualizar(clienteEditando);

            const modalInstance = M.Modal.getInstance(this.modalRef.current!);
            modalInstance?.close();

            const clientesAtualizados = this.state.clientes.map(cliente => {
                if (cliente.id === clienteEditando.id) {
                    return clienteEditando;
                } else {
                    return cliente;
                }
            });
            this.setState({
                clientes: clientesAtualizados,
                clienteEditando: null
            });
        }
    }

    public async buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        this.setState({ clientes: clientes });
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


    public abrirModalEdicao(cliente: Cliente) {
        this.setState({ clienteEditando: cliente }, () => {
            // Abrindo o modal de edição
            const modalInstance = M.Modal.getInstance(this.modalRef.current!);
            modalInstance?.open();
        });
    }

    componentDidMount() {
        this.buscarClientes();
        M.Modal.init(this.modalRef.current!);
    }

    render() {
        const { clientes, clienteEditando } = this.state;

        return (
            <div>
                <h5><strong> Listagem de Clientes </strong></h5>
                <hr />
                {clientes.length === 0 ? (
                    <p>Não existem clientes cadastrados.</p>
                ) : (
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome</th>

                                <th>Nome Social</th>

                                <th>CPF</th>

                                <th>Data Emissão CPF</th>

                                <th>RG</th>

                                <th>Data Emissão RG</th>

                                <th>Gênero</th>

                                <th>Telefone</th>

                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente: Cliente) => (
                                <tr key={cliente.id}>

                                    <td>{cliente.nome}</td>

                                    <td>{cliente.nomeSocial}</td>

                                    <td>{cliente.cpf}</td>

                                    <td>{cliente.dataEmissaoCpf}</td>

                                    <td>{cliente.rg}</td>

                                    <td>{cliente.dataEmissaoRg}</td>

                                    <td>{cliente.genero}</td>

                                    {Array.isArray(cliente.telefones) && cliente.telefones.map((telefones, index) => (
                                        <td key={index}> ({telefones.ddd}) {telefones.numero}</td>
                                    ))}
                                    <td>
                                        <button className="btn-small purple" onClick={() => this.abrirModalEdicao(cliente)}>Editar</button>
                                        <button className="btn-small red" onClick={(e) => this.excluirLocal(cliente.id, e)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* Modal de Edição */}
                <div ref={this.modalRef} className="modal">
                    <div className="modal-content">
                        <h4>Editar Cliente</h4>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={clienteEditando?.nome || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, nome: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Nome Social"
                                value={clienteEditando?.nomeSocial || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, nomeSocial: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="CPF"
                                value={clienteEditando?.cpf || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, cpf: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Data Emissão CPF"
                                value={clienteEditando?.dataEmissaoCpf || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, dataEmissaoCpf: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="RG"
                                value={clienteEditando?.rg || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, rg: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Data Emissão RG"
                                value={clienteEditando?.dataEmissaoRg || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, dataEmissaoRg: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Gênero"
                                value={clienteEditando?.genero || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...clienteEditando!, genero: e.target.value };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Telefone DDD"
                                value={clienteEditando?.telefones[0].ddd || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = {
                                        ...clienteEditando!,
                                        telefones: [{
                                            ...clienteEditando!.telefones[0],
                                            ddd: e.target.value
                                        }]
                                    };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Telefone Número"
                                value={clienteEditando?.telefones[0].numero || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = {
                                        ...clienteEditando!,
                                        telefones: [{
                                            ...clienteEditando!.telefones[0],
                                            numero: e.target.value
                                        }]
                                    };
                                    this.setState({ clienteEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn purple lighten" onClick={() => this.atualizarCliente()}>Salvar</button>
                        <button className="btn red lighten modal-close">Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListagemClientes;
