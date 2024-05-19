import React, { Component } from 'react';

type Produto = {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  genero: string;
};

type State = {
  produtos: Produto[];
};

export default class ListagemProdutos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produtos: [
        {
          id: 1,
          nome: 'Perfume',
          marca: 'Boticário',
          preco: 120,
          genero: 'Feminino'
        },
        {
          id: 2,
          nome: 'Creme de Barbear',
          marca: 'Gilette',
          preco: 50,
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
        <h5><strong>Listagem dos Produtos</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Marca</th>
                <th scope="col">Preço(R$)</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.marca}</td>
                  <td>R${produto.preco},00</td>
                  <td>
                    <button className="btn btn-small purple lighten-1" onClick={() => this.handleEditarCliente(produto.id)}>Editar</button>
                    <button className="btn btn-small red" onClick={() => this.handleExcluirCliente(produto.id)}>Excluir</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}

