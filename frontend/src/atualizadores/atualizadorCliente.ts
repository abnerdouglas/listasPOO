import { URI } from "../enuns/uri";
import Atualizador from "./atualizador";

class AtualizadorCliente implements Atualizador {
    atualizar(objeto: Object): void {
        fetch(URI.ATUALIZAR_CLIENTE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default AtualizadorCliente