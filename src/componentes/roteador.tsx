import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroServico from "./cadastro/formularioCadastroServico";
import FormularioCadastroProduto from "./cadastro/formularioCadastroProduto";
import FormularioCadastroCliente from "./cadastro/formularioCadastroCliente";
import Home from "./home";

type State = {
    tela: string
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
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
                botoes={['Home', 'Clientes', 'Produtos','Servicos']}
            />
        );

        switch (tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="purple lighten-4" /> 
                    </>
                );
            case 'Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto tema="purple lighten-4" />
                    </>
                );
            case 'Servicos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico tema="purple lighten-4" />
                    </>
                );
            default:
                return (
                    <>
                        {barraNavegacao}
                        <Home tema="purple lighten-4" />
                    </>
                );
        }
    }
}
