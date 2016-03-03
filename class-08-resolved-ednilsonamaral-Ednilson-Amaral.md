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
* email
* cpf
* cnpj
* url
* ip


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