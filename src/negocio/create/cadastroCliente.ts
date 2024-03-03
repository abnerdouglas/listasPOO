import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";

export default class CadastroCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n-> Início do cadastro do cliente <-`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = this.entrada.receberTexto(`Informe o gênero, masculino (M) ou feminino (F): `).toUpperCase()

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}