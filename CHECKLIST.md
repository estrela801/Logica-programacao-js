# Setup inicial de um repositório do GitHub no Visual Studio Code local

1. Limpar cred´s do sistema 
2. Limpar os dados do navegador 
3. Abrir o repositório no GitHub
4. Copiar a url do repositório (HTTPS)
5. Abrir o VS Code
6. Se houver algum projeto aberto no VS Code, feche usando (CTRL + K F)
7. Se houver algum usuário logado no VS Code, então clique 'sair'
8. Verifique as variáveis `user.name` e `user.email` globais:
~~~bash
git config --global user.name
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas as variáveis 
~~~bash
git config --global --uset user.name
git config --global --uset user.email
~~~
10. Faça a clonagem do repositório no ca=omputador local 
~~~bash
git clone https://github.com/<usuario>/<repotitorio>.git
~~~
11. Abra o projeto clonado no VS Code
~~~bash
code -r <repositorio_local>
~~~
12. Faça loguin no VS  Code local para sincronizar suas extensões e temas
13. Ative o salvamento automático _(Auto Save)_: Arquivo > Salvamento automatico
