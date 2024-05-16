import React, { ChangeEvent, Component } from "react";
import M from 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import AtualizadorServico from "../../atualizadores/atualizadorServico";
import BuscadorServicos from "../../buscadores/buscadorServico";
import RemovedorServico from "../../removedores/removedorServico";
import RemovedorServicoLocal from "../../removedores/local/removedorServicoLocal";

interface Servico {
    id: string;
    nome: string;
    descricao: string;
    duracao: string;
    preco: string;  
}

interface State {
    servicos: Servico[] | Object[] | any;
    servicoEditando: Servico[] | null | any;
}

class ListagemServicos extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            servicos: [],
            servicoEditando: null
        };
        this.modalRef = React.createRef();
        this.excluirLocal = this.excluirLocal.bind(this);
        this.atualizarServico = this.atualizarServico.bind(this);
    }

    public atualizarServico() {
      const { servicoEditando } = this.state;
      if (servicoEditando) {
          let atualizadorServico = new AtualizadorServico();
          atualizadorServico.atualizar(servicoEditando);
          
          const modalInstance = M.Modal.getInstance(this.modalRef.current!);
          modalInstance?.close();
          
          const servicosAtualizados = this.state.servicos.map(servico => {
              if (servico.id === servicoEditando.id) {
                  return servicoEditando;
              } else {
                  return servico;
              }
          });
          this.setState({ 
              servicos: servicosAtualizados,
              servicoEditando: null 
          });
      }
    }

    public async buscarServicos() {
        let buscadorServicos = new BuscadorServicos();
        const servicos = await buscadorServicos.buscar();
        this.setState({ servicos: servicos });
    }

    public excluirRemoto(idServico: string) {
        let removedor = new RemovedorServico();
        removedor.remover({ id: idServico });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorServicoLocal();
        let servicos = removedorLocal.remover(this.state.servicos, id);
        this.setState({
            servicos : servicos
        });
        this.excluirRemoto(id);
    }


    public abrirModalEdicao(servico: Servico) {
      this.setState({ servicoEditando: servico }, () => {
          // Abrindo o modal de edição
          const modalInstance = M.Modal.getInstance(this.modalRef.current!);
          modalInstance?.open();
      });
    }

    componentDidMount() {
        this.buscarServicos();
        M.Modal.init(this.modalRef.current!);
    }

    render() {
        const { servicos, servicoEditando } = this.state;

        return (
            <div>
                <h5><strong> Listagem de Serviços </strong></h5>
                <hr />
                {servicos.length === 0 ? (
                    <p>Não existem servicos cadastrados ou o backend não foi inicializado.</p>
                ) : (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome</th>

                            <th>Descrição</th>

                            <th>Duração</th>

                            <th>Preço</th>

                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicos.map((servico: Servico) => (
                            <tr key={servico.id}>

                                <td>{servico.nome}</td>

                                <td>{servico.descricao}</td>

                                <td>{servico.duracao} min</td>

                                <td>R${servico.preco}</td>
                               
                                <td>
                                    <button className="btn-small purple" onClick={() => this.abrirModalEdicao(servico)}>Editar</button>
                                    <button className="btn-small red" onClick={(e) => this.excluirLocal(servico.id, e)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}

                 {/* Modal de Edição */}
                 <div ref={this.modalRef} className="modal">
                    <div className="modal-content">
                        <h4>Editar Serviço</h4>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={servicoEditando?.nome || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...servicoEditando!, nome: e.target.value };
                                    this.setState({ servicoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Descrição"
                                value={servicoEditando?.descricao || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...servicoEditando!, descricao: e.target.value };
                                    this.setState({ servicoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Duração (min)"
                                value={servicoEditando?.duracao || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...servicoEditando!, duracao: e.target.value };
                                    this.setState({ servicoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Preço(R$)"
                                value={servicoEditando?.preco || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...servicoEditando!, preco: e.target.value };
                                    this.setState({ servicoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button className="btn purple lighten" onClick={() => this.atualizarServico()}>Salvar</button>
                        <button className="btn red lighten modal-close">Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListagemServicos;
