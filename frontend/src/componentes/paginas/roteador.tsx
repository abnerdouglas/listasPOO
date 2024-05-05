import { Component } from "react";
import BarraNavegacao from "../layout/barraNavegacao";
import ListagemClientes from "../clientes/listagemCliente";
import ListagemProdutos from "../produtos/listagemProduto";
import ListagemServicos from "../servicos/listagemServico";
import ListagemClientesPorGenero from "../clientes/listagemClientesPorGenero";
import './styles.css';
import ListagemTop10Clientes from "../clientes/listagemTop10Clientes";
import ListagemProdutosMaisConsumidos from "../produtos/listagemProdutosMaisConsumidos";
import ListagemServicosMaisConsumidos from "../servicos/listagemServicosMaisConsumidos";
import ListagemProdutosMaisConsumidosPorGenero from "../produtos/listagemProdutosMaisConsumidosPorGenero";
import ListagemTop10PioresClientes from "../clientes/listagemTop10PioresClientes";
import ListagemTop5ClientesEmValor from "../clientes/listagemTop5ClientesEmValor";
import FormularioCliente from "../clientes/formularioCliente";
import FormularioProduto from "../produtos/formularioProduto";
import FormularioServico from "../servicos/formularioServico";


type State = {
    tela: string
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Formulário Cliente'
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
                tema="purple lighten"
                botoes={['Formulário Cliente', 'Formulário Produto', 'Formulário Serviço', 'Lista de Clientes', 'Lista de Produtos', 'Lista de Serviços']}
            />
        );

        switch (tela) {
            case 'Formulário Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <FormularioCliente />
                        </div>
                    </>
                );
            case 'Formulário Produto':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <FormularioProduto />
                        </div>
                    </>
                );
            case 'Formulário Serviço':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <FormularioServico />
                        </div>
                    </>
                );
            case 'Lista de Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <ListagemClientes />
                        </div>
                        <div className="container-wrapper">
                            <ListagemClientesPorGenero />
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop10Clientes/>
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop10PioresClientes/>
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop5ClientesEmValor/>
                        </div>
                    </>
                );
            case 'Lista de Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <ListagemProdutos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemProdutosMaisConsumidos/>
                        </div>
                        <div className="container-wrapper">
                            <ListagemProdutosMaisConsumidosPorGenero/>
                        </div>
                    </>
                );
            case 'Lista de Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container-wrapper">
                            <ListagemServicos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemServicosMaisConsumidos/>
                        </div>
                    </>
                );
        }
    }
}
