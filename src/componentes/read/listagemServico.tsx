import React, { Component } from 'react';

type Servico = {
  id: number;
  nome: string;
  descricao: string;
  duracao: string;
  preco: string;
  genero: string;
};

type State = {
  servicos: Servico[];
};

class ListagemServicos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      servicos: [
        {
          id: 1,
          nome: 'Corte de Cabelo',
          descricao: 'Corte Social na tesoura',
          duracao: '45',
          preco: '120.00',
          genero: 'Masculino'
        },
        {
          id: 2,
          nome: 'Massagem',
          descricao: 'Massagem nas costas',
          duracao: '50',
          preco: '180.00',
          genero: 'Masculino'
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
        <h5><strong>Listagem dos Servicos</strong></h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Duração</th>
                <th scope="col">Preço</th>
                <th scope="col">Gênero</th>
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
                  <td>
                  <button className="btn btn-primary btn-sm" onClick={() => this.handleEditarCliente(servico.id)}>Editar</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => this.handleExcluirCliente(servico.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListagemServicos;
