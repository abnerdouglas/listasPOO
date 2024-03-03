import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"

export default class AtualizarCliente{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\n-> Início da atualização do cliente <-`);
    
        let nomeAtual = this.entrada.receberTexto(`Digite o nome do cliente a ser atualizado: `);
    
        let cliente = this.buscarClientePorNome(nomeAtual);
    
        if (cliente) {
            let novoNome = this.entrada.receberTexto(`Novo nome do cliente: `);
            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social do cliente: `);
            let valor = this.entrada.receberTexto(`Novo CPF do cliente: `);
            let data = this.entrada.receberTexto(`Informe a nova data de emissão do CPF, no padrão dd/mm/yyyy: `);
            let novoGenero = this.entrada.receberTexto(`Novo Gênero do cliente: `);
    
            let partesData = data.split('/');
            let ano = new Number(partesData[2]).valueOf();
            let mes = new Number(partesData[1]).valueOf();
            let dia = new Number(partesData[0]).valueOf();
            let dataEmissao = new Date(ano, mes - 1, dia); // Mês começa do zero no construtor Date
            let cpf = new CPF(valor, dataEmissao);
            
            cliente.atualizarDados(novoNome, novoNomeSocial, cpf, novoGenero);
            console.log('Cliente atualizado com sucesso!');
        } else {
            console.log('Cliente não encontrado!');
        }
    }
    
    private buscarClientePorNome(nome: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.nome === nome);
    }
}