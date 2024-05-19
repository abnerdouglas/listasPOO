import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        if (this.servicos.length == 0) {
            console.log(`Não há serviços cadastrados ainda.`)
            return;
        }

        console.log(`\n-> Início da exclusão do Serviço <-`);
    
        console.log("\nServiços disponíveis:");
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1}. ${servico.nome}`);
        });
    
        let escolhaServico = this.entrada.receberNumero(`Escolha o serviço a ser excluído através do número: `);
    
        if (escolhaServico < 1 || escolhaServico > this.servicos.length || isNaN(escolhaServico)) {
            console.log("\nOpção inválida.");
            return;
        }
    
        let servicoIndex = escolhaServico - 1; 
    
        if (servicoIndex >= 0 && servicoIndex < this.servicos.length) {
            this.servicos.splice(servicoIndex, 1);
            console.log('\nServiço excluído com sucesso!');
        } else {
            console.log('\nÍndice de serviço inválido!');
        }
    }
}