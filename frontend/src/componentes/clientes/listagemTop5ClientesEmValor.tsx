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
    };
    valorConsumido: string; 
}

interface State {
    clientes: Cliente[] | Object[] | any;
}

class ListagemTop5ClientesEmValor extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    public async buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        // Ordenar os clientes pelo valor consumido em ordem decrescente
        clientes.sort((a, b) => b.valorConsumido - a.valorConsumido);
        // Pegar os 5 primeiros clientes
        const top5Clientes = clientes.slice(0, 5);
        this.setState({ clientes: top5Clientes });
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

    componentDidMount() {
        this.buscarClientes();
    }

    render() {
        const { clientes } = this.state;

        return (
            <div>
                <h5><strong>Listagem Dos 5 Clientes Que Mais Consumiram em Valor</strong></h5>
                <hr />
                {clientes.length === 0 ? (
                    <p>Não existem clientes cadastrados.</p>
                ) : (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Valor Consumido</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente: Cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.valorConsumido}</td>
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

export default ListagemTop5ClientesEmValor;
