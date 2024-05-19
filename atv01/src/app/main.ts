import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa" 
import CadastroCliente from "../negocio/create/cadastroCliente";
import ListagemClientes from "../negocio/read/listagemClientes";
import CadastroProduto from "../negocio/create/cadastroProduto";
import AtualizacaoProduto from "../negocio/update/atualizacaoProduto";
import ListagemTop10Clientes from "../negocio/read/listagemTop10Clientes";
import ListagemPorGenero from "../negocio/read/listagemPorGenero";
import ListagemProdutosMaisConsumidos from "../negocio/read/listagemProdutosMaisConsumidos";
import ListagemProdutosMaisConsumidosPorGenero from "../negocio/read/listagemProdutosMaisConsumidosPorGenero";
import ListagemTop10PioresConsumidores from "../negocio/read/listagemTop10PioresConsumidores";
import ListagemTop5ClientesValor from "../negocio/read/listagemTop5ClientesValor";
import CadastroListaClientes from "../negocio/create/cadastroListaClientes";
import AtualizacaoCliente from "../negocio/update/atualizacaoCliente";
import ExclusaoCliente from "../negocio/delete/exclusaoCliente";
import ExclusaoProduto from "../negocio/delete/exclusaoProduto";
import CadastroServico from "../negocio/create/cadastroServico";
import ListagemProdutos from "../negocio/read/listagemProduto";
import ListagemServicos from "../negocio/read/listagemServicos";
import AtualizacaoServico from "../negocio/update/atualizacaoServico";
import ExclusaoServico from "../negocio/delete/exclusaoServico";

console.log(`\nBem-vindo ao cadastro de clientes, produtos e serviços do Grupo World Beauty!`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\n======== Opções ========`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar um cliente`)
    console.log(`4 - Excluir um cliente`)
    console.log(`5 - Cadastrar um produto`)
    console.log(`6 - Listar todos os produtos`)
    console.log(`7 - Atualizar um produto`)
    console.log(`8 - Excluir um produto`)
    console.log(`9 - Cadastrar um serviço`)
    console.log(`10 - Listar todos os serviços`)
    console.log(`11 - Atualizar um serviço`)
    console.log(`12 - Excluir um serviço`)
    console.log(`13 - Cadastrar 30 clientes e 30 produtos`)
    console.log(`0 - Sair`);
    console.log(`========================\n`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()

            let top10 = new ListagemTop10Clientes(empresa.getClientes)
            top10.listarTop10Clientes()

            let generoLista = new ListagemPorGenero(empresa.getClientes)
            generoLista.listarPorGenero('M')
            generoLista.listarPorGenero('F')

            let top10PioresClientes = new ListagemTop10PioresConsumidores(empresa.getClientes)
            top10PioresClientes.listar()

            let top5MaioresGastos = new ListagemTop5ClientesValor(empresa.getClientes)
            top5MaioresGastos.listar()
            break;
        case 3:
            let atualizacaoCliente = new AtualizacaoCliente(empresa.getClientes)
            atualizacaoCliente.atualizar()
            break;
        case 4:
            let exclusaoCliente = new ExclusaoCliente(empresa.getClientes)
            exclusaoCliente.excluir()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos, empresa.getClientes)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos, empresa.getClientes)
            listagemProduto.listar()

            let maisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes)
            maisConsumidos.listarMaisConsumidos(10)

            let maisConsumidosPorGenero = new ListagemProdutosMaisConsumidosPorGenero(empresa.getClientes)
            maisConsumidosPorGenero.listarMaisConsumidosPorGenero('M')
            maisConsumidosPorGenero.listarMaisConsumidosPorGenero('F')
            break;
        case 7:
            let atualizacaoProduto = new AtualizacaoProduto(empresa.getProdutos)
            atualizacaoProduto.atualizar()
            break;
        case 8:
            let exclusaoProduto = new ExclusaoProduto(empresa.getProdutos)
            exclusaoProduto.excluir()
            break;
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos, empresa.getClientes)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos, empresa.getClientes)
            listagemServico.listar()
            break;
        case 11:
            let atualizacaoServico = new AtualizacaoServico(empresa.getServicos)
            atualizacaoServico.atualizar()
            break;
        case 12:
            let exclusaoServico = new ExclusaoServico(empresa.getServicos)
            exclusaoServico.excluir()
            break;
        case 13:
            let clientesConfigurados = new CadastroListaClientes(empresa.getClientes, empresa.getProdutos)
            clientesConfigurados.lista()
            break;
        case 0:
            execucao = false
            console.log(`\nAté mais`)
            break;
        default:
            console.log(`\nOperação não entendida :(`)
    }
}