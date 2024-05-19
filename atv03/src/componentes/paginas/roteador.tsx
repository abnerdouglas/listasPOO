import { useState } from "react";
import ListagemClientes from "../clientes/listagemCliente";
import CadastroCliente from "../clientes/cadastroCliente";
import CadastroProduto from "../produtos/cadastroProduto";
import CadastroServico from "../servicos/cadastroServico";
import ListagemProdutos from "../produtos/listagemProduto";
import ListagemServicos from "../servicos/listagemServico";
import ListagemClientesPorGenero from "../clientes/listagemClientesPorGenero";
import ListagemTop10Clientes from "../clientes/listagemTop10Clientes";
import ListagemProdutosMaisConsumidos from "../produtos/listagemProdutosMaisConsumidos";
import ListagemServicosMaisConsumidos from "../servicos/listagemServicosMaisConsumidos";
import ListagemProdutosMaisConsumidosPorGenero from "../produtos/listagemProdutosMaisConsumidosPorGenero";
import ListagemTop10PioresClientes from "../clientes/listagemTop10PioresClientes";
import ListagemTop5ClientesEmValor from "../clientes/listagemTop5ClientesEmValor";
import BarraNavegacao from "../layout/barraNavegacao";
import ListagemServicosMaisConsumidosPorGenero from "../servicos/listagemServicosMaisConsumidosPorGenero";
import './styles.css'

const Roteador = () => {
    const [tela, setTela] = useState('Cadastro Cliente');

    const selecionarView = (novaTela) => {
        setTela(novaTela);
    }

    return (
        <>
            <BarraNavegacao
                seletorView={selecionarView}
                tema="purple lighten"
                botoes={['Cadastro Cliente', 'Cadastro Produto', 'Cadastro Servico', 'Lista de Clientes', 'Lista de Produtos', 'Lista de Servicos']}
            />
            <div className="container-wrapper">
                {tela === 'Cadastro Cliente' && <CadastroCliente tema="purple lighten" />}
                {tela === 'Cadastro Produto' && <CadastroProduto tema="purple lighten" />}
                {tela === 'Cadastro Servico' && <CadastroServico tema="purple lighten" />}
                {tela === 'Lista de Clientes' && (
                    <>
                        <div className="container-wrapper">
                            <ListagemClientes />
                        </div>
                        <div className="container-wrapper">
                            <ListagemClientesPorGenero />
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop10Clientes />
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop10PioresClientes />
                        </div>
                        <div className="container-wrapper">
                            <ListagemTop5ClientesEmValor />
                        </div>
                    </>
                )}
                {tela === 'Lista de Produtos' && (
                    <>
                        <div className="container-wrapper">
                            <ListagemProdutos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemProdutosMaisConsumidos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemProdutosMaisConsumidosPorGenero />
                        </div>
                    </>
                )}
                {tela === 'Lista de Servicos' && (
                    <>
                        <div className="container-wrapper">
                            <ListagemServicos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemServicosMaisConsumidos />
                        </div>
                        <div className="container-wrapper">
                            <ListagemServicosMaisConsumidosPorGenero />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Roteador;
