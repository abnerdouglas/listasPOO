import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }
    
    public listar(): void {}

    public listarMaisConsumidos(n: number): void {
        if (this.clientes.length === 0) {
            return;
        }
    
        const frequencia: Map<string, number> = new Map();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => this.incrementarFrequencia(produto.nome, frequencia));
        });

        const produtosOrdenados = Array.from(frequencia.entries()).sort((a, b) => b[1] - a[1]);

        console.log(`LISTA DOS ${n} PRODUTOS MAIS CONSUMIDOS:`);
        console.log(`---------------------------------------`)
        for (let i = 0; i < Math.min(n, produtosOrdenados.length); i++) {
            console.log(`\n -> ${produtosOrdenados[i][0]}: ${produtosOrdenados[i][1]} vezes`);
        }
    }

    private incrementarFrequencia(nome: string, frequencia: Map<string, number>): void {
        const count = frequencia.get(nome) || 0;
        frequencia.set(nome, count + 1);
    }
}
