import { URI } from "../enuns/uri";
import Cadastrador from "./cadastrador";

class CadastradorProduto implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URI.CADASTRAR_PRODUTO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastradorProduto