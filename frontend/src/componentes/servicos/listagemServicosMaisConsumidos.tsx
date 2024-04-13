import React, { useState } from 'react';

type Servico = {
  id: number;
  nome: string;
  descricao: string;
  duracao: number;
  preco: number;
  genero: string;
  quantidade: number;
};

const ListagemServicosMaisConsumidos: React.FC = () => {
  const [servicos, setServicos] = useState<Servico[]>([
    {
      id: 1,
      nome: 'Corte de Cabelo',
      descricao: 'Corte Social na tesoura',
      duracao: 45,
      preco: 120.00,
      genero: 'Masculino',
      quantidade: 5,
    },
    {
      id: 2,
      nome: 'Massagem',
      descricao: 'Massagem nas costas',
      duracao: 50,
      preco: 180.00,
      genero: 'Masculino',
      quantidade: 3,
    },
  ]);

  const handleEditarServico = (id: number) => {
    // Lógica para editar o serviço com o ID fornecido
    console.log('Editar serviço com ID:', id);
  };

  const handleExcluirServico = (id: number) => {
    // Lógica para excluir o serviço com o ID fornecido
    console.log('Excluir serviço com ID:', id);
    setServicos(servicos.filter(servico => servico.id !== id));
  };

  return (
    <div className="container">
      <h5><strong>Listagem dos Serviços MAIS Consumidos</strong></h5>
      <hr />
      <table className="bordered striped centered highlight responsive-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Duração(min)</th>
            <th scope="col">Preço(R$)</th>
            <th scope="col">Gênero</th>
            <th scope="col">Quantidade Consumo</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(servico => (
            <tr key={servico.id}>
              <td>{servico.id}</td>
              <td>{servico.nome}</td>
              <td>{servico.descricao}</td>
              <td>{servico.duracao}</td>
              <td>{servico.preco}</td>
              <td>{servico.genero}</td>
              <td>{servico.quantidade}</td>
              <td>
                <button className="btn btn-small purple lighten-1" onClick={() => handleEditarServico(servico.id)}>Editar</button>
                <button className="btn btn-small red" onClick={() => handleExcluirServico(servico.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemServicosMaisConsumidos;
