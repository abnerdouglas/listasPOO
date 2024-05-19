import { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
  id: number;
  nome: string;
  cpf: string;
  genero: string;
};

const ListagemClientesPorGenero = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {

    const clientesMock: Cliente[] = [
      {
        id: 1,
        nome: 'João Silva',
        cpf: '123.456.789-00',
        genero: 'Masculino'
      },
      {
        id: 2,
        nome: 'Maria Oliveira',
        cpf: '987.654.321-00',
        genero: 'Feminino'
      },
      {
        id: 3,
        nome: 'Abner Machado',
        cpf: '123.456.789-00',
        genero: 'Masculino'
      },
      {
        id: 4,
        nome: 'João Silva',
        cpf: '987.654.321-00',
        genero: 'Masculino'
      },
      {
        id: 5,
        nome: 'Andreas Pereira',
        cpf: '123.456.789-00',
        genero: 'Masculino'
      },
      {
        id: 6,
        nome: 'Maria do Rosário',
        cpf: '987.654.321-00',
        genero: 'Feminino'
      },
      {
        id: 7,
        nome: 'Abel Ferreira',
        cpf: '123.456.789-00',
        genero: 'Masculino'
      },
      {
        id: 8,
        nome: 'Fernanda Ribeiro',
        cpf: '987.654.321-00',
        genero: 'Feminino'
      },
      {
        id: 9,
        nome: 'Deyverson',
        cpf: '123.456.789-00',
        genero: 'Masculino'
      },
      {
        id: 10,
        nome: 'Maria Oliveira',
        cpf: '987.654.321-00',
        genero: 'Feminino'
      },
    ];

    setClientes(clientesMock);
  }, []);


  return (
    <div className="container">
      <h5><strong>Listagem de Clientes Por Gênero</strong></h5>
      <hr />
      <div>
        <h6>Gênero Masculino</h6>
        <table className="bordered striped centered highlight responsive-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Gênero</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => {
              if (cliente.genero === 'Masculino') {
                return (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.genero}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 50 }}>
        <h6>Gênero Feminino</h6>
        <table className="bordered striped centered highlight responsive-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Gênero</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => {
              if (cliente.genero === 'Feminino') {
                return (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.genero}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListagemClientesPorGenero;
