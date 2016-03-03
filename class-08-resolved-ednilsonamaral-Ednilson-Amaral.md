# Node.js - Aula 08 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## 1 - Insira 5 pokemons novos, na coleção `pokemons`, escolha 3 e os adicione em um array e uma nova coleção chamada `meus-pokemons`, utilizando o `ObjectId`. Adicione o `required` em campos que ache obrigatório no *Schema* do Pokemon.  

### Inserindo 5 pokemons novos  

`crud.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  

const _schema = {  
  name: {type: String, required: true, match: /^./i},  
  description: {type: String, required: true, match: /^./i},  
  type: {type: String, required: true, match: /^./i},  
  attack: {type: Number, min: 1},  
  height: {type: Number}  
};  

const PokemonSchema = new Schema(_schema);  
const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

//inserindo os 5 novos pokemons  
const data = [  
  {  
    name: 'Educamon',  
    description: 'O pokemon mais educadinho do universo',  
    type: 'educador',  
    attack: 76,  
    height: 1.7  
  },  

  {  
    name: 'NFLMon',  
    description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',  
    type: 'player',  
    attack: 105,  
    height: 2.3  
  },  

  {  
    name: 'JiuJiteroMon',  
    description: 'Faixa preta 3º grau',  
    type: 'jiujitsu',  
    attack: 153,  
    height: 1.6  
  },  

  {  
    name: 'BaianoMon',  
    description: 'O pokemon mais preguiçoso do universo',  
    type: 'preguiça',  
    attack: 51,  
    height: 1.7  
  },  

  {  
    name: 'GoogleMon',  
    description: 'O pokemon mais googlet do universo',  
    type: 'google',  
    attack: 99,  
    height: 1.7  
  },    
];  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```


Saída no terminal:  

```  
$ node app.js  
Mongoose default connection error: Error: Trying to open unclosed connection.  
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido(s):  [ { _id: 56d841324d9d0e4b13764e93,  
    height: 1.7,  
    attack: 76,  
    type: 'educador',  
    description: 'O pokemon mais educadinho do universo',  
    name: 'Educamon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e94,  
    height: 2.3,  
    attack: 105,  
    type: 'player',  
    description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',  
    name: 'NFLMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e95,  
    height: 1.6,  
    attack: 153,  
    type: 'jiujitsu',  
    description: 'Faixa preta 3º grau',  
    name: 'JiuJiteroMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e96,  
    height: 1.7,  
    attack: 51,  
    type: 'preguiça',  
    description: 'O pokemon mais preguiçoso do universo',  
    name: 'BaianoMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e97,  
    height: 1.7,  
    attack: 99,  
    type: 'google',  
    description: 'O pokemon mais googlet do universo',  
    name: 'GoogleMon',  
    __v: 0 } ]  
```


### Escolhendo 3 pokemons e inserindo em uma nova coleção com o `ObjectId`.  

`ref.js`  

```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  

const _schema = {  
  pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]  
};  

const PokemonSchema = new Schema(_schema);  
const PokemonModel = mongoose.model('meus-pokemons', PokemonSchema);  

//inserindo os 3 pokemons escolhidos com ObjectID  
const data = {  
  pokemons: ['56d841324d9d0e4b13764e97', '56d841324d9d0e4b13764e96', '56d841324d9d0e4b13764e95']  
};  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```


Saída no terminal:  

```  
$ node app.js  
Mongoose default connection error: Error: Trying to open unclosed connection.  
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido(s):  { pokemons:  
   [ 56d841324d9d0e4b13764e97,  
     56d841324d9d0e4b13764e96,  
     56d841324d9d0e4b13764e95 ],  
  _id: 56d843ae813254aa1312e7a7,  
  __v: 0 }  
```


## 2 - Crie um *Schema* de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):  

* email;  
* cpf;  
* cnpj;  
* url;  
* ip.


`app.js`  

```js  
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  

const data = {  
  email: 'ednilsonamaral.ti@gmail.com',  
  cpf: 12345678,  
  cnpj: 123654,  
  url: 'www.ednilsonamaral.com.br',  
  ip: '192.168.0.1'  
};  

CRUD.create(data);  
```


`schema.js`  

```js  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const email = require('./fields/field-email');  
const cpf = require('./fields/field-cpf');  
const cnpj = require('./fields/field-cnpj');  
const url = require('./fields/field-url');  
const ip = require('./fields/field-ip');  

const _schema = {  
  email,  
  cpf,  
  cnpj,  
  url,  
  ip  
};  

module.exports = new Schema(_schema);  
```


`model.js`  

```js  
module.exports = function (Schema, ModelName) {  
  const mongoose = require('mongoose');  
  return mongoose.model(ModelName, Schema);  
};  
```


`controller.js`  

```js  
'use strict';  

const Schema = require('./schema');  
const Model = require('./model')(Schema, 'atomicos');  

const CRUD = {  
  create: function(data) {  
    console.log("create: ", data);  
    const AmoticosModel = new Model(data);  
    AmoticosModel.save(function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Inseriu:', data);  
    });  
  },  
  retrieve: function(query) {  
    Model.find(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Buscou:', data);  
    });  
  },  
  update: function(query, mod, options) {  
    var options = options || {};  
    Model.update(query, mod, options, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Alterou:', data);  
    });  
  },  
  delete: function(query) {  
    Model.remove(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Deletou:', data);  
    });  
  },  
};  

module.exports = CRUD;  
```


`fields`  

```js  
//field-email.js  
module.exports = {  
  type: String,   
  match:   
    [  
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,   
      'Preencha um e-mail válido!'  
    ],   
    required: true  
  }  

//field-cpf.js  
module.exports = {type: Number, minlength: 3, maxlength: 11, required: true}  

//field-cnpj.js  
module.exports = {type: Number, minlength: 3}  

//field-url.js  
module.exports = {type: String, required: true, match: /([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/}  

//field-ip.js  
module.exports = {type: String, maxlenght: 15}  
```


Saída no terminal:  

```  
$ node app.js  
create:  { email: 'ednilsonamaral.ti@gmail.com',  
  cpf: 12345678,  
  cnpj: 123654,  
  url: 'www.ednilsonamaral.com.br',  
  ip: '192.168.0.1' }  
Mongoose default connection connected to mongodb://localhost/bancoTeste  
Mongoose default connection is open  
Inseriu: { _id: 56d84cfdac4d9e351638cce0,  
  ip: '192.168.0.1',  
  url: 'www.ednilsonamaral.com.br',  
  cnpj: 123654,  
  cpf: 12345678,  
  email: 'ednilsonamaral.ti@gmail.com',  
  __v: 0 }  
```


## 3 - Dê 3 exemplos **diferentes**, de cada, utilizando as funções:
* `findAndModify`
* `findOneAndUpdate`
* `findOneAndRemove`


## 4 - Crie 1 *Schema* com todo CRUD funcional e métodos especiais, que agrupe:
* virtuals
* getters & setters
* method & static
* embedded document
* plugins
* middlewares


## 5 - Crie 1 *Schema* para `password` com criptografia e arquitetura atômica.
* use SHA256 com SALT como criptografia;
* use middleware com pre save;
* use methods.