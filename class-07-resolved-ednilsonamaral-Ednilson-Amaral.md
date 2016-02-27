# Node.js - Aula 07 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## 1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 como base (use ele no prototype).  

`eventEmitter.js`  
```js  
'use strict';  

//chamando os módulos necessários  
const EventEmitter = require('events').EventEmitter;  
const util = require('util');  

//ouvindo  
function HelloWorld(data){  
  this.data = data;  
  this.on('hello:init', showInit);  
  this.on('erro', showError);  

  EventEmitter.call(this);  
}  

//emitindo  
HelloWorld.prototype.init = function() {  
  if (this.data.msg) {  
    this.emit('hello:init', this.data);  
  } else {  
    this.emit('erro', new TypeError('Nenhuma mensagem para mostrar'));  
  }  
};  

//utilizando o util para herança, inserção de objetos, logs, etc  
util.inherits(HelloWorld, EventEmitter);  

//função do showInit;  
function showInit (data){  
  console.log(data.msg);  
}  

//função do showError  
function showError (err){  
  throw err;  
}  

//criando a mensagem para ser mostrada  
const mensagem = new HelloWorld({msg: 'Olá, mundo!'});  
mensagem.init();  
```


Saída no terminal:  
```  
$ node event.js  
Olá, mundo!  
```


## 2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.
## 3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.