import React, { Component } from 'react';

type Produto = {
    id: number;
    nome: string;
    marca: string;
    preco: number;
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
                    marca: 'Boticário',
                    preco: 120.00,
                    genero: 'masculino',
                    quantidade: 12
                },
                {
                    id: 2,
                    nome: 'Creme de Barbear',
                    marca: 'Gilette',
                    preco: 50.00,
                    genero: 'masculino',
                    quantidade: 6
                },
                {
                    id: 3,
                    nome: 'Creme',
                    marca: 'Natura',
                    preco: 150.00,
                    genero: 'feminino',
                    quantidade: 2
                }
            ]
        };
    }

    handleEditarProduto = (id: number) => {
        // Lógica para editar o Produto com o ID fornecido
        console.log('Editar Produto com ID:', id);
    };

    handleExcluirProduto = (id: number) => {
        // Lógica para excluir o Produto com o ID fornecido
        console.log('Excluir cliente com ID:', id);
    };

    render() {
        return (
            <div className="container">
                <h5><strong>Listagem dos Produtos MAIS Consumidos Por Gênero</strong></h5>
                <hr />
                <div>
                    <h6>Gênero Masculino</h6>
                    <table className="bordered striped centered highlight responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Preço(R$)</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map(produto => {
                                if (produto.genero === 'masculino') {
                                    return (
                                        <tr key={produto.id}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.marca}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.genero}</td>
                                            <td>{produto.quantidade}</td>
                                            <td>
                                                <button className="btn btn-small purple lighten-1" onClick={() => this.handleEditarProduto(produto.id)}>Editar</button>
                                                <button className="btn btn-small red" onClick={() => this.handleExcluirProduto(produto.id)}>Excluir</button>
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
                                <th scope="col">Marca</th>
                                <th scope="col">Preço(R$)</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Quantidade de Consumo</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map(produto => {
                                if (produto.genero === 'feminino') {
                                    return (
                                        <tr key={produto.id}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.marca}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.genero}</td>
                                            <td>{produto.quantidade}</td>
                                            <td>
                                                <button className="btn btn-small purple lighten-1" onClick={() => this.handleEditarProduto(produto.id)}>Editar</button>
                                                <button className="btn btn-small red" onClick={() => this.handleExcluirProduto(produto.id)}>Excluir</button>
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

