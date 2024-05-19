import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Servico from "../../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    private clientes: Array<Cliente>;

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n-> Início do cadastro de um serviço <-`);
        let nome = this.entrada.receberTexto(`Informe o nome: `)
        let descricao = this.entrada.receberTexto(`Informe uma descrição: `)
        let duracao = this.entrada.receberTexto(`Informe o texto aproximado em min: `)
        let preco = this.entrada.receberTexto(`Informe o preço: `)
        let genero = this.entrada.receberTexto(`Informe o principal gênero consumidor: `)

        console.log("\nClientes disponíveis:");
        this.clientes.forEach((cliente, index) => {
             console.log(`${index + 1}. ${cliente.nome}`);
         });
 
        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente através do número: `);
 
        if (escolhaCliente < 1 || escolhaCliente > this.clientes.length || isNaN(escolhaCliente)) {
             console.log("Opção inválida.");
             return;
        }
 
        let clienteEscolhido = this.clientes[escolhaCliente - 1];
 
        let servico = new Servico(nome, descricao, duracao, preco, genero);
         
        clienteEscolhido.registrarServicoConsumido(servico);
 
        this.servicos.push(servico);
        console.log(`\nCadastro de Serviço Concluído :)\n`);
    }
}