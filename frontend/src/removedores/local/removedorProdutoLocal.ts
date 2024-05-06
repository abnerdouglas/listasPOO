import RemovedorLocal from "./removedorLocal";

interface Produto {
    id: string;
}

export default class RemovedorProdutoLocal implements RemovedorLocal {
    public remover(objeto: Produto[], id: string): Produto[] {
        let produtos = objeto.filter(elemento => elemento['id'] !== id)
        return produtos
    }
}