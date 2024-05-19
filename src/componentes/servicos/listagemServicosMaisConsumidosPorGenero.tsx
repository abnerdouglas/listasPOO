import { useState } from 'react';

type Servico = {
  id: number;
  nome: string;
  genero: string;
  quantidade: number;
};

const ListagemServicosMaisConsumidosPorGenero = () => {
  const [servicos] = useState<Servico[]>([
    {
        id: 1,
        nome: 'Corte de Cabelo',
        genero: 'Feminino',
        quantidade: 5
      },
      {
        id: 2,
        nome: 'Massagem',
        genero: 'Masculino',
        quantidade: 10
      }
  ]);

  return (
    <div className="container">
      <h5><strong>Listagem dos Serviços Mais Consumidos Por Gênero</strong></h5>
      <hr />
      {['Masculino', 'Feminino'].map((genero, index) => (
        <div key={index} style={{ marginTop: index === 1 ? 50 : 0 }}>
          <h6>Gênero {genero.charAt(0).toUpperCase() + genero.slice(1)}</h6>
          <table className="bordered striped centered highlight responsive-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Gênero</th>
                <th scope="col">Quantidade de Consumo</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map(servico => {
                if (servico.genero === genero) {
                  return (
                    <tr key={servico.id}>
                      <td>{servico.id}</td>
                      <td>{servico.nome}</td>
                      <td>{servico.genero}</td>
                      <td>{servico.quantidade}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ListagemServicosMaisConsumidosPorGenero;
