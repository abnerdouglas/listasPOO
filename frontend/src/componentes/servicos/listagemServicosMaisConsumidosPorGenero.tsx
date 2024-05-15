import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import BuscadorClientes from "../../buscadores/buscadorCliente";

interface Cliente {
    id: string;
    genero: string;
    servicosConsumidos: {
        nome: string;
        quantidade: number;
    }[];
}

interface State {
    servicosConsumidosMasculinos: { nome: string; quantidade: number }[];
    servicosConsumidosFemininos: { nome: string; quantidade: number }[];
}

class ListagemServicosMaisConsumidosPorGenero extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            servicosConsumidosMasculinos: [],
            servicosConsumidosFemininos: [],
        };
    }

    async componentDidMount() {
        const buscadorClientes = new BuscadorClientes();
        const clientes = await buscadorClientes.buscar();

        // Calcular a soma das quantidades de servicos consumidos por gênero
        const servicosConsumidosMasculinos: { [nome: string]: number } = {};
        const servicosConsumidosFemininos: { [nome: string]: number } = {};

        clientes.forEach((cliente: Cliente) => {
            cliente.servicosConsumidos.forEach((servico) => {
                if (cliente.genero === "Masculino") {
                    if (!servicosConsumidosMasculinos[servico.nome]) {
                        servicosConsumidosMasculinos[servico.nome] = 0;
                    }
                    servicosConsumidosMasculinos[servico.nome] += servico.quantidade;
                } else if (cliente.genero === "Feminino") {
                    if (!servicosConsumidosFemininos[servico.nome]) {
                        servicosConsumidosFemininos[servico.nome] = 0;
                    }
                    servicosConsumidosFemininos[servico.nome] += servico.quantidade;
                }
            });
        });

        // Converter para arrays de objetos com nome e quantidade
        const servicosArrayMasculinos = Object.entries(servicosConsumidosMasculinos).map(([nome, quantidade]) => ({ nome, quantidade }));
        const servicosArrayFemininos = Object.entries(servicosConsumidosFemininos).map(([nome, quantidade]) => ({ nome, quantidade }));

        // Ordenar os servicos pelo total consumido
        servicosArrayMasculinos.sort((a, b) => b.quantidade - a.quantidade);
        servicosArrayFemininos.sort((a, b) => b.quantidade - a.quantidade);

        this.setState({ 
            servicosConsumidosMasculinos: servicosArrayMasculinos,
            servicosConsumidosFemininos: servicosArrayFemininos,
        });
    }

    renderQuantidade = (quantidade: number) => {
        return quantidade === 1 ? "vez" : "vezes";
    }

    render() {
        const { servicosConsumidosMasculinos, servicosConsumidosFemininos } = this.state;

        return (
            <div>
                <h5><strong>Listagem dos Serviços Mais Consumidos por Gênero</strong></h5>
                <hr />

                <div>
                    <h6><strong>Clientes Masculinos</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome do Serviço</th>
                                <th>Quantidade Consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicosConsumidosMasculinos.map((servico, index) => (
                                <tr key={index}>
                                    <td>{servico.nome}</td>
                                    <td>{servico.quantidade}  {this.renderQuantidade(servico.quantidade)} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h6><strong>Clientes Femininos</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nome do Serviço</th>
                                <th>Quantidade Consumida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicosConsumidosFemininos.map((servico, index) => (
                                <tr key={index}>
                                    <td>{servico.nome}</td>
                                    <td>{servico.quantidade} {this.renderQuantidade(servico.quantidade)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListagemServicosMaisConsumidosPorGenero;
