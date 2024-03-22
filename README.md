# Desenvolvimento de GUI com HTML, MaterializeCSS e React

Este projeto consiste na implementação de uma interface gráfica de usuário (GUI) utilizando HTML, MaterializeCSS e React. O objetivo é modernizar o sistema desenvolvido para o grupo WB na atv01, adicionando uma GUI responsiva e amigável tanto para navegadores comuns quanto para dispositivos móveis.

## Funcionalidades

- Desenvolvimento de diversas telas utilizando HTML e MaterializeCSS para a estilização.
- Utilização da biblioteca React para a criação de componentes de classe, seguindo a regra estabelecida pela equipe de desenvolvimento.
- Implementação de transições entre as telas para uma experiência de usuário mais fluída.

## Roteador (Roteamento de Telas)

A classe `Roteador` é responsável por controlar o roteamento entre as diferentes telas da aplicação. Ela permite que o usuário navegue entre as telas de cadastro e listagem de clientes, produtos e serviços.

### Funcionamento

- Ao clicar nos botões da barra de navegação, o usuário pode alternar entre as diferentes telas disponíveis.
- Cada tela é renderizada condicionalmente com base no estado atual da aplicação.

### Componentes Importantes

- `BarraNavegacao`: Componente de barra de navegação que exibe os botões de navegação entre as telas.
- `CadastroCliente`, `CadastroProduto`, `CadastroServico`: Componentes de cadastro para clientes, produtos e serviços, respectivamente.
- `ListagemClientes`, `ListagemProdutos`, `ListagemServicos`: Componentes de listagem para clientes, produtos e serviços, respectivamente.
- Outros componentes relacionados à análise de dados, como `ListagemClientesPorGenero`, `ListagemTop10Clientes`, `ListagemProdutosMaisConsumidos`, etc.

## Instruções de Execução

1. Clone o repositório: `git clone -b atv02 https://github.com/abnerdouglas/listasPOO.git`
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm start`

Certifique-se de possuir o Node.js e o npm instalados em sua máquina.


