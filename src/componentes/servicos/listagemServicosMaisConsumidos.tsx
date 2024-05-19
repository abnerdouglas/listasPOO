import React, { useState } from 'react';

type Servico = {
  id: number;
  nome: string;
  quantidade: number;
};

const ListagemServicosMaisConsumidos: React.FC = () => {
  const [servicos] = useState<Servico[]>([
    {
      id: 1,
      nome: 'Corte de Cabelo',
      quantidade: 5,
    },
    {
      id: 2,
      nome: 'Massagem',
      quantidade: 3,
    },
  ]);


  return (
    <div className="container">
      <h5><strong>Listagem dos Serviços Mais Consumidos</strong></h5>
      <hr />
      <table className="bordered striped centered highlight responsive-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade Consumida</th>   
          </tr>
        </thead>
        <tbody>
          {servicos.map(servico => (
            <tr key={servico.id}>
              <td>{servico.id}</td>
              <td>{servico.nome}</td>
              <td>{servico.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemServicosMaisConsumidos;
