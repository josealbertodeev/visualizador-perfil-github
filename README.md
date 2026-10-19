# Visualizador de Perfil do GitHub

Busque qualquer usuário do GitHub e veja avatar, nome, bio, seguidores e os 10 repositórios criados mais recentemente. Os dados vêm direto da API pública do GitHub.

**[Ver o projeto online](https://josealbertodeev.github.io/visualizador-perfil-github/)**

| Desktop | Mobile |
| --- | --- |
| ![Demonstração no desktop](https://github.com/user-attachments/assets/6d9e792a-4edb-46e9-b214-2416ed75cf63) | ![Demonstração no mobile](https://github.com/user-attachments/assets/3f4fd2f4-817f-47e6-9e01-906cee725153) |

## Funcionalidades

- Busca pelo botão ou pela tecla Enter
- Perfil com avatar, nome, bio, seguidores e seguindo
- Os 10 repositórios criados mais recentemente, com estrelas, forks, watchers e linguagem
- Mensagem de carregamento enquanto a API responde
- Tratamento de erro para usuário inexistente e campo vazio
- Textos padrão para perfis sem nome ou sem bio

## Tecnologias

- HTML5
- CSS3 (custom properties, Flexbox, animação de gradiente, media queries)
- JavaScript (ES Modules, `async/await`, Fetch API)
- [GitHub REST API](https://docs.github.com/en/rest)

## Arquitetura

O JavaScript está dividido em três módulos, cada um com uma responsabilidade:

```
src/js/
├── githubApi.js    # Comunicação com a API: faz as requisições e trata respostas com erro
├── profileView.js  # Interface: recebe os dados e monta o HTML do perfil
└── index.js        # Controle: escuta os eventos, chama a API e envia o resultado para a interface
```

Essa separação deixa cada parte mais fácil de entender e de trocar. Por exemplo, mudar o layout do card só afeta o `profileView.js`, e trocar a API só afeta o `githubApi.js`.

### Endpoints usados

| Dado | Endpoint |
| --- | --- |
| Perfil | `GET /users/{usuario}` |
| Repositórios | `GET /users/{usuario}/repos?per_page=10&sort=created` |

### Tratamento de erros

As funções da API verificam `response.ok` e lançam um erro quando a resposta não é de sucesso. O `index.js` captura esse erro com `try/catch`, limpa a tela e avisa o usuário.

## Como rodar localmente

```bash
git clone https://github.com/josealbertodeev/visualizador-perfil-github.git
cd visualizador-perfil-github
```

Como o projeto usa ES Modules, ele precisa ser servido por um servidor local. Abrir o `index.html` com duplo clique não funciona, porque o navegador bloqueia módulos carregados via `file://`. Use a extensão Live Server do VS Code ou:

```bash
npx serve .
```

## Limitações conhecidas

- A API pública do GitHub permite 60 requisições por hora sem autenticação. Cada busca usa 2 requisições.

## Próximos passos

- Buscar perfil e repositórios em paralelo com `Promise.all`
- Mostrar uma mensagem específica quando o limite da API for atingido
- Trocar os `alert()` por mensagens dentro da página
- Exibir a descrição de cada repositório

## Autor

**José Alberto**: [LinkedIn](https://www.linkedin.com/in/josealbertofarias/) · [Portfólio](https://josealbertodeev.github.io/portfolio/)
