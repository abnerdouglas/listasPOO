import { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
  id: number;
  nome: string;
  cpf: string;
  valorConsumido: number;
};

const ListagemTop5ClientesEmValor = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {

    const clientesMock: Cliente[] = [
      {
        id: 1,
        nome: 'João Silva',
        cpf: '123.456.789-00',
        valorConsumido: 4050
      },
      {
        id: 2,
        nome: 'Maria Oliveira',
        cpf: '987.654.321-00',
        valorConsumido: 3300
      },
      {
        id: 3,
        nome: 'Abner Machado',
        cpf: '123.456.789-00',
        valorConsumido: 3000
      },
      {
        id: 4,
        nome: 'João Silva',
        cpf: '987.654.321-00',
        valorConsumido: 2700
      },
      {
        id: 5,
        nome: 'Andreas Pereira',
        cpf: '123.456.789-00',
        valorConsumido: 2500
      },
      {
        id: 6,
        nome: 'Maria do Rosário',
        cpf: '987.654.321-00',
        valorConsumido: 2300
      },
      {
        id: 7,
        nome: 'Abel Ferreira',
        cpf: '123.456.789-00',
        valorConsumido: 2000
      },
      {
        id: 8,
        nome: 'Fernanda Ribeiro',
        cpf: '987.654.321-00',
        valorConsumido: 1900
      },
      {
        id: 9,
        nome: 'Deyverson',
        cpf: '123.456.789-00',
        valorConsumido: 1700
      },
      {
        id: 10,
        nome: 'Maria Oliveira',
        cpf: '987.654.321-00',
        valorConsumido: 1200
      },
    ];

    setClientes(clientesMock);
  }, []);

  return (
    <div className="container">
      <h5><strong>Listagem dos 5 Clientes que Mais Consumiram em Valor</strong></h5>
      <hr />
      <table className="bordered striped centered highlight responsive-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Valor Consumido (R$)</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>R${cliente.valorConsumido},00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemTop5ClientesEmValor;
