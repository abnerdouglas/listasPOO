import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

type Cliente = {
  id: number;
  nome: string;
  nomeSocial?: string;
  cpf: string;
  rg: string;
  telefone: string;
  genero: string;
};

type State = {
  clientes: Cliente[];
};

export default class ListagemTop10Clientes extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clientes: [
        
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
        <h5><strong>Listagem dos 10 Maiores Clientes Consumidores</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Nome Social</th>
                <th scope="col">CPF</th>
                <th scope="col">RG</th>
                <th scope="col">Telefone</th>
                <th scope="col">Gênero</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.nomeSocial || '-'}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.rg}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.genero}</td>
                  <td>
                    <button className="btn btn-small purple lighten-1" onClick={() => this.handleEditarCliente(cliente.id)}>Editar</button>
                    <button className="btn btn-small red" onClick={() => this.handleExcluirCliente(cliente.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}


