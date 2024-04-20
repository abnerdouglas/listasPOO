import { useState } from 'react';

const CadastroCliente = ({ tema }) => {
    const [clientes, setClientes] = useState({
        nome: '',
        nomeSocial: '',
        cpf: '',
        dataEmissaoCPF: '',
        rg: '',
        dataEmissaoRG: '',
        telefone: '',
        genero: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setClientes(prevInputs => ({
            ...prevInputs,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', clientes);
    };

    return (
        <div className="container">
            <form className="col s12" onSubmit={handleSubmit}>
                <h5><strong>Cadastro Cliente</strong></h5>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" type="text" className="validate" value={clientes.nome} onChange={handleChange} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="nomeSocial" type="text" className="validate" value={clientes.nomeSocial} onChange={handleChange} />
                        <label htmlFor="nomeSocial">Nome Social</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="cpf" type="text" className="validate" value={clientes.cpf} onChange={handleChange} />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="dataEmissaoCPF" type="date" className="validate" value={clientes.dataEmissaoCPF} onChange={handleChange} />
                        <label htmlFor="dataEmissaoCPF">Data Emissão CPF</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="rg" type="text" className="validate" value={clientes.rg} onChange={handleChange} />
                        <label htmlFor="rg">RG</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="dataEmissaoRG" type="date" className="validate" value={clientes.dataEmissaoRG} onChange={handleChange} />
                        <label htmlFor="dataEmissaoRG">Data Emissão RG</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="telefone" type="tel" className="validate" value={clientes.telefone} onChange={handleChange} />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="genero" type="text" className="validate" value={clientes.genero} onChange={handleChange} />
                        <label htmlFor="genero">Gênero</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={`btn waves-effect waves-light ${tema}`} type="submit" name="action">Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CadastroCliente;
