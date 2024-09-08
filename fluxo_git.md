 ## 📁 Passos para configuração do fluxo de trabalho

> SOMENTE UMA VEZ
### Fork do repositório e clone
```
git clone https://github.com/seu-usuario/HackathonEcommerce.git
cd HackathonEcommerce
```

### Configurar upstream
```
git remote add upstream https://github.com/wilgoncalves/HackathonEcommerce.git
```

> SEMPRE EXECUTAR OS COMANDOS ABAIXO PARA ATUALIZAR
### Sincronizar com developer
```
git fetch upstream
git checkout -b developer --track upstream/developer
git pull upstream developer
```

### Criar um Pull Request para a branch
1. Vá para o repositório forkado no GitHub.
2. Clique em Compare & pull request.
3. Preencha a descrição para o pull request e crie o PR para a sua branch no repositório principal.

#### Manter o fork sincronizado
Sincronize seu fork regularmente para evitar conflitos.
Sempre trabalhe na branch de desenvolvimento (developer) e crie sub-branches para features específicas.
