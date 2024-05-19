import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

type Cliente = {
  id: number;
  nome: string;
  cpf: string;
  quantidadeConsumida: number;
};

type State = {
  clientes: Cliente[];
};

export default class ListagemTop10Clientes extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clientes: [
        {
          id: 1,
          nome: 'João Silva',
          cpf: '123.456.789-00',
          quantidadeConsumida: 20
        },
        {
          id: 2,
          nome: 'Maria Oliveira',
          cpf: '987.654.321-00',
          quantidadeConsumida: 17
        },
        {
          id: 3,
          nome: 'Abner Machado',
          cpf: '123.456.789-00',
          quantidadeConsumida: 15
        },
        {
          id: 4,
          nome: 'João Silva',
          cpf: '987.654.321-00',
          quantidadeConsumida: 12
        },
        {
          id: 5,
          nome: 'Andreas Pereira',
          cpf: '123.456.789-00',
          quantidadeConsumida: 10
        },
        {
          id: 6,
          nome: 'Maria do Rosário',
          cpf: '987.654.321-00',
          quantidadeConsumida: 8
        },
        {
          id: 7,
          nome: 'Abel Ferreira',
          cpf: '123.456.789-00',
          quantidadeConsumida: 7
        },
        {
          id: 8,
          nome: 'Fernanda Ribeiro',
          cpf: '987.654.321-00',
          quantidadeConsumida: 5
        },
        {
          id: 9,
          nome: 'Deyverson',
          cpf: '123.456.789-00',
          quantidadeConsumida: 2
        },
        {
          id: 10,
          nome: 'Maria Oliveira',
          cpf: '987.654.321-00',
          quantidadeConsumida: 1
        },
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h5><strong>Listagem dos 10 Maiores Clientes Consumidores de Produtos e Serviços</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Quantidade Consumida</th>
  
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.quantidadeConsumida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}


