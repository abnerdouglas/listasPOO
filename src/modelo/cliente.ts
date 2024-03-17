import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public genero: string
    public valorTotalConsumido: number;
    public frequenciaConsumo!: number
  
    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, telefones: Array<Telefone>, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.dataCadastro = new Date()
        this.produtosConsumidos = []
        this.valorTotalConsumido = 0;
        this.rgs = rgs
        this.telefones = telefones
        this.servicosConsumidos = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public registrarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        this.valorTotalConsumido += parseFloat(produto.preco);
    }
    public registrarServicoConsumido(servico: Servico): void {
        this.servicosConsumidos.push(servico);
        this.valorTotalConsumido += parseFloat(servico.preco);
    }
    public atualizarDados(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, telefones: Array<Telefone>, genero: string): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = rgs;
        this.telefones = telefones;
        this.genero = genero;
    }
}
