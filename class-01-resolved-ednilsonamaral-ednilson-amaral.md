# Node.js - Aula 01 - Exercício  
**Autor: ** Ednilson Amaral  
**Data: ** 


## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.  

### Síncrono  

Em um processo síncrono é executado apenas uma função por vez, não mais que isso. Um exemplo simples para entendermos, digamos que tenhamos que baixar 20 imagens de um servidor, no processo síncrono ele vai fazer a requisição para o servidor e baixar uma imagem, e, enquanto não terminar de baixar essa imagem, ele não vai fazer outra requisição para baixar a próxima imagem. Ou seja, vai demorar séculos para baixar todas as 20 imagens do servidor.

### Assíncrono  

Já em um processo assíncrono, é possível executar várias funções por vez. Não possui uma ordem definida e não sabemos qual irá terminar primeiro ou por último.  

Seguindo o mesmo exemplo do download das 20 imagens de um servidor, no processo assíncrono, é enviado ao servidor várias requisições ao mesmo tempo, para baixar as 20 imagens. Então, será baixado as 20 imagens ao mesmo tempo. Porém, não sabemos qual terminará por primeiro ou por último, e não terá uma ordem para baixar as imagens.


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.  

Ele compila o código JavaScript para o formato nativa de máquina, assim, permitindo que rode na velocidade de um código binário compilado.  

O V8 compila e executa o código JavaScript, manipulando a alocação de memória para objetos e coletando os que não é necessário nos objetos. Essa coleta de objetos descenessários é uma das chaves para o desempenho do V8. O V8 também oferece todos os tipos de dados, operadores, objetos e funções escificadas no padrão ECMA.

![Exemplo de como funciona o engine do JS com V8]()


## Qual a diferença entre um sistema single para um multi-thread?
## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

## Qual a versão do seu `node`?  

```  
ednilson@EDNILSON-NB:~$ node -v  
v5.2.0  
```


## Qual a versão do seu `npm`?  

```  
ednilson@EDNILSON-NB:~$ npm -v  
3.3.12  
```