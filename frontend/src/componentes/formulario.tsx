/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CadastradorCliente from "../cadastradores/cadastradorCliente";


class FormularioCliente extends Component {
    private nome!: string
    private sobreNome!: string
    private email!: string

    constructor(props) {
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarSobreNome = this.capturarSobreNome.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)
        this.submeterFormulario = this.submeterFormulario.bind(this)
        this.cadastrarCliente = this.cadastrarCliente.bind(this)
    }

    public cadastrarCliente(objeto: Object) {
        let cadastrador = new CadastradorCliente()
        cadastrador.cadastrar(objeto)
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value
    }

    public capturarSobreNome(evento: any) {
        this.sobreNome = evento.target.value
    }

    public capturarEmail(evento: any) {
        this.email = evento.target.value
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault()
        let cliente = {
            nome: this.nome,
            sobreNome: this.sobreNome,
            email: this.email,
        }
        this.cadastrarCliente(cliente)
        evento.target.reset()
    }

    render() {
        return (
            <div className="col s12 m7">
                <div className="card horizontal z-depth-0">
                    <div className="card-stacked">
                        <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarNome} id="nome" type="text" className="validate active" maxLength={30} />
                                        <label htmlFor="nome">Nome</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarSobreNome} id="sobreNome" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="sobreNome">Sobrenome</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEmail} id="email" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="center-align">
                                <button className="btn waves-effect waves-light teal accent-3 btn-large" type="submit" name="action">Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }    
}
export default FormularioCliente