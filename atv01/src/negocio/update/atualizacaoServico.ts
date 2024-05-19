import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao{
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if (this.servicos.length === 0) {
            console.log("Nenhum serviço foi cadastrado ainda.\n");
            return;
        }
        
        console.log(`\n-> Início da atualzação de um Serviço <-`);

        console.log("\nServicos disponíveis:");
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1}. ${servico.nome}`);
        });
    
        let escolhaServico = this.entrada.receberNumero(`Escolha o serviço a ser excluído através do número: `); 

        let servicoEscolhido = this.servicos[escolhaServico - 1]; 
    
        if (servicoEscolhido) {
            let novoNome = this.entrada.receberTexto(`Informe o nome do serviço: `)
            let novaDescricao = this.entrada.receberTexto(`Informe uma descrição: `)
            let novaDuracao = this.entrada.receberTexto(`Informe a duração em min: `)
            let novoPreco = this.entrada.receberTexto(`Informe o preço: `)
            let novoGenero = this.entrada.receberTexto(`Informe o principal gênero consumidor: `)

            servicoEscolhido.atualizarDados(novoNome, novaDescricao, novaDuracao, novoPreco, novoGenero)
            console.log('\nServiço atualizado com sucesso!');
        } else {
            console.log('\nÍndice de serviço inválido!');
        }
    }
}