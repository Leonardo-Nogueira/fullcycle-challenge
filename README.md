# Desafio Full Cycle - Módulo Docker: Nginx com Node com proxy reverso

Repositório responsável pelo desafio de Nginx com Node usando Docker do curso da Full Cycle

# Instruções

 A idéia principal é que quando um usuário acesse o `nginx`, o mesmo fará uma chamada em nossa aplicação `Node.js`. buscaraum  registro em nosso banco de dados `Mysql`, pré cadastrado na tabela `people`.

O retorno da aplicação Node.js para o nginx deverá ser:

```html
Full Cycle Rocks!
| ID PESSOA     | NOME PESSOA   |
| ------------- | ------------- |
| 1             | LEONARDO      |
| 2             | JOAO          |
| 3             | LETICIA       |
| 4             | RAFAEL        |
```

Gere o `docker-compose` de uma forma que basta apenas rodarmos que tudo deverá estar funcionando e disponível na porta: 8080.
                                                            
```bash
docker-compose up -d 
```

# Como executar o projeto

1. Agora basta executar o comando `docker-compose` para subir os containers:

```bash
docker-compose up -d
```

2. `Espere alguns segundos para o projeto subir sequencialmente com o dockerize` 



3. Agora basta acessar a aplicação em seu browser:

```bash
http://localhost:8080
```

Ja tem alguns nomes inseridos :)

