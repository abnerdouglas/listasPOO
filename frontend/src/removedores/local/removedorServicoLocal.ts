import RemovedorLocal from "./removedorLocal";

interface Servico {
    id: string;
}

export default class RemovedorServicoLocal implements RemovedorLocal {
    public remover(objeto: Servico[], id: string): Servico[] {
        let servicos = objeto.filter(elemento => elemento['id'] !== id)
        return servicos
    }
}