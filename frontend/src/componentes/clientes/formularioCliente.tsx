import { ChangeEvent, Component, FormEvent } from "react";
import CadastradorCliente from "../../cadastradores/cadastradorCliente";
import BuscadorProdutos from "../../buscadores/buscadorProduto";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

interface Telefones {
    ddd: string;
    numero: string;
}

interface Produto {
    id: number;
    nome: string;
    preco: number;
    generoConsumidor: string;
}

interface ProdutoConsumido {
    produto: Produto;
    quantidade: number;
}

interface State {
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    rg: string;
    dataEmissaoRg: string;
    genero: string;
    telefones: Telefones;
    produtosConsumidos: ProdutoConsumido[];
    produtosDisponiveis: Produto[];
}


class FormularioCliente extends Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            nomeSocial: "",
            cpf: "",
            dataEmissaoCpf: "",
            rg: "",
            dataEmissaoRg: "",
            genero: "",
            telefones: {
                ddd: "",
                numero: ""
            },
            produtosConsumidos: [],
            produtosDisponiveis: []
        };
    }

    capturarNome = (evento: any) => {
        this.setState({ nome: evento.target.value });
    }

    capturarNomeSocial = (evento: any) => {
        this.setState({ nomeSocial: evento.target.value });
    }

    capturarCpf = (evento: any) => {
        this.setState({ cpf: evento.target.value });
    }

    capturarDataEmissaoCpf = (evento: any) => {
        this.setState({ dataEmissaoCpf: evento.target.value });
    }

    capturarRg = (evento: any) => {
        this.setState({ rg: evento.target.value });
    }

    capturarDataEmissaoRg = (evento: any) => {
        this.setState({ dataEmissaoRg: evento.target.value });
    }

    capturarGenero = (evento: any) => {
        this.setState({ genero: evento.target.value });
    }

    capturarTelefonesDDD = (evento: any) => {
        this.setState({ telefones: { ...this.state.telefones, ddd: evento.target.value } });
    }

    capturarTelefonesNumero = (evento: any) => {
        this.setState({ telefones: { ...this.state.telefones, numero: evento.target.value } });
    }

    async componentDidMount() {
        await this.buscarProdutos();
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }
    async buscarProdutos() {
        let buscadorProdutos = new BuscadorProdutos();
        const produtos = await buscadorProdutos.buscar();
        this.setState({ produtosDisponiveis: produtos });
    }

    capturarProdutoConsumido = (evento: ChangeEvent<HTMLSelectElement>) => {
        const produtoId = parseInt(evento.target.value);
        const produtoSelecionado = this.state.produtosDisponiveis.find(produto => produto.id === produtoId);
        if (produtoSelecionado) {
            const novoProduto: ProdutoConsumido = {
                produto: produtoSelecionado,
                quantidade: 1
            };
            this.setState({ produtosConsumidos: [...this.state.produtosConsumidos, novoProduto] });
        }
    }

    submeterFormulario = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const cliente = {
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            cpf: this.state.cpf,
            dataEmissaoCpf: this.state.dataEmissaoCpf,
            rg: this.state.rg,
            dataEmissaoRg: this.state.dataEmissaoRg,
            genero: this.state.genero,
            telefones: [this.state.telefones],
            produtosConsumidos: this.state.produtosConsumidos
        };
        this.cadastrarCliente(cliente);
        evento.currentTarget.reset();
        this.setState({ produtosConsumidos: [], produtosDisponiveis: [] }); // Limpa os produtos consumidos e disponíveis
    }

    cadastrarCliente = (cliente: Object) => {
        let cadastrador = new CadastradorCliente();
        cadastrador.cadastrar(cliente);
    }

    render() {
        const { produtosDisponiveis } = this.state;

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

                                    {/* Opçõs de produto para o cliente consumir */}

                                    <div className="input-field col s6">
                                        <select value={""} onChange={this.capturarProdutoConsumido}>
                                            <option value="" disabled>Escolha um produto</option>
                                            {produtosDisponiveis.map((produto: Produto) => (
                                                <option key={produto.id} value={produto.id}>{produto.nome}</option>
                                            ))}
                                        </select>
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