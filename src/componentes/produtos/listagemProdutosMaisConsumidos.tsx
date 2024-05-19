import { useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  quantidade: number;
};

const ListagemProdutosMaisConsumidos = () => {
  const [produtos] = useState<Produto[]>([
    {
      id: 1,
      nome: 'Perfume',
      quantidade: 12
    },
    {
      id: 2,
      nome: 'Creme de Barbear',
      quantidade: 6
    }
  ]);

  return (
    <div className="container">
      <h5><strong>Listagem dos Produtos Mais Consumidos</strong></h5>
      <hr />
      <table className="bordered striped centered highlight responsive-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade de Consumo</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemProdutosMaisConsumidos;
