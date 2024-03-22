import React, { Component } from 'react';

type Servico = {
  id: number;
  nome: string;
  descricao: string;
  duracao: number;
  preco: number;
  genero: string;
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
          descricao: 'Corte Social na tesoura',
          duracao: 45,
          preco: 120.00,
          genero: 'masculino',
          quantidade: 5
        },
        {
          id: 2,
          nome: 'Massagem',
          descricao: 'Massagem nas costas',
          duracao: 50,
          preco: 180.00,
          genero: 'masculino',
          quantidade: 10
        }
      ]
    };
  }

  handleEditarCliente = (id: number) => {
    // Lógica para editar o cliente com o ID fornecido
    console.log('Editar cliente com ID:', id);
  };

  handleExcluirCliente = (id: number) => {
    // Lógica para excluir o cliente com o ID fornecido
    console.log('Excluir cliente com ID:', id);
  };

  render() {
    return (
        <div className="container">
        <h5><strong>Listagem dos Serviços MAIS Consumidos</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Duração(min)</th>
                <th scope="col">Preço(R$)</th>
                <th scope="col">Gênero</th>
                <th scope="col">Quantidade Consumo</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.servicos.map(servico => (
                <tr key={servico.id}>
                  <td>{servico.id}</td>
                  <td>{servico.nome}</td>
                  <td>{servico.descricao}</td>
                  <td>{servico.duracao}</td>
                  <td>{servico.preco}</td>
                  <td>{servico.genero}</td>
                  <td>{servico.quantidade}</td>
                  <td>
                  <button className="btn btn-small purple lighten-1" onClick={() => this.handleEditarCliente(servico.id)}>Editar</button>
                    <button className="btn btn-small red" onClick={() => this.handleExcluirCliente(servico.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}

