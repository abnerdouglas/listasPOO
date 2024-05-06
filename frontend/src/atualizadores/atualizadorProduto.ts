import { URI } from "../enuns/uri";
import Atualizador from "./atualizador";

class AtualizadorProduto implements Atualizador {
    atualizar(objeto: Object): void {
        fetch(URI.ATUALIZAR_PRODUTO, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default AtualizadorProduto