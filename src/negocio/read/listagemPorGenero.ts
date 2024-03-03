import Cliente from "../../modelo/cliente";

export default class ListagemPorGenero {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }
    
    public listarPorGenero(genero: string): void {
        console.log(`\nLISTA DE CLIENTES DO GÊNERO ${genero}:`);
        const clientesPorGenero = this.clientes.filter(cliente => cliente.genero === genero);

        if (clientesPorGenero.length === 0) {
            console.log(`Não há clientes do gênero ${genero} cadastrados.\n`);
        } else {
            clientesPorGenero.forEach(cliente => {
                console.log(`--------------------------------------`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
    }
}