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

export default class ListagemClientes extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clientes: [
        {
          id: 1,
          nome: 'João Silva',
          nomeSocial: 'Joãozinho da Silva',
          cpf: '123.456.789-00',
          rg: '98.765.432-1',
          telefone: '(11) 1234-5678',
          genero: 'Masculino'
        },
        {
          id: 2,
          nome: 'Maria Oliveira',
          nomeSocial: 'Maria da Silva Oliveira',
          cpf: '987.654.321-00',
          rg: '12.345.678-9',
          telefone: '(11) 9876-5432',
          genero: 'Feminino'
        },
        {
          id: 3,
          nome: 'Abner Machado',
          nomeSocial: 'Abnerzinho',
          cpf: '123.456.789-00',
          rg: '98.765.432-1',
          telefone: '(11) 1234-5678',
          genero: 'Masculino'
        },
        {
          id: 4,
          nome: 'João Silva',
          nomeSocial: 'Joãozinho',
          cpf: '987.654.321-00',
          rg: '12.345.678-9',
          telefone: '(11) 9876-5432',
          genero: 'Masculino'
        },
        {
          id: 5,
          nome: 'Andreas Pereira',
          nomeSocial: 'Entregador Ifood',
          cpf: '123.456.789-00',
          rg: '98.765.432-1',
          telefone: '(11) 1234-5678',
          genero: 'Masculino'
        },
        {
          id: 6,
          nome: 'Maria do Rosário',
          nomeSocial: 'Maria da Silva Oliveira',
          cpf: '987.654.321-00',
          rg: '12.345.678-9',
          telefone: '(11) 9876-5432',
          genero: 'Feminino'
        },
        {
          id: 7,
          nome: 'Abel Ferreira',
          nomeSocial: 'Descobridor do Palestra',
          cpf: '123.456.789-00',
          rg: '98.765.432-1',
          telefone: '(11) 1234-5678',
          genero: 'Masculino'
        },
        {
          id: 8,
          nome: 'Fernanda Ribeiro',
          nomeSocial: 'Fernandinha',
          cpf: '987.654.321-00',
          rg: '12.345.678-9',
          telefone: '(11) 9876-5432',
          genero: 'Feminino'
        },
        {
          id: 9,
          nome: 'Deyverson',
          nomeSocial: 'Deyvin',
          cpf: '123.456.789-00',
          rg: '98.765.432-1',
          telefone: '(11) 1234-5678',
          genero: 'Masculino'
        },
        {
          id: 10,
          nome: 'Maria Oliveira',
          nomeSocial: 'Maria da Silva Oliveira',
          cpf: '987.654.321-00',
          rg: '12.345.678-9',
          telefone: '(11) 9876-5432',
          genero: 'Feminino'
        },
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
        <h5><strong>Listagem Clientes</strong></h5>
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


