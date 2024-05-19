import React, { Component } from 'react';

type Produto = {
    id: number;
    nome: string;
    genero: string;
    quantidade: number
};

type State = {
    produtos: Produto[];
};

export default class ListagemProdutosMaisConsumidosPorGenero extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            produtos: [
                {
                    id: 1,
                    nome: 'Perfume',
                    genero: 'Feminino',
                    quantidade: 12
                },
                {
                    id: 2,
                    nome: 'Creme de Barbear',
                    genero: 'Masculino',
                    quantidade: 6
                },
            ]
        };
    }

    render() {
        return (
            <div className="container">
                <h5><strong>Listagem dos Produtos Mais Consumidos Por Gênero</strong></h5>
                <hr />
                <div>
                    <h6>Gênero Masculino</h6>
                    <table className="bordered striped centered highlight responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map(produto => {
                                if (produto.genero === 'Masculino') {
                                    return (
                                        <tr key={produto.id}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.genero}</td>
                                            <td>{produto.quantidade}</td>
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
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map(produto => {
                                if (produto.genero === 'Feminino') {
                                    return (
                                        <tr key={produto.id}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.genero}</td>
                                            <td>{produto.quantidade}</td>
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

