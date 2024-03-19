import { Component } from "react";

type props = {
    tema: string
}

export default class CadastroCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container">
                <form className="col s12">
                    <h5><strong>Cadastro Cliente</strong></h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome-cliente" type="text" className="validate" />
                            <label htmlFor="nome-cliente">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome-social" type="text" className="validate" />
                            <label htmlFor="nome-social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf-cliente" type="text" className="validate" />
                            <label htmlFor="cpf-cliente">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rgs-cliente" type="text" className="validate" />
                            <label htmlFor="rgs-cliente">RG</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="tel-cliente" type="text" className="validate" />
                            <label htmlFor="tel-cliente">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero-cliente" type="text" className="validate" />
                            <label htmlFor="genero-cliente">Gênero</label>
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