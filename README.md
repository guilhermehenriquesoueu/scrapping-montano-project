![Logo da MontanoProject](https://i.ibb.co/tKZwp6s/header.png)
![Design script](https://i.ibb.co/X2FMX3W/Extens-es.png)

## Descrição

Alternativa de scrapping criada com JS de forma básica para demonstrar o conceito da solução.

Video Youtube: https://www.youtube.com/watch?v=bVaTVq8pSmc

## Como Rodar a Aplicação

Para executar esta aplicação, siga os seguintes passos:

1. Abra o Firefox e acesse a URL: `about:debugging#/runtime/this-firefox`.
2. Clique no botão para carregar extensões temporariamente.
3. Na raiz do projeto, execute o comando `docker compose up`.
4. Acesse `localhost:80` em um navegador separado.
5. Use o formulário para enviar o link que deseja extrair informações, como `https://www.reddit.com/r/AskProgramming/`.
6. O link será aberto no Firefox, e o script "TheRipper" será executado para coletar dados do Reddit.
7. Após a execução do script, a janela será redirecionada para uma página em branco.
8. Vá até a dashboard e clique em "load posts" para carregar os dados coletados.
