# Node.js - Aula 06 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:  
* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`  
* 1.2.  para Number: `max` e `min`


No banco *be-mean-instagram* estou pedindo para criar uma nova *collection*, chamada `alunos`.  

No JS abaixo, eu inseri na *collection* um objeto correto.  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const aluno = {  
  //o match aceita regex, no caso abaixo, o nome pode ser case insensitive e começar com qualquer caractere  
  nome: {type: String, match: /^./i },  

  //max serve para setar o campo para que seja inserido um número máximo, no caso no máximo até 30, se não dá erro  
  idade: {type: Number, max: 30},  

  //o enum irá setar o sexo do cara, Masculino ou Feminino  
  sexo: {type: String, enum: ['M', 'F']},  
  
  //a ideia desse campo é que o aluno tenho no mínimo 5 aulas, caso contrário dá erro  
  aulas: {type: Number, min: 5},  

  //o nome da cidade deve conter no máximo 10 caracteres  
  cidade: {type: String, maxlength: 10},  

  //o nome do estado deve conter no mínimo 2 caracteres  
  estado: {type: String, minlength: 2}  
}  

const alunoSchema = new Schema(aluno);  

const AlunoModel = mongoose.model('alunos', alunoSchema);  

const data = (  
  {  
    nome: 'Ednilson',  
    idade: 24,  
    sexo: 'M',  
    aulas: 16,  
    cidade: 'Itapeva',  
    estado: 'SP'  
  }  
);  

const Ednilson = new AlunoModel(data);  

Ednilson.save(function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido o aluno: ', data);  
});  
```


A saída no *nodemon* foi a seguinte:  

```  
Inserido o aluno:  { _id: 56ac40f7dd143b141efb4685,  
  estado: 'SP',  
  cidade: 'Itapeva',  
  aulas: 16,  
  sexo: 'M',  
  idade: 24,  
  nome: 'Ednilson',  
  __v: 0 }  
```


Agora, no JS abaixo, é o objeto com erros de validação padrão:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const aluno = {  
  //o match aceita regex, no caso abaixo, o nome pode ser case insensitive e começar com qualquer caractere  
  nome: {type: String, match: /^./i },  

  //max serve para setar o campo para que seja inserido um número máximo, no caso no máximo até 30, se não dá erro  
  idade: {type: Number, max: 30},  

  //o enum irá setar o sexo do cara, Masculino ou Feminino  
  sexo: {type: String, enum: ['M', 'F']},  
  
  //a ideia desse campo é que o aluno tenho no mínimo 5 aulas, caso contrário dá erro  
  aulas: {type: Number, min: 5},  

  //o nome da cidade deve conter no máximo 10 caracteres  
  cidade: {type: String, maxlength: 10},  

  //o nome do estado deve conter no mínimo 2 caracteres  
  estado: {type: String, minlength: 2}  
}  

const alunoSchema = new Schema(aluno);  

const AlunoModel = mongoose.model('alunos', alunoSchema);  

const data = (  
  {  
    nome: 'Aline',  
    idade: 31,  
    sexo: 'J',  
    aulas: 3,  
    cidade: 'São Carlos',  
    estado: 'SP'  
  }  
);  

const Ednilson = new AlunoModel(data);  

Ednilson.save(function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido o(a) aluno(a): ', data);  
});  
```  

E a saída no *nodemon* foi a seguinte:  

```  
Erro:  { [ValidationError: alunos validation failed]  
  message: 'alunos validation failed',  
  name: 'ValidationError',  
  errors:   
   { aulas:   
      { [ValidatorError: Path `aulas` (3) is less than minimum allowed value (5).]  
        properties: [Object],  
        message: 'Path `aulas` (3) is less than minimum allowed value (5).',  
        name: 'ValidatorError',  
        kind: 'min',  
        path: 'aulas',  
        value: 3 },  
     sexo:   
      { [ValidatorError: `J` is not a valid enum value for path `sexo`.]  
        properties: [Object],  
        message: '`J` is not a valid enum value for path `sexo`.',  
        name: 'ValidatorError',  
        kind: 'enum',  
        path: 'sexo',  
        value: 'J' },  
     idade:   
      { [ValidatorError: Path `idade` (31) is more than maximum allowed value (30).]  
        properties: [Object],  
        message: 'Path `idade` (31) is more than maximum allowed value (30).',  
        name: 'ValidatorError',  
        kind: 'max',  
        path: 'idade',  
        value: 31 } } }  
```


## Cadastre 3 pokemons **de uma só vez**.
## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`.
## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha
## Remova **todos** os Pokemons com `attack` **acima de 50**.