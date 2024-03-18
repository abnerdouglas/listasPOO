import React, { Component } from 'react';

type Produto = {
  id: number;
  nome: string;
  marca: string;
  preco: string;
  genero: string;
};

type State = {
  produtos: Produto[];
};

class ListagemProdutos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produtos: [
        {
          id: 1,
          nome: 'Perfume',
          marca: 'Boticário',
          preco: '120.00',
          genero: 'Masculino'
        },
        {
          id: 2,
          nome: 'Creme de Barbear',
          marca: 'Gilette',
          preco: '50.00',
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
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Marca</th>
                <th scope="col">Preço</th>
                <th scope="col">Gênero</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.marca}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.genero}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => this.handleEditarCliente(produto.id)}>Editar</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => this.handleExcluirCliente(produto.id)}>Excluir</button>
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

export default ListagemProdutos;
