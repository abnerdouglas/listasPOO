import { useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  genero: string;
  quantidade: number;
};

const ListagemProdutosMaisConsumidosPorGenero = () => {
  const [produtos] = useState<Produto[]>([
    {
      id: 1,
      nome: 'Perfume',
      genero: 'Masculino',
      quantidade: 12
    },
    {
      id: 2,
      nome: 'Creme de Barbear',
      genero: 'Masculino',
      quantidade: 6
    },
    {
      id: 3,
      nome: 'Creme',
      genero: 'Feminino',
      quantidade: 2
    }
  ]);

  return (
    <div className="container">
      <h5><strong>Listagem dos Produtos Mais Consumidos Por Gênero</strong></h5>
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
              {produtos.map(produto => {
                if (produto.genero === genero) {
                  return (
                    <tr key={produto.id}>
                      <td>{produto.id}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.genero}</td>
                      <td>{produto.quantidade}</td>
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

export default ListagemProdutosMaisConsumidosPorGenero;
