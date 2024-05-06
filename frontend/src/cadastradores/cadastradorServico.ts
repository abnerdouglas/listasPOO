import { URI } from "../enuns/uri";
import Cadastrador from "./cadastrador";

class CadastradorServico implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URI.CADASTRAR_SERVICO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastradorServico