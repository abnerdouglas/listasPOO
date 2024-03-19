import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListagemClientes from "./clientes/listagemCliente";
import CadastroCliente from "./clientes/cadastroCliente";
import CadastroProduto from "./produtos/cadastroProduto";
import CadastroServico from "./servicos/cadastroServico";
import ListagemProdutos from "./produtos/listagemProduto";
import ListagemServicos from "./servicos/listagemServico";

type State = {
    tela: string
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Cadastro Cliente'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: React.MouseEvent) {
        evento.preventDefault();
        console.log(novaTela);
        this.setState({
            tela: novaTela
        });
    }

    render() {
        const { tela } = this.state;
        const barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="purple lighten-4"
                botoes={['Cadastro Cliente', 'Cadastro Produto','Cadastro Servico', 'Lista de Clientes', 'Lista de Produtos', 'Lista de Servicos']}
            />
        );

        switch (tela) {
            case 'Cadastro Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroCliente tema="purple lighten-4" /> 
                    </>
                );
            case 'Cadastro Produto':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroProduto tema="purple lighten-4" />
                    </>
                );
            case 'Cadastro Servico':
                return (
                    <>
                        {barraNavegacao}
                        <CadastroServico tema="purple lighten-4" />
                    </>
                );
            case 'Lista de Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListagemClientes/>
                    </>
                );
            case 'Lista de Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <ListagemProdutos/>
                    </>
                );
            case 'Lista de Servicos':
                return (
                    <>
                        {barraNavegacao}
                        <ListagemServicos/>
                    </>
                );
        }
    }
}
