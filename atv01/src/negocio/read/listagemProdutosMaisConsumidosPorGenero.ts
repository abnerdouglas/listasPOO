import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidosPorGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {}

    public listarMaisConsumidosPorGenero(genero: string): void {
        if (this.clientes.length === 0) {
            return;
        }
        
        console.log(`\n`)
        console.log(`LISTA DOS PRODUTOS MAIS CONSUMUIDOS PELO GÊNERO ${genero}:`);
        console.log(`--------------------------------------------------`)
        const clientesDoGenero = this.clientes.filter(cliente => cliente.genero === genero);

        const frequenciaPorItem = new Map<string, number>();
        clientesDoGenero.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => this.incrementarFrequencia(produto.nome, frequenciaPorItem));
        });

        const itensOrdenados = Array.from(frequenciaPorItem.entries()).sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < Math.min(10, itensOrdenados.length); i++) {
            console.log(`\n -> ${itensOrdenados[i][0]}: ${itensOrdenados[i][1]} vezes`);
        }
    }

    private incrementarFrequencia(nomeItem: string, frequenciaPorItem: Map<string, number>): void {
        const count = frequenciaPorItem.get(nomeItem) || 0;
        frequenciaPorItem.set(nomeItem, count + 1);
    }
}
