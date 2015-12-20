# Node.js - Aula 02 - Exercício  
**Autor:** Ednilson Amaral  
**Data:** 

## Quais são os 4 verbos que utilizamos para o CRUD?  

* Create > POST;  
* Retrieve/Read > GET;  
* Update > PUT;  
* Delete > DELETE.


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.  

Toda vez que é enviada uma requisição para o servidor, é enviada como resultado um código de número inteiro, contendo 3 dígitos. Isso, com o intuito de entender a requisição e realizar ou não a requisição. Esse código de 3 dígitos é chamado de **status code**.  

Esses códigos são divididos em grupos. Tais grupos são divididos pelo primeiro dígito do código, conforme os exemplos abaixo:

### 1xx Informações  

Esse grupo serve apenas para informar que a informação foi recebida e que o processo irá continuar.  

![]()


### 2xx Sucesso  

Esse grupo significa que a requisição foi recebida com sucesso.  

![]()


### 3xx Redirecionamento  

Esse grupo serve para avisar diretamente no cabeçalho do HTTP uma mudança de página.  

![]()


### 4xx Erro do Cliente  

Esse grupo serve para nos dizer que o conteúdo não está acessível para o usuário (visitante) e nem para os motores de busca.  

![]()


### 5xx Erro de Servidor  

Esse grupo serve para mostrar que alguma coisa aconteceu para que o servidor não tenha atendido a requisição, devido à algum erro.  

![]()


## Explique o que é cada parâmetro da função recebida no `createServer`.
## O que é e para que serve a Querystring?
## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes.