import Cliente from "../../modelo/cliente";

export default class ListagemTop10PioresConsumidores {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLISTA DOS 10 CLIENTES QUE MENOS(-) CONSUMIRAM PRODUTOS:\n`);

        const top10Clientes = this.listarTop10CPioresClientes();

        if (top10Clientes.length === 0) {
            console.log("Nenhum cliente foi cadastrado ainda.\n");
        } else {
            top10Clientes.forEach((cliente, index) => {
                console.log(`--------------------------------------`);
                console.log(`Posição: ${index + 1}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`Frequência de consumo: ${cliente.frequenciaConsumo}`);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
    }

    private listarTop10CPioresClientes(): Array<Cliente> {
        const clientesQuantidade: Map<Cliente, number> = new Map();

        this.clientes.forEach(cliente => {
            const quantidadeProdutos = cliente.getProdutosConsumidos.length;
            const frequencia = quantidadeProdutos;
           
            cliente.frequenciaConsumo = frequencia;
            clientesQuantidade.set(cliente, frequencia);
        });

        const clientesOrdenados = Array.from(clientesQuantidade.keys()).sort((clienteA, clienteB) => {
            const frequenciaClienteA = clientesQuantidade.get(clienteA) ?? 0;
            const frequenciaClienteB = clientesQuantidade.get(clienteB) ?? 0;
            return frequenciaClienteA - frequenciaClienteB;
        });

        const top10PioresClientes = clientesOrdenados.slice(0, 10);

        return top10PioresClientes;
    }
}