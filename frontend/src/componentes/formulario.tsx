import { Component } from "react";
import CadastradorCliente from "../cadastradores/cadastradorCliente";

class FormularioCliente extends Component {
    private nome!: string;
    private sobreNome!: string;
    private email!: string;
    private endereco: {
        cidade: string;
        estado: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    } = {
        cidade: '',
        estado: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: ''
    };
    private telefones: {
        ddd: string;
        numero: string;
    } = {
        ddd: '',
        numero: ''
    }

    constructor(props) {
        super(props);
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarSobreNome = this.capturarSobreNome.bind(this);
        this.capturarEmail = this.capturarEmail.bind(this);
        this.capturarEnderecoCidade = this.capturarEnderecoCidade.bind(this);
        this.capturarEnderecoEstado = this.capturarEnderecoEstado.bind(this);
        this.capturarEnderecoBairro = this.capturarEnderecoBairro.bind(this);
        this.capturarEnderecoRua = this.capturarEnderecoRua.bind(this);
        this.capturarEnderecoNumero = this.capturarEnderecoNumero.bind(this);
        this.capturarEnderecoCodigoPostal = this.capturarEnderecoCodigoPostal.bind(this);
        this.capturarEnderecoInformacoesAdicionais = this.capturarEnderecoInformacoesAdicionais.bind(this);
        this.capturarTelefonesDDD = this.capturarTelefonesDDD.bind(this);
        this.capturarTelefonesNumero = this.capturarTelefonesNumero.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
        this.cadastrarCliente = this.cadastrarCliente.bind(this);
    }

    public cadastrarCliente(objeto: Object) {
        let cadastrador = new CadastradorCliente();
        cadastrador.cadastrar(objeto);
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value;
    }

    public capturarSobreNome(evento: any) {
        this.sobreNome = evento.target.value;
    }

    public capturarEmail(evento: any) {
        this.email = evento.target.value;
    }

    public capturarEnderecoCidade( evento: any) {
        this.endereco.cidade = evento.target.value;
    }

    public capturarEnderecoNumero( evento: any) {
        this.endereco.numero = evento.target.value;
    }

    public capturarEnderecoEstado( evento: any) {
        this.endereco.estado = evento.target.value;
    }

    public capturarEnderecoBairro( evento: any) {
        this.endereco.bairro = evento.target.value;
    }

    public capturarEnderecoRua( evento: any) {
        this.endereco.rua = evento.target.value;
    }

    public capturarEnderecoCodigoPostal( evento: any) {
        this.endereco.codigoPostal = evento.target.value;
    }

    public capturarEnderecoInformacoesAdicionais( evento: any) {
        this.endereco.informacoesAdicionais = evento.target.value;
    }

    public capturarTelefonesDDD(evento: any) {
        this.telefones.ddd = evento.target.value;
    }

    public capturarTelefonesNumero(evento: any) {
        this.telefones.numero = evento.target.value;
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault();
        let cliente = {
            nome: this.nome,
            sobreNome: this.sobreNome,
            email: this.email,
            endereco: {
                cidade: this.endereco.cidade,
                estado: this.endereco.estado,
                bairro: this.endereco.bairro,
                rua: this.endereco.rua,
                numero: this.endereco.numero,
                codigoPostal: this.endereco.codigoPostal,
                informacoesAdicionais: this.endereco.informacoesAdicionais
            },
            telefones: [
                {
                    ddd: this.telefones.ddd, 
                    numero: this.telefones.numero 
                }
            ]
        };
        this.cadastrarCliente(cliente);
        evento.target.reset();
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
                                        <input onChange={this.capturarEnderecoCidade} id="cidade" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="cidade">Cidade</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoEstado} id="estado" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="estado">Estado</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoBairro} id="bairro" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="bairro">Bairro</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoRua} id="rua" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="rua">Rua</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoNumero} id="numero" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="numero">Número Residência</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoCodigoPostal} id="codigoPostal" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="codigoPostal">Código Postal</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarEnderecoInformacoesAdicionais} id="informacoesAdicionais" type="text" className="validate" maxLength={100} />
                                        <label htmlFor="informacoesAdicionais">Informações Adicionais</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarTelefonesDDD} id="ddd" type="text" className="validate" maxLength={3} />
                                        <label htmlFor="ddd">DDD Telefone</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarTelefonesNumero} id="numeroTelefone" type="text" className="validate" maxLength={10} />
                                        <label htmlFor="numeroTelefone">Número Telefone</label>
                                    </div>

                                </div>
                            </div>
                            <div className="center-align">
                                <button className="btn purple lighten btn-large" type="submit" name="action"> Cadastrar
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

export default FormularioCliente;
