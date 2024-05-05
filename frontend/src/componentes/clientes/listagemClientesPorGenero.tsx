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

export default class ListagemClientesPorGenero extends Component<{}, State> {
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
          <h5><strong>Listagem de Clientes Por Gênero</strong></h5>
          <hr/>
          <div>
            <h6>Gênero Masculino</h6>
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
                {this.state.clientes.map(cliente => {
                  if (cliente.genero === 'masculino') {
                    return (
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
                  <th scope="col">Nome Social</th>
                  <th scope="col">CPF</th>
                  <th scope="col">RG</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Gênero</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {this.state.clientes.map(cliente => {
                  if (cliente.genero === 'feminino') {
                    return (
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

