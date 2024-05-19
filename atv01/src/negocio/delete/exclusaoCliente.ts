import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoCliente extends Exclusao{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public excluir(): void {
        if (this.clientes.length == 0) {
            console.log(`Não há clientes cadastrados ainda.`)
            return;
        }

        console.log(`\n-> Início da exclusão do cliente <-`);
    
        console.log("\nClientes disponíveis:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`);
        });
    
        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente a ser excluído através do número: `);
    
        if (escolhaCliente < 1 || escolhaCliente > this.clientes.length || isNaN(escolhaCliente)) {
            console.log("\nOpção inválida.");
            return;
        } 
    
        let clienteIndex = escolhaCliente - 1; // Índice do cliente no array
    
        if (clienteIndex >= 0 && clienteIndex < this.clientes.length) {
            this.clientes.splice(clienteIndex, 1);
            console.log('\nCliente excluído com sucesso!');
        } else {
            console.log('\nÍndice de cliente inválido!');
        }
    }
    
}