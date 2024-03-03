import CadastroListaClientes from "../negocio/create/cadastroListaClientes"
import Cliente from "./cliente"
import Produto from "./produto"

export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private cadastro: Array<CadastroListaClientes>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.cadastro = []
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
    
}