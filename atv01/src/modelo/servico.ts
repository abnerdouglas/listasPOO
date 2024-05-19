export default class Servico {
    public nome: string
    public descricao: string
    public duracao: string
    public preco: string
    public genero: string

    constructor(nome: string, descricao: string, duracao: string, preco: string, genero: string){
        this.nome = nome
        this.descricao = descricao
        this.duracao = duracao
        this.preco = preco
        this.genero = genero
    }
    public atualizarDados(nome: string, descricao: string, duracao: string, preco: string, genero: string): void {
        this.nome = nome;
        this.descricao = descricao
        this.duracao = duracao
        this.preco = preco
        this.genero = genero
    }

}