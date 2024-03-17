import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        if (this.clientes.length === 0) {
            console.log("\nNenhum cliente foi cadastrado ainda.\n");
        } else {
            console.log(`\nLISTA DE TODOS OS CLIENTES:\n`);

            this.clientes.forEach(cliente => {
                console.log(`---------------------------`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`RG: ${cliente.getRgs}`);
                console.log(`Telefone: ${cliente.getTelefones}`);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`---------------------------`);
            });
            console.log(`\n`);
        }
    }

}
