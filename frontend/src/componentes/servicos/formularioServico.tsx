import { Component } from "react";
import CadastradorServico from "../../cadastradores/cadastradorServico";

class FormularioServico extends Component {
    private nome!: string;
    private descricao!: string;
    private duracao!: string;
    private preco!: string;
    private generoConsumidor!: string;
    private quantidadeConsumida!: string;

    constructor(props:any) {
        super(props);
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarDescricao = this.capturarDescricao.bind(this);
        this.capturarDuracao = this.capturarDuracao.bind(this);
        this.capturarGeneroConsumidor = this.capturarGeneroConsumidor.bind(this);
        this.capturarPreco = this.capturarPreco.bind(this);
        this.capturarQuantidadeConsumida = this.capturarQuantidadeConsumida.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
        this.cadastrarServico = this.cadastrarServico.bind(this);
    }

    public cadastrarServico(objeto: Object) {
        let cadastrador = new CadastradorServico();
        cadastrador.cadastrar(objeto);
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value;
    }

    public capturarDescricao(evento: any) {
        this.descricao = evento.target.value;
    }

    public capturarDuracao(evento: any) {
        this.duracao = evento.target.value;
    }

    public capturarGeneroConsumidor(evento: any) {
        this.generoConsumidor = evento.target.value;
    }

    public capturarPreco(evento: any) {
        this.preco = evento.target.value;
    }

    public capturarQuantidadeConsumida(evento: any) {
        this.quantidadeConsumida = evento.target.value;
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault();
        let servico = {
            nome: this.nome,
            descricao: this.descricao,
            duracao: this.duracao,
            preco: this.preco,
            generoConsumidor: this.generoConsumidor,
            quantidadeConsumida: this.quantidadeConsumida
        };
        this.cadastrarServico(servico);
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

                                    <h5><strong>Formulário Serviço</strong></h5>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarNome} id="nomeServico" type="text" className="validate active" maxLength={30} />
                                        <label htmlFor="nomeServico">Nome</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarDescricao} id="descricao" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="descricao">Descrição</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarDuracao} id="duracao" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="duracao">Duração(min)</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarPreco} id="preco" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="preco">Preço(R$)</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarGeneroConsumidor} id="generoConsumidor" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="generoConsumidor">Gênero Consumidor</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input onChange={this.capturarQuantidadeConsumida} id="quantidadeConsumida" type="text" className="validate" maxLength={30} />
                                        <label htmlFor="quantidadeConsumida">Quantidade Consumida</label>
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

export default FormularioServico;