import CadastroListaClientes from "../negocio/create/cadastroListaClientes"
import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private cadastro: Array<CadastroListaClientes>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.cadastro = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes 
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getLista(){
        return this.cadastro
    }
    public get getServicos(){
        return this.servicos
    }
    
}