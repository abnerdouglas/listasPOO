/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import CadastradorCliente from "../cadastradores/cadastradorCliente";


class FormularioCliente extends Component {
    private nome!: string
    private sobreNome!: string
    private email!: string
    private enderecoEstado!: string
    private enderecoCidade!: string
    private enderecoBairro!: string
    private enderecoRua!: string
    private enderecoNumero!: string
    private enderecoCodigoPostal!: string
    private enderecoInformacoes!: string
    private telefoneId!: string
    private telefoneDDD!: string
    private telefoneNumero!: string

    constructor(props) {
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarSobreNome = this.capturarSobreNome.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)

        this.capturarEnderecoEstado = this.capturarEnderecoEstado.bind(this)
        this.capturarEnderecoCidade = this.capturarEnderecoCidade.bind(this)
        this.capturarEnderecoBairro = this.capturarEnderecoBairro.bind(this)
        this.capturarEnderecoRua = this.capturarEnderecoRua.bind(this)
        this.capturarEnderecoNumero = this.capturarEnderecoNumero.bind(this)
        this.capturarEnderecoCodigoPostal = this.capturarEnderecoCodigoPostal.bind(this)
        this.capturarEnderecoInformacoes = this.capturarEnderecoInformacoes.bind(this)
        
        this.capturarTelefoneId = this.capturarTelefoneId.bind(this)
        this.capturarTelefoneDDD = this.capturarTelefoneDDD.bind(this)
        this.capturarTelefoneNumero = this.capturarTelefoneNumero.bind(this)

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

    public capturarEnderecoEstado(evento: any) {
        this.enderecoEstado = evento.target.value
    }

    public capturarEnderecoCidade(evento: any) {
        this.enderecoCidade = evento.target.value
    }

    public capturarEnderecoBairro(evento: any) {
        this.enderecoBairro = evento.target.value
    }

    public capturarEnderecoRua(evento: any) {
        this.enderecoRua = evento.target.value
    }

    public capturarEnderecoNumero(evento: any) {
        this.enderecoNumero = evento.target.value
    }

    public capturarEnderecoCodigoPostal(evento: any) {
        this.enderecoCodigoPostal = evento.target.value
    }

    public capturarEnderecoInformacoes(evento: any) {
        this.enderecoInformacoes = evento.target.value
    }

    public capturarTelefoneId(evento: any) {
        this.telefoneId = evento.target.value
    }

    public capturarTelefoneDDD(evento: any) {
        this.telefoneDDD = evento.target.value
    }

    public capturarTelefoneNumero(evento: any) {
        this.telefoneNumero = evento.target.value
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault()
        let cliente = {
            nome: this.nome,
            sobreNome: this.sobreNome,
            email: this.email,
            enderecoEstado: this.enderecoEstado,
            enderecoCidade: this.enderecoCidade,
            enderecoBairro: this.enderecoBairro,
            enderecoRua: this.enderecoRua,
            enderecoNumero: this.enderecoNumero,
            enderecoCodigoPostal: this.enderecoCodigoPostal,
            enderecoInformacoes: this.enderecoInformacoes,
            telefoneId: this.telefoneId,
            telefoneDDD: this.telefoneDDD,
            telefoneNumero: this.telefoneNumero
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
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarTelefoneDDD} id="telefoneDDD" type="text" className="validate" maxLength={2} />
                                        <label htmlFor="telefoneDDD">DDD Telefone </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarTelefoneNumero} id="telefoneNumero" type="text" className="validate" maxLength={9} />
                                        <label htmlFor="telefoneNumero">Número Telefone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoEstado} id="enderecoEstado" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoEstado">Estado</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoCidade} id="enderecoCidade" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoCidade">Cidade</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoBairro} id="enderecoBairro" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoBairro">Bairro</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoRua} id="enderecoRua" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoRua">Rua</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoNumero} id="enderecoNumero" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoNumero">Número Endereço</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoCodigoPostal} id="enderecoCodigoPostal" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoCodigoPostal">Código Postal</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoInformacoes} id="enderecoInformacoes" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="enderecoInformacoes">Informações Adicionais</label>
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