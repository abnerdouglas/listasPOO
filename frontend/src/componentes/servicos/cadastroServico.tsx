import { Component } from "react";

type props = {
    tema: string
}

export default class CadastroServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container">
                <form className="col s12">
                <h5><strong>Cadastro Serviço</strong></h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome-servico" type="text" className="validate" />
                            <label htmlFor="nome-servico">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="descricao-produto" type="text" className="validate" />
                            <label htmlFor="descricao-produto">Descrição</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="duracao-servico" type="text" className="validate" />
                            <label htmlFor="duracao-servico">Duração(min)</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero-servico" type="text" className="validate" />
                            <label htmlFor="genero-servico"> Gênero Consumidor</label>
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