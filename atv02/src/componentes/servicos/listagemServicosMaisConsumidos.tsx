import React, { Component } from 'react';

type Servico = {
  id: number;
  nome: string;
  quantidade: number
};

type State = {
  servicos: Servico[];
};

export default class ListagemServicosMaisConsumidos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      servicos: [
        {
          id: 1,
          nome: 'Corte de Cabelo',
          quantidade: 15
        },
        {
          id: 2,
          nome: 'Massagem',
          quantidade: 10
        }
      ]
    };
  }

  render() {
    return (
        <div className="container">
        <h5><strong>Listagem dos Serviços Mais Consumidos</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade Consumo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.servicos.map(servico => (
                <tr key={servico.id}>
                  <td>{servico.id}</td>
                  <td>{servico.nome}</td>
                  <td>{servico.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}

