import CPF from "./cpf"
import Produto from "./produto"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private dataCadastro: Date
    private produtosConsumidos: Array<Produto>
    public valorTotalConsumido: number;
    frequenciaConsumo: any

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.dataCadastro = new Date()
        this.produtosConsumidos = []
        this.valorTotalConsumido = 0;
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public registrarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        this.valorTotalConsumido += parseFloat(produto.preco);
    }
    public atualizarDados(nome: string, nomeSocial: string, cpf: CPF, genero: string): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
    }
}
