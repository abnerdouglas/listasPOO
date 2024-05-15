import React, { ChangeEvent, Component } from "react";
import M from 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css'
import AtualizadorProduto from "../../atualizadores/atualizadorProduto";
import BuscadorProdutos from "../../buscadores/buscadorProduto";
import RemovedorProduto from "../../removedores/removedorProduto";
import RemovedorProdutoLocal from "../../removedores/local/removedorProdutoLocal";

interface Produto {
    id: string;
    nome: string;
    marca: string;
    preco: string; 
}

interface State {
    produtos: Produto[] | Object[] | any;
    produtoEditando: Produto[] | null | any;
}

class ListagemProdutos extends Component<{}, State> {
    modalRef: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.state = {
            produtos: [],
            produtoEditando: null
        };
        this.modalRef = React.createRef();
        this.excluirLocal = this.excluirLocal.bind(this);
        this.atualizarProduto = this.atualizarProduto.bind(this);
    }

    public atualizarProduto() {
      const { produtoEditando } = this.state;
      if (produtoEditando) {
          let atualizadorProduto = new AtualizadorProduto();
          atualizadorProduto.atualizar(produtoEditando);
          
          const modalInstance = M.Modal.getInstance(this.modalRef.current!);
          modalInstance?.close();
          
          const produtosAtualizados = this.state.produtos.map(produto => {
              if (produto.id === produtoEditando.id) {
                  return produtoEditando;
              } else {
                  return produto;
              }
          });
          this.setState({ 
              produtos: produtosAtualizados,
              produtoEditando: null 
          });
      }
    }

    public async buscarProdutos() {
        let buscadorProdutos = new BuscadorProdutos();
        const produtos = await buscadorProdutos.buscar();
        this.setState({ produtos: produtos });
    }

    public excluirRemoto(idProduto: string) {
        let removedor = new RemovedorProduto();
        removedor.remover({ id: idProduto });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorProdutoLocal();
        let produtos = removedorLocal.remover(this.state.produtos, id);
        this.setState({
            produtos : produtos
        });
        this.excluirRemoto(id);
    }


    public abrirModalEdicao(produto: Produto) {
      this.setState({ produtoEditando: produto }, () => {
          // Abrindo o modal de edição
          const modalInstance = M.Modal.getInstance(this.modalRef.current!);
          modalInstance?.open();
      });
    }

    componentDidMount() {
        this.buscarProdutos();
        M.Modal.init(this.modalRef.current!);
    }

    render() {
        const { produtos, produtoEditando } = this.state;

        return (
            <div>
                <h5><strong> Listagem de Produtos </strong></h5>
                <hr />
                {produtos.length === 0 ? (
                    <p>Não existem produtos cadastrados ou o backend não foi inicializado.</p>
                ) : (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Nome</th>

                            <th>Marca</th>

                            <th>Preço</th>

                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto: Produto) => (
                            <tr key={produto.id}>

                                <td>{produto.nome}</td>

                                <td>{produto.marca}</td>

                                <td>R${produto.preco},00</td>
                               
                                <td>
                                    <button className="btn-small purple" onClick={() => this.abrirModalEdicao(produto)}>Editar</button>
                                    <button className="btn-small red" onClick={(e) => this.excluirLocal(produto.id, e)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}

                 {/* Modal de Edição */}
                 <div ref={this.modalRef} className="modal">
                    <div className="modal-content">
                        <h4>Editar Produto</h4>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={produtoEditando?.nome || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...produtoEditando!, nome: e.target.value };
                                    this.setState({ produtoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Marca"
                                value={produtoEditando?.marca || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...produtoEditando!, marca: e.target.value };
                                    this.setState({ produtoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Preço (R$)"
                                value={produtoEditando?.preco || ''}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const novoClienteEditando = { ...produtoEditando!, preco: e.target.value };
                                    this.setState({ produtoEditando: novoClienteEditando });
                                }}
                            />
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button className="btn purple lighten" onClick={() => this.atualizarProduto()}>Salvar</button>
                        <button className="btn red lighten modal-close">Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListagemProdutos;
