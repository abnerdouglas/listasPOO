import Cliente from "../../modelo/cliente";

export default class ListagemProdutosMaisConsumidosPorGenero {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listarMaisConsumidosPorGenero(genero: string): void {
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
