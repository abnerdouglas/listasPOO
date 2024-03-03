import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class ExcluirCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public excluir(): void {
        console.log(`\n-> Início da exclusão do cliente <-`);
    
        let nome = this.entrada.receberTexto(`Digite o nome do cliente a ser excluído: `);
        let clienteIndex = this.buscarIndiceClientePorNome(nome);
    
        if (clienteIndex !== -1) {
            this.clientes.splice(clienteIndex, 1);
            console.log('Cliente excluído com sucesso!');
        } else {
            console.log('Cliente não encontrado!');
        }
    }
    
    private buscarIndiceClientePorNome(nome: string): number {
        return this.clientes.findIndex(cliente => cliente.nome === nome);
    }
}