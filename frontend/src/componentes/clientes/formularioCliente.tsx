import { ChangeEvent, Component, FormEvent } from "react";
import CadastradorCliente from "../../cadastradores/cadastradorCliente";
import BuscadorProdutos from "../../buscadores/buscadorProduto";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import BuscadorServicos from "../../buscadores/buscadorServico";

interface Telefones {
    ddd: string;
    numero: string;
}

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

interface ProdutoConsumido {
    id: number;
    quantidade: number;
}

interface ServicoConsumido {
    id: number;
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
    servicosConsumidos: ServicoConsumido[];
    servicosDisponiveis: Servico[];
}

class FormularioCliente extends Component<{}, State> {
    constructor(props: any) {
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
            produtosDisponiveis: [],
            servicosConsumidos: [],
            servicosDisponiveis: []
        };
    }

    capturarNome = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ nome: evento.target.value });
    }

    capturarNomeSocial = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ nomeSocial: evento.target.value });
    }

    capturarCpf = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ cpf: evento.target.value });
    }

    capturarDataEmissaoCpf = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ dataEmissaoCpf: evento.target.value });
    }

    capturarRg = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ rg: evento.target.value });
    }

    capturarDataEmissaoRg = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ dataEmissaoRg: evento.target.value });
    }

    capturarGenero = (evento: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ genero: evento.target.value });
    }

    capturarTelefonesDDD = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ telefones: { ...this.state.telefones, ddd: evento.target.value } });
    }

    capturarTelefonesNumero = (evento: ChangeEvent<HTMLInputElement>) => {
        this.setState({ telefones: { ...this.state.telefones, numero: evento.target.value } });
    }

    async componentDidMount() {
        await this.buscarServicos();
        await this.buscarProdutos();
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }

    async buscarServicos() {
        let buscadorServicos = new BuscadorServicos();
        const servicos = await buscadorServicos.buscar();
        this.setState({ servicosDisponiveis: servicos });
    }

    capturarServicoConsumido = (evento: ChangeEvent<HTMLSelectElement>) => {
        const servicoId = parseInt(evento.target.value);
        const servicoSelecionado = this.state.servicosDisponiveis.find(servico => servico.id === servicoId);
        if (servicoSelecionado) {
            const servicoAssociado: ServicoConsumido = {
                id: servicoId,
                quantidade: 1
            };
            this.setState(prevState => ({
                servicosConsumidos: [...prevState.servicosConsumidos, servicoAssociado]
            }));
        }
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
            const produtoAssociado: ProdutoConsumido = {
                id: produtoId,
                quantidade: 1
            };
            this.setState(prevState => ({
                produtosConsumidos: [...prevState.produtosConsumidos, produtoAssociado]
            }));
        }
    }

    submeterFormulario = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const servicosDetalhados = this.state.servicosConsumidos.map(servico => ({
            ...this.buscarDetalhesServico(servico.id),
            quantidade: servico.quantidade
        }));
        const produtosDetalhados = this.state.produtosConsumidos.map(produto => ({
            ...this.buscarDetalhesProduto(produto.id),
            quantidade: produto.quantidade
        }));
        const cliente = {
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            cpf: this.state.cpf,
            dataEmissaoCpf: this.state.dataEmissaoCpf,
            rg: this.state.rg,
            dataEmissaoRg: this.state.dataEmissaoRg,
            genero: this.state.genero,
            telefones: [this.state.telefones],
            produtosConsumidos: produtosDetalhados,
            servicosConsumidos: servicosDetalhados
        };
        this.cadastrarCliente(cliente);
        evento.currentTarget.reset();
        this.setState({ produtosConsumidos: [], produtosDisponiveis: [], servicosConsumidos: [], servicosDisponiveis: [], genero: '' });
    }

    cadastrarCliente = (cliente: Object) => {
        let cadastrador = new CadastradorCliente();
        cadastrador.cadastrar(cliente);
    }

    buscarDetalhesServico = (id: number) => {
        const servico = this.state.servicosDisponiveis.find(servico => servico.id === id);
        return servico ? { nome: servico.nome, preco: servico.preco } : null;
    };

    buscarDetalhesProduto = (id: number) => {
        const produto = this.state.produtosDisponiveis.find(produto => produto.id === id);
        return produto ? { nome: produto.nome, preco: produto.preco } : null;
    };

    render() {
        const { servicosDisponiveis, produtosDisponiveis } = this.state;

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
                                        <select onChange={this.capturarGenero} defaultValue={[]} id="genero" className="validate">
                                            <option value="" disabled selected>Escolha o gênero</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                        </select>
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

                                    <div className="input-field col s6">
                                        <select id="produtoSelect" multiple={true} defaultValue={[]} onChange={(e) => this.setState({ produtosConsumidos: Array.from(e.target.selectedOptions).map(option => ({ id: parseInt(option.value), quantidade: 1 })) })}>
                                            <option value="" disabled>Escolha um ou mais produtos</option>
                                            {produtosDisponiveis.map((produto: Produto) => (
                                                <option key={produto.id} value={produto.id}>{produto.nome}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="input-field col s6">
                                        <select id="servicoSelect" multiple={true} defaultValue={[]} onChange={(e) => this.setState({ servicosConsumidos: Array.from(e.target.selectedOptions).map(option => ({ id: parseInt(option.value), quantidade: 1 })) })}>
                                            <option value="" disabled>Escolha um ou mais serviços</option>
                                            {servicosDisponiveis.map((servico: Servico) => (
                                                <option key={servico.id} value={servico.id}>{servico.nome}</option>
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
