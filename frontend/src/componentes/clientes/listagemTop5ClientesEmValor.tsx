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
    servicosConsumidos: Servico[];
    produtosConsumidos: Produto[];
    links: { rel: string; href: string }[];
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

    async componentDidMount() {
        await this.buscarClientes();
    }

    async buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();
        // Ordenar os clientes pelo valor consumido em ordem decrescente
        clientes.sort((a, b) => this.calcularValorConsumido(b) - this.calcularValorConsumido(a));
        // Pegar os 5 primeiros clientes
        const top5Clientes = clientes.slice(0, 5);
        this.setState({ clientes: top5Clientes });
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
                            {clientes.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>R${this.calcularValorConsumido(cliente)},00</td>
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
