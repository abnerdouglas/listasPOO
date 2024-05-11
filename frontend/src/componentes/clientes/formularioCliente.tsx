import React, { Component, ChangeEvent, FormEvent } from "react";
import CadastradorCliente from "../../cadastradores/cadastradorCliente";
import BuscadorProdutos from "../../buscadores/buscadorProduto";

interface Produto {
    id: string;
    nome: string;
    preco: number;
}

interface State {
    produtosAssociados: Produto[];
}

class FormularioCliente extends Component<{}, State> {
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
    private dropdownRef: React.RefObject<HTMLSelectElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            produtosAssociados: [],
        };
        this.dropdownRef = React.createRef();
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
    }

    componentDidMount() {
        // Buscar produtos disponíveis ao montar o componente
        this.buscarProdutos();
    }

    async buscarProdutos() {
        try {
            const buscadorProdutos = new BuscadorProdutos();
            const produtos = await buscadorProdutos.buscar();
            this.setState({ produtosAssociados: produtos });
            if (this.dropdownRef.current) {
                M.FormSelect.init(this.dropdownRef.current!);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    cadastrarCliente(objeto: any) {
        let cadastrador = new CadastradorCliente();
        cadastrador.cadastrar(objeto);
    }

    capturarNome(evento: ChangeEvent<HTMLInputElement>) {
        this.nome = evento.target.value;
    }

    capturarNomeSocial(evento: ChangeEvent<HTMLInputElement>) {
        this.nomeSocial = evento.target.value;
    }

    capturarCpf(evento: ChangeEvent<HTMLInputElement>) {
        this.cpf = evento.target.value;
    }

    capturarDataEmissaoCpf(evento: ChangeEvent<HTMLInputElement>) {
        this.dataEmissaoCpf = evento.target.value;
    }

    capturarRg(evento: ChangeEvent<HTMLInputElement>) {
        this.rg = evento.target.value;
    }

    capturarDataEmissaoRg(evento: ChangeEvent<HTMLInputElement>) {
        this.dataEmissaoRg = evento.target.value;
    }

    capturarGenero(evento: ChangeEvent<HTMLInputElement>) {
        this.genero = evento.target.value;
    }

    capturarTelefonesDDD(evento: ChangeEvent<HTMLInputElement>) {
        this.telefones.ddd = evento.target.value;
    }

    capturarTelefonesNumero(evento: ChangeEvent<HTMLInputElement>) {
        this.telefones.numero = evento.target.value;
    }

    submeterFormulario(evento: FormEvent<HTMLFormElement>) {
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
                    numero: this.telefones.numero,
                },
            ],
            produtosAssociados: this.state.produtosAssociados,
        };
        this.cadastrarCliente(cliente);
        evento.currentTarget.reset();
    }

    render() {
        const { produtosAssociados } = this.state;

        return (
            <div className="col s12 m7">
                <div className="card horizontal z-depth-0">
                    <div className="card-stacked">
                        <form className="col s12" onSubmit={this.submeterFormulario}>
                            <div className="card-content">
                                <div className="row">
                                    <h5>
                                        <strong>Formulário Cliente</strong>
                                    </h5>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarNome}
                                            id="nome"
                                            type="text"
                                            className="validate active"
                                            maxLength={30}
                                        />
                                        <label htmlFor="nome">Nome</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarNomeSocial}
                                            id="nomeSocial"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="nomeSocial">Nome Social</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarCpf}
                                            id="cpf"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="cpf">CPF</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarDataEmissaoCpf}
                                            id="dataEmissaoCpf"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="dataEmissaoCpf">Data Emissão CPF</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarRg}
                                            id="RG"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="RG">RG</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarDataEmissaoRg}
                                            id="dataEmissaoRg"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="dataEmissaoRg">Data Emissão RG</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarGenero}
                                            id="genero"
                                            type="text"
                                            className="validate"
                                            maxLength={30}
                                        />
                                        <label htmlFor="genero">Gênero</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarTelefonesDDD}
                                            id="ddd"
                                            type="text"
                                            className="validate"
                                            maxLength={3}
                                        />
                                        <label htmlFor="ddd">DDD Telefone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            onChange={this.capturarTelefonesNumero}
                                            id="numeroTelefone"
                                            type="text"
                                            className="validate"
                                            maxLength={10}
                                        />
                                        <label htmlFor="numeroTelefone">Número Telefone</label>
                                    </div>
                                    {/* Dropdown para selecionar produtos */}
                                    <div className="input-field col s12">
                                        <select ref={this.dropdownRef} multiple>
                                            <option value="" disabled>Selecione os produtos</option>
                                            {produtosAssociados.map(produto => (
                                                <option key={produto.id} value={produto.id}>{produto.nome}</option>
                                            ))}
                                        </select>
                                        <label>Produtos Disponíveis</label>
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
