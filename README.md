# Integração Front-end e Back-end do CRUD de Clientes, Produtos e Serviços
Este projeto consiste em uma atividade prática para treinar habilidades de desenvolvimento e integração entre front-end e back-end utilizando a arquitetura REST. O pré-projeto back-end fornece um micro-serviço desenvolvido em Java, acessível através de rotas RESTful. O objetivo é criar uma aplicação front-end capaz de se comunicar com o back-end para realizar operações CRUD (listar, cadastrar, atualizar e excluir) de clientes, produtos e serviços. Esta atividade é uma complementação dos recursos da atividade 01 que funciona apenas por linha de comando.

## Requisitos
- JDK (Java Development Kit) versão 17 ou superior
- VSCode
- Node.js
- TypeScript
- React
  
## Instruções de Uso
1. Clone este repositório para o seu ambiente de desenvolvimento local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Certifique-se de que o JDK 17 está instalado e configurado no seu sistema.
5. Limpe e compile o projeto com o comando `./mvnw clean install`.
6. Execute o comando `./mvnw spring-boot:run` para subir toda a aplicação back-end no modo debug.
7. Abra outro terminal e navegue até o diretório /frontend.
8. Execute o comando npm install para instalar as dependências do projeto.
9. Execute o comando npm start para iniciar o servidor de desenvolvimento.
10. Acesse a aplicação no navegador através do endereço http://localhost:3000.

## Funcionalidades
- Listagem de clientes, produtos e serviços cadastrados.
- Cadastro de novos clientes, produtos e serviços.
- Atualização de dados de clientes, produtos e serviços existentes.
- Exclusão de clientes, produtos e serviços cadastrados.

## Comunicação com o Back-end
O back-end está disponível em http://localhost:32832 e fornece as seguintes rotas:
- `/clientes`: Lista todos os clientes cadastrados.
- `/cliente/{id}`: Retorna os detalhes de um cliente específico pelo seu ID.
- `/cliente/cadastrar`: Rota para cadastrar um novo cliente.
- `/cliente/excluir`: Rota para excluir um cliente.
- `/cliente/atualizar`: Rota para atualizar os dados de um cliente.
  
- `/produtos`: Lista todos os produtos cadastrados.
- `/produto/{id}`: Retorna os detalhes de um produto específico pelo seu ID.
- `/produto/cadastrar`: Rota para cadastrar um novo produto.
- `/produto/excluir`: Rota para excluir um produto.
- `/produto/atualizar`: Rota para atualizar os dados de um produto.

- `/servicos`: Lista todos os serviços cadastrados.
- `/servico/{id}`: Retorna os detalhes de um serviço específico pelo seu ID.
- `/servico/cadastrar`: Rota para cadastrar um novo serviço.
- `/servico/excluir`: Rota para excluir um serviço.
- `/servico/atualizar`: Rota para atualizar os dados de um serviço.
