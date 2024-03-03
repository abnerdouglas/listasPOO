export default class Produto {
    public nome!: string
    public preco!: string
    public marca!: string
    public genero!: string

    constructor(nome: string,  marca: string, preco: string, genero: string){
        this.nome = nome
        this.marca = marca
        this.preco = preco
        this.genero = genero
    }
    public atualizarDados(nome: string, marca: string, preco: string, genero: string): void {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        this.genero = genero;
    }
    public get getPreco() {
        return this.preco
    }
    
}