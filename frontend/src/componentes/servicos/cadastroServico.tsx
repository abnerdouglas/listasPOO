import React, { useState } from 'react';

type Props = {
    tema: string;
};

const CadastroServico = ({ tema }: Props) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [duracao, setDuracao] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log('Dados do serviço:', { nome, descricao, duracao, genero });
    };

    let estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="container">
            <form className="col s12" onSubmit={handleSubmit}>
                <h5><strong>Cadastro Serviço</strong></h5>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome-servico" type="text" className="validate" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label htmlFor="nome-servico">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="descricao-produto" type="text" className="validate" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        <label htmlFor="descricao-produto">Descrição</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="duracao-servico" type="text" className="validate" value={duracao} onChange={(e) => setDuracao(e.target.value)} />
                        <label htmlFor="duracao-servico">Duração(min)</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="genero-servico" type="text" className="validate" value={genero} onChange={(e) => setGenero(e.target.value)} />
                        <label htmlFor="genero-servico">Gênero Consumidor</label>
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

export default CadastroServico;
