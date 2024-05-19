import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPorGenero extends Listagem{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }
    public listar(): void {}
    
    public listarPorGenero(genero: string): void {
        const clientesPorGenero = this.clientes.filter(cliente => cliente.genero === genero);

        if (this.clientes.length === 0){
            return;
        }
        else if (clientesPorGenero.length === 0) {
            console.log(`Não há clientes do gênero ${genero} cadastrados.\n`);
        } else {
            console.log(`\nLISTA DE CLIENTES DO GÊNERO ${genero}:`);

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