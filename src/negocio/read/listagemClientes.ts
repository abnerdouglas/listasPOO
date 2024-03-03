import Cliente from "../../modelo/cliente";

export default class ListagemClientes {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLISTA DE TODOS OS CLIENTES:\n`);
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente foi cadastrado ainda.\n");
        } else {
            this.clientes.forEach(cliente => {
                console.log(`---------------------------`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`---------------------------`);
            });
            console.log(`\n`);
        }
    }

}
