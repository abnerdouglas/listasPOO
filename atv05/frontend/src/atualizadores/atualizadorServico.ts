import { URI } from "../enuns/uri";
import Atualizador from "./atualizador";

class AtualizadorServico implements Atualizador {
    atualizar(objeto: Object): void {
        fetch(URI.ATUALIZAR_SERVICO, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default AtualizadorServico