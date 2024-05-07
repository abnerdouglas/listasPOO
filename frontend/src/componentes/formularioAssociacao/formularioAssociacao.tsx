import { Component } from "react";
import CadastradorCliente from "../../cadastradores/cadastradorCliente";

class FormularioAssociacao extends Component {
    private nome!: string;
    private nomeSocial!: string;
    private cpf!: string;
    private dataEmissaoCpf!: string;
    private rg!: string;
    private dataEmissaoRg!: string;
    private genero!: string;
    private telefones: {
        ddd: string;
        numero: string;
    } = {
        ddd: '',
        numero: ''
    }

    constructor(props:any) {
        super(props);
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarNomeSocial = this.capturarNomeSocial.bind(this);
        this.capturarCpf = this.capturarCpf.bind(this);
        this.capturarDataEmissaoCpf = this.capturarDataEmissaoCpf.bind(this);
        this.capturarRg = this.capturarRg.bind(this);
        this.capturarDataEmissaoRg = this.capturarDataEmissaoRg.bind(this);
        this.capturarGenero = this.capturarGenero.bind(this);
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

    public capturarNomeSocial(evento: any) {
        this.nomeSocial = evento.target.value;
    }

    public capturarCpf(evento: any) {
        this.cpf = evento.target.value;
    }

    public capturarDataEmissaoCpf(evento: any) {
        this.dataEmissaoCpf = evento.target.value;
    }

    public capturarRg(evento: any) {
        this.rg = evento.target.value;
    }
    public capturarDataEmissaoRg(evento: any) {
        this.dataEmissaoRg = evento.target.value;
    }
    
    public capturarGenero(evento: any) {
        this.genero = evento.target.value;
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
            nomeSocial: this.nomeSocial,
            cpf: this.cpf,
            dataEmissaoCpf: this.dataEmissaoCpf,
            rg: this.rg,
            dataEmissaoRg: this.dataEmissaoRg,
            genero: this.genero,
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

                                    <h5><strong>Formulário Cliente</strong></h5>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarNome} id="nome" type="text" className="validate active" maxLength={30} />
                                        <label htmlFor="nome">Nome</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarNomeSocial} id="nomeSocial" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="nomeSocial">Nome Social</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarCpf} id="cpf" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="cpf">CPF</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarDataEmissaoCpf} id="dataEmissaoCpf" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="dataEmissaoCpf">Data Emissão CPF</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarRg} id="RG" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="RG">RG</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarDataEmissaoRg} id="dataEmissaoRg" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="dataEmissaoRg">Data Emissão RG</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarGenero} id="genero" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="genero">Gênero</label>
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

export default FormularioAssociacao;