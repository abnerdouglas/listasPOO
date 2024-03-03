import Cliente from "../../modelo/cliente";

export default class ListagemTop5ClientesValor {
    private clientes: Array<Cliente>;
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLISTA DOS 5 CLIENTES QUE MAIS CONSUMIRAM EM VALOR:\n`);

        const top5Clientes = this.listarTop5Clientes();

        if (top5Clientes.length === 0) {
            console.log("Nenhum cliente foi cadastrado ainda.\n");
        } else {
            top5Clientes.forEach((cliente, index) => {
                console.log(`--------------------------------------`);
                console.log(`Posição: ${index + 1}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`Valor total: ${this.calcularValorTotalConsumido(cliente).toFixed(2)}`);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
    }

    private listarTop5Clientes(): Array<Cliente> {
        const clientesValor: Map<Cliente, number> = new Map();

        this.clientes.forEach(cliente => {
            const valorTotal = this.calcularValorTotalConsumido(cliente);
            clientesValor.set(cliente, valorTotal);
        });

        const clientesOrdenados = Array.from(clientesValor.keys()).sort((clienteA, clienteB) => {
            const valorClienteA = clientesValor.get(clienteA) ?? 0;
            const valorClienteB = clientesValor.get(clienteB) ?? 0;
            return valorClienteB - valorClienteA;
        });

        return clientesOrdenados.slice(0, 5);
    }

    private calcularValorTotalConsumido(cliente: Cliente): number {
        let total = 0;
    
        cliente.getProdutosConsumidos.forEach(produto => {
            total += parseFloat(produto.getPreco);
        });
    
        return total;
    }
    
}
