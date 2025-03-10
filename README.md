# README

## Executando Testes

Este projeto inclui testes com Cypress e Xunit. Aqui está como você pode executá-los:

### Testes Cypress

Cypress é usado para testes de ponta a ponta neste projeto. Para executar esses testes, você precisa ter Node.js e npm instalados em sua máquina.

1. Primeiro, instale as dependências do projeto executando o seguinte comando no diretório raiz do projeto:

```bash
npm install
```

2. Para executar os testes em segundo planoo, use o seguinte script npm:

```bash
npm run cypress:test
```

3. Se você quiser abrir o Cypress Test Runner e executar os testes interativamente, use este comando:

```bash
npm run cypress:open
```

### Testes Xunit

Xunit é usado para testes unitários neste projeto. Para executar esses testes, você precisa ter .NET Core instalado em sua máquina.

1. Navegue até a raiz do projeto.

2. Execute o seguinte comando para executar os testes:

```bash
dotnet test
```

Certifique-se de que sua aplicação está em execução ao executar testes de ponta a ponta com Cypress. Você pode iniciar sua aplicação executando `dotnet run` no diretório raiz da aplicação.