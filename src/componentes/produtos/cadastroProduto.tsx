import { Component } from "react";

type props = {
    tema: string
}

export default class CadastroProduto extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container">
                <form className="col s12">
                <h5><strong>Cadastro Produto</strong></h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome-produto" type="text" className="validate" />
                            <label htmlFor="nome-produto">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="marca-produto" type="text" className="validate" />
                            <label htmlFor="marca-produto">Marca</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="preco-produto" type="text" className="validate" />
                            <label htmlFor="preco-produto">Preço(R$)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}