import RemovedorLocal from "./removedorLocal";

interface Cliente {
    id: string;
}

export default class RemovedorClienteLocal implements RemovedorLocal {
    public remover(objeto: Cliente[], id: string): Cliente[] {
        let clientes = objeto.filter(elemento => elemento['id'] !== id)
        return clientes
    }
}