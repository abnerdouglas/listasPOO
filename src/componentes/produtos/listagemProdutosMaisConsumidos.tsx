import React, { Component } from 'react';

type Produto = {
  id: number;
  nome: string;
  quantidade: number
};

type State = {
  produtos: Produto[];
};

export default class ListagemProdutosMaisConsumidos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produtos: [
        {
          id: 1,
          nome: 'Perfume',
          quantidade: 12
        },
        {
          id: 2,
          nome: 'Creme de Barbear',
          quantidade: 6
        }
      ]
    };
  }

  render() {
    return (
        <div className="container">
        <h5><strong>Listagem dos Produtos Mais Consumidos</strong></h5>
        <hr />
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade de Consumo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}

