# Node.js - Aula 09 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## Faça uma lista de todas as funções que o módulo `assert` possui e coloque no MD.  

* `assert(value[, message])`;  
* `assert.deepEqual(actual, expected[, message])`;  
* `assert.deepStrictEqual(actual, expected[, message])`;  
* `assert.doesNotThrow(block[, error][, message])`;  
* `assert.equal(actual, expected[, message])`;  
* `assert.fail(actual, expected, message, operator)`;  
* `assert.ifError(value)`;  
* `assert.notDeepEqual(actual, expected[, message])`;  
* `assert.notDeepStrictEqual(actual, expected[, message])`;  
* `assert.notEqual(actual, expected[, message])`;  
* `assert.notStrictEqual(actual, expected[, message])`;  
* `assert.ok(value[, message])`;  
* `assert.strictEqual(actual, expected[, message])`;  
* `assert.throws(block[, error][, message])`.


## Modifique todos os testes que estão sendo usados no `assert.equal` para `assert.deepStrictEqual(valor, result, 'comentário')`, faça todos passarem, coloque os testes no MD.  

Primeiramente, fiz o teste falhar.  

`add.spec.js`  
```js  
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 2, ['Os números apresentados não são iguais!']);  
```

Saída no terminal:  

```  
$ mocha add.spec.js  

assert.js:89  
  throw new assert.AssertionError({  
  ^  
AssertionError: Os números apresentados não são iguais!  
    at Object.<anonymous> (/var/www/be-mean-instagram-nodejs/class-09/assert/add.spec.js:5:8)  
    at Module._compile (module.js:413:34)  
    at Object.Module._extensions..js (module.js:422:10)  
    at Module.load (module.js:357:32)  
    at Function.Module._load (module.js:314:12)  
    at Module.require (module.js:367:17)  
    at require (internal/module.js:16:19)  
    at /usr/lib/node_modules/mocha/lib/mocha.js:219:27  
    at Array.forEach (native)  
    at Mocha.loadFiles (/usr/lib/node_modules/mocha/lib/mocha.js:216:14)  
    at Mocha.run (/usr/lib/node_modules/mocha/lib/mocha.js:468:10)  
    at Object.<anonymous> (/usr/lib/node_modules/mocha/bin/_mocha:403:18)  
    at Module._compile (module.js:413:34)  
    at Object.Module._extensions..js (module.js:422:10)  
    at Module.load (module.js:357:32)  
    at Function.Module._load (module.js:314:12)  
    at Function.Module.runMain (module.js:447:10)  
    at startup (node.js:141:18)  
    at node.js:933:3  
```


Então, após, fiz o teste passar:  

`add.spec.js`  
```js  
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 3, ['Os números apresentados não são iguais!']);  
```


Saída no terminal:  

```  
$ mocha add.spec.js  


  1 passing (5ms)  
```


## Na Calculadora do Chai, crie mais 3 testes, um para divisão, outro para multiplicação e um para raiz quadrada, lembrando que não deve aceitar divisão por zero.  

* Use o `expect` para testar a exceção da divisão por zero.  

Os arquivos são:  

`calc.js`  
```js  
'use strict';  

let sum  = (a,b) => a+b;  
let sub  = (a,b) => a-b;  
let mult = (a,b) => a*b;  
let div  = (a,b) => a === 0 || b === 0 ? 0 : a / b;  
let sqtr = a => Math.sqrt(a);  


module.exports = {  
	sum  : sum,  
	sub  : sub,  
	mult : mult,  
	div  : div,  
	sqtr : sqtr  
};  
```


`calc.spec.js`  
```js  
'use strict';  

const expect = require('chai').expect;  
const calc = require('./calc');  

describe('calc', function() {  
	describe('calc testing',  () => {  
		it('sum of two number',  () => {  
			expect(calc.sum(1,1)).to.equal(2);  
		});  

		it('sub of two number',  () => {  
			expect(calc.sub(2,5)).to.equal(-3);  
		});  

		it('mult of two number',  () => {  
			expect(calc.mult(5,5)).to.equal(25);  
		});  

		it('div of two number',  () => {  
			expect(calc.div(15,5)).to.equal(3);  
		});  

		it('div of two number dont aceept div by zero',  () => {  
			expect(calc.div(15,0)).to.equal(0);  
			expect(calc.div(0,1)).to.equal(0);  
		});  

		it('sqtr of a number',  () => {  
			expect(calc.sqtr(16)).to.equal(3);  
		});  
	});  
});  
```


Falhando, temos a saída no terminal:  

```  
$ mocha calc.spec.js  


  calc  
    calc testing  
      ✓ sum of two number  
      ✓ sub of two number  
      ✓ mult of two number  
      ✓ div of two number  
      ✓ div of two number dont aceept div by zero  
      1) sqtr of a number  


  5 passing (27ms)  
  1 failing  

  1) calc calc testing sqtr of a number:  

      AssertionError: expected 4 to equal 3  
      + expected - actual  

      -4  
      +3  

      at Context.<anonymous> (calc.spec.js:30:29)  
```


Passando, temos a saída no terminal:  

```  
$ mocha calc.spec.js  


  calc  
    calc testing  
      ✓ sum of two number  
      ✓ sub of two number  
      ✓ mult of two number  
      ✓ div of two number  
      ✓ div of two number dont aceept div by zero  
      ✓ sqtr of a number  


  6 passing (20ms)  
```


Apenas um pequenina observação, quando fui fazer esse exercício (16/03/2016 às 08:30) fui visualizar os exemplos na aposta, então acabei notando que o Prof. Itacir colocou como exemplo a resolução do exercício, já com os módulos solicitados por ele e raiz quadrada. Apenas fiz os testes e colei os resultados aqui. Porém, os códigos acima são idênticos aos exemplos que ele deixou na apostila. [Link](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/tdd/chai)!


## Use o exemplo  de testes do *getter* e *setter* e crie um teste para o *method*, use o exemplo (lembre-se de usar callback é testar).  

[https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-method.js](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-method.js)


## Use o exemplo  de testes do *getter* e *setter*, o *static*, use o exemplo (lembre-se de usar callback é testar).  

[https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-static.js](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-static.js)


## No *controller* ainda faltam dois métodos para testar, o *update* e *delete*, crie-os  e faça os testes, no mesmo aquivo que contém os testes, *create* e *retrieve*.


## Defina TDD em 3 linhas, baseado no que foi dito até o momento.
