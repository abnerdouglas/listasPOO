import React, { useState } from 'react';

type Props = {
    tema: string;
};

type Produto = {
    nome: string;
    marca: string;
    preco: string;
};

const CadastroProduto = ({ tema }: Props) => {
    const [produto, setProduto] = useState<Produto>({
        nome: '',
        marca: '',
        preco: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log('Dados do produto:', produto);
    };

    let estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="container">
            <form className="col s12" onSubmit={handleSubmit}>
                <h5><strong>Cadastro Produto</strong></h5>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome-produto" type="text" className="validate" value={produto.nome} onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
                        <label htmlFor="nome-produto">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="marca-produto" type="text" className="validate" value={produto.marca} onChange={(e) => setProduto({ ...produto, marca: e.target.value })} />
                        <label htmlFor="marca-produto">Marca</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="preco-produto" type="text" className="validate" value={produto.preco} onChange={(e) => setProduto({ ...produto, preco: e.target.value })} />
                        <label htmlFor="preco-produto">Preço(R$)</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CadastroProduto;
