import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Atualizacao from "./atualizacao"

export default class AtualizacaoCliente extends Atualizacao{
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente foi cadastrado ainda.\n");
            return;
        }
        console.log(`\n-> Início da atualização do cliente <-`);
    
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
    
        let novoNome = this.entrada.receberTexto(`Informe o nome do cliente: `);
        let novoNomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `);
        let valor = this.entrada.receberTexto(`Informe o CPF do cliente: `);
        let data = this.entrada.receberTexto(`Informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
    
        let partesData = data.split('/');
        let ano = parseInt(partesData[2]);
        let mes = parseInt(partesData[1]) - 1; // Subtrai 1 porque os meses são zero indexados
        let dia = parseInt(partesData[0]);
        let dataEmissao = new Date(ano, mes, dia);
        let novoCpf = new CPF(valor, dataEmissao);
    
        let numeroRg = this.entrada.receberTexto(`Informe o número do RG: `);
        let dataRg = this.entrada.receberTexto(`Informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/');
        let anoRg = parseInt(partesDataRg[2]);
        let mesRg = parseInt(partesDataRg[1]) - 1; // Subtrai 1 porque os meses são zero indexados
        let diaRg = parseInt(partesDataRg[0]);
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        let novoRg = new RG(numeroRg, dataEmissaoRg);
    
        let dddTelefone = this.entrada.receberTexto(`Informe o DDD do telefone: `);
        let numeroTelefone = this.entrada.receberTexto(`Informe o número do telefone no formato xxxxx-xxxx: `);
        let telefone = new Telefone(dddTelefone, numeroTelefone);
    
        let novoGenero = this.entrada.receberTexto(`Informe o gênero do cliente, masculino (M) ou feminino (F): `);
    
        clienteEscolhido.atualizarDados(novoNome, novoNomeSocial, novoCpf, [novoRg], [telefone], novoGenero);
        console.log('Cliente atualizado com sucesso!');
    }
}