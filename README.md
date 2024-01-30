# GitHub API

Este é um projeto em Angular 16 que permite aos usuários buscar repositórios no GitHub usando a API pública do GitHub. Ele utiliza a biblioteca Angular Material para aprimorar a interface do usuário, incluindo ícones que são fornecidos pela mesma biblioteca.

## Funcionalidades

- **Pesquisa de Repositórios:** Os usuários podem pesquisar repositórios do GitHub usando palavras-chave.
- **Lista de Resultados:** Exibe uma lista de resultados de repositórios correspondentes à pesquisa.
- **Detalhes do Repositório:** Fornece informações detalhadas sobre um repositório específico ao ser selecionado na lista.

## Tecnologias Utilizadas

- **Angular 16:** A estrutura de desenvolvimento front-end.
- **Angular Material:** Biblioteca de UI para criar uma interface de usuário moderna e responsiva.
- **GitHub API:** A API pública do GitHub para obter informações sobre repositórios.

## Instalação

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Instale as Dependências:**

   ```bash
   cd nome-do-repositorio
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento:**

   ```bash
   ng serve
   ```

   O aplicativo estará acessível em `http://localhost:4200/`.

## Configuração da API do GitHub

Certifique-se de ter uma [chave de acesso pessoal](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) do GitHub para evitar limitações na taxa de solicitações à API.

Crie um arquivo `src/environments/environment.ts` e adicione sua chave de acesso:

```typescript
export const environment = {
  production: false,
  githubApiKey: "Sua-Chave-de-Acesso-Pessoal",
};
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
