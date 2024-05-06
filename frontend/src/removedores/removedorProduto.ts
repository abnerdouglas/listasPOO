import { URI } from "../enuns/uri";
import RemovedorRemoto from "./remoto/removedorRemoto";

interface Cliente {
    id: string;
}

export default class RemovedorProduto implements RemovedorRemoto {
    public remover(objeto: Cliente): void {
        let json = { id: objeto['id'] }
        fetch(URI.DELETAR_PRODUTO, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    }
}