import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n-> Início do cadastro do cliente <-`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Informe o nome social do cliente: `)
        let numeroCpf = this.entrada.receberTexto(`Informe o número do CPF: `);
        let dataCpf: string;
        while (true) {
            dataCpf = this.entrada.receberTexto(`Informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
            if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataCpf)) {
                break;
            }
            console.log("Formato de data inválido. Por favor, digite no formato dd/mm/yyyy.");
        }
        let genero = this.entrada.receberTexto(`Informe o gênero, masculino (M) ou feminino (F): `).toUpperCase()
        let dddTelefone = this.entrada.receberTexto(`Informe o DDD do telefone: `)
        let numeroTelefone = this.entrada.receberTexto(`Informe o número do telefone no formato xxxxx-xxxx: `)
    
        let partesDataCpf = dataCpf.split('/')
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
        let dataEmissaoCpf = new Date(anoCpf, mesCpf - 1, diaCpf)
        let cpf = new CPF(numeroCpf, dataEmissaoCpf);
    
        let telefones: Array<Telefone> = []; 
        let rgArray: Array<RG> = []; 
        let x = 1
        
        while (true) {
            let numeroRg = this.entrada.receberTexto(`Informe o número do RG ${x} (ou digite 'fim' para encerrar): `)
            x++
            if (numeroRg.toLowerCase() === 'fim') break;
    
            let dataRg: string;
            while (true) {
                dataRg = this.entrada.receberTexto(`Informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataRg)) {
                    break;
                }
                console.log("Formato de data inválido. Por favor, digite no formato dd/mm/yyyy.");
            }
    
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg - 1, diaRg)
            let rg = new RG(numeroRg, dataEmissaoRg);
    
            rgArray.push(rg);
        }
    
        let telefone = new Telefone(dddTelefone, numeroTelefone)
        telefones.push(telefone);
    
        let cliente = new Cliente(nome, nomeSocial, cpf, rgArray, telefones, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
    
}