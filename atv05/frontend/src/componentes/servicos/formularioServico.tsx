import { Component } from "react";
import CadastradorServico from "../../cadastradores/cadastradorServico";
import { IMaskInput } from "react-imask";

class FormularioServico extends Component {
    private nome!: string;
    private descricao!: string;
    private duracao!: string;
    private preco!: string;

    constructor(props:any) {
        super(props);
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarDescricao = this.capturarDescricao.bind(this);
        this.capturarDuracao = this.capturarDuracao.bind(this);
        this.capturarPreco = this.capturarPreco.bind(this);
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

    public capturarPreco(evento: any) {
        this.preco = evento.target.value;
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault();
        let servico = {
            nome: this.nome,
            descricao: this.descricao,
            duracao: this.duracao,
            preco: this.preco
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
                                        <IMaskInput
                                            placeholder="Digite o Nome do Serviço"
                                            onChange={this.capturarNome}
                                            id="nome"
                                            maxLength={30}
                                        />
                                    </div>

                                    <div className="input-field col s6">
                                        <IMaskInput
                                            placeholder="Digite uma descrição"
                                            onChange={this.capturarDescricao}
                                            id="descricao"
                                            maxLength={30}
                                        />
                                    </div>

                                    <div className="input-field col s6">
                                        <IMaskInput
                                            placeholder="Digite a duração em minutos"
                                            onChange={this.capturarDuracao}
                                            id="duracao"
                                            maxLength={5}
                                        />
                                    </div>

                                    <div className="input-field col s6">
                                        <IMaskInput
                                            placeholder="Digite o Preço R$(apenas numeros)"
                                            onChange={this.capturarPreco}
                                            id="preco"
                                            maxLength={10}
                                        />
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