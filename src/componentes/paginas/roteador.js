import { useState } from "react";
import BarraNavegacao from "../layout/barraNavegacao";
import CadastroCliente from "../clientes/cadastroCliente";
import CadastroProduto from "../produtos/cadastroProduto";
import CadastroServico from "../servicos/cadastroServico";
import ListaClientes from "../clientes/listaClientes";
import ListaProdutos from "../produtos/listaProdutos";
import ListaServicos from "../servicos/listaServicos";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const seletorView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
    };

    const botoesBarraNavegacao = ['Clientes', 'Produtos', 'Servicos', 'Lista Clientes', 'Lista Produtos', 'Lista Servicos'];

    let componenteTela;
    switch (tela) {
        case 'Clientes':
            componenteTela = <CadastroCliente tema="purple lighten" />;
            break;
        case 'Produtos':
            componenteTela = <CadastroProduto tema="purple lighten" />;
            break;
        case 'Servicos':
            componenteTela = <CadastroServico tema="purple lighten" />;
            break;
        case 'Lista Clientes':
            componenteTela = <ListaClientes tema="purple lighten" />;
            break;
        case 'Lista Produtos':
            componenteTela = <ListaProdutos tema="purple lighten" />;
            break;
        case 'Lista Servicos':
            componenteTela = <ListaServicos tema="purple lighten" />;
            break;
        default:
            componenteTela = null;
    }

    return (
        <>
            <BarraNavegacao seletorView={seletorView} tema="purple lighten" botoes={botoesBarraNavegacao} />
            {componenteTela}
        </>
    );
}
