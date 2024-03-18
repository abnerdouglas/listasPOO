import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
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
                        <div className="input-field col s6">
                            <input id="genero-produto" type="email" className="validate" />
                            <label htmlFor="genero-produto">Principal Gênero Consumidor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}