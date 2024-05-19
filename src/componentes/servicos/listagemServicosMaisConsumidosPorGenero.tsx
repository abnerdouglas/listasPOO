import React, { Component } from 'react';

type Servico = {
    id: number;
    nome: string;
    genero: string;
    quantidade: number
};

type State = {
    servicos: Servico[];
};

export default class ListagemServicosMaisConsumidosPorGenero extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            servicos: [
                {
                  id: 1,
                  nome: 'Corte de Cabelo',
                  genero: 'Feminino',
                  quantidade: 15
                },
                {
                  id: 2,
                  nome: 'Massagem',
                  genero: 'Masculino',
                  quantidade: 10
                }
              ]
        };
    }

    render() {
        return (
            <div className="container">
                <h5><strong>Listagem dos Serviços Mais Consumidos Por Gênero</strong></h5>
                <hr />
                <div>
                    <h6>Gênero Masculino</h6>
                    <table className="bordered striped centered highlight responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.servicos.map(servico => {
                                if (servico.genero === 'Masculino') {
                                    return (
                                        <tr key={servico.id}>
                                            <td>{servico.id}</td>
                                            <td>{servico.nome}</td>
                                            <td>{servico.genero}</td>
                                            <td>{servico.quantidade}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{marginTop:50}}>
                    <h6>Gênero Feminino</h6>
                    <table className="bordered striped centered highlight responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.servicos.map(servico => {
                                if (servico.genero === 'Feminino') {
                                    return (
                                        <tr key={servico.id}>
                                            <td>{servico.id}</td>
                                            <td>{servico.nome}</td>
                                            <td>{servico.genero}</td>
                                            <td>{servico.quantidade}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

