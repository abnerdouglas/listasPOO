import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    private clientes: Array<Cliente>

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.clientes = clientes
    }
    public listar(): void {
        if (this.servicos.length == 0) {
            console.log("Nenhum serviço foi cadastrado ainda.\n");
        } else {
            console.log(`\nLISTA DE TODOS OS SERVIÇOS:\n`);

            this.servicos.forEach(servico => {
                console.log(`--------------------------------------`);
                console.log(`Nome do serviço: ${servico.nome}`);
                console.log(`Descrição: ${servico.descricao}`);
                console.log(`Duração em min: ${servico.duracao}`)
                console.log(`Preço: R$${servico.preco},00`);
                console.log(`Gênero Principal: ${servico.genero}`)
                
                let clienteAssociado = this.clientes.find(cliente => cliente.getServicosConsumidos.some(item => item.nome === servico.nome));

                if (clienteAssociado) {
                    console.log(`Cliente associado: ${clienteAssociado.nome}`);
                } else {
                    console.log(`Nenhum cliente associado disponível.`);
                }
                
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
    }
}