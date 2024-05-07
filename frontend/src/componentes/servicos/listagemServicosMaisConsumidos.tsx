import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorServicos from "../../buscadores/buscadorServico";
import RemovedorServico from "../../removedores/removedorServico";
import RemovedorServicoLocal from "../../removedores/local/removedorServicoLocal";

interface Servico {
    id: string;
    nome: string;
    descricao: string;
    duracao: string;
    preco: string;
    generoConsumidor: string;  
    quantidadeConsumida: string;
}

interface State {
    servicos: Servico[] | Object[] | any;
}

class ListagemServicosMaisConsumidos extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            servicos: [],
        };
    }

    public async buscarServicos() {
        let buscadorServicos = new BuscadorServicos();
        const servicos = await buscadorServicos.buscar();
        
        servicos.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida)

        // Pegar os 10 servicos mais consumidos
        const servicosMaisConsumidos = servicos.slice(0, 10);
        this.setState({ servicos: servicosMaisConsumidos });
    }

    public excluirRemoto(idServico: string) {
        let removedor = new RemovedorServico();
        removedor.remover({ id: idServico });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorServicoLocal();
        let servicos = removedorLocal.remover(this.state.servicos, id);
        this.setState({
            servicos: servicos
        });
        this.excluirRemoto(id);
    }

    componentDidMount() {
        this.buscarServicos();
    }

    render() {
        const { servicos } = this.state;

        return (
            <div>
                <h5><strong>Listagem dos Serviços Mais Consumidos</strong></h5>
                <hr />
                {servicos.length === 0 ? (
                    <p>Não existem serviços cadastrados.</p>
                ) : (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Duração</th>
                            <th>Preço</th>
                            <th>Gênero Consumidor</th>
                            <th>Quantidade Consumida</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicos.map((servico: Servico) => (
                            <tr key={servico.id}>
                                <td>{servico.nome}</td>
                                <td>{servico.descricao}</td>
                                <td>{servico.duracao} min</td>
                                <td>R${servico.preco},00</td>
                                <td>{servico.generoConsumidor}</td>
                                <td>{servico.quantidadeConsumida} serviços</td>
                                <td>
                                    <button className="btn-small red" onClick={(e) => this.excluirLocal(servico.id, e)}>Excluir</button>
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

export default ListagemServicosMaisConsumidos;
