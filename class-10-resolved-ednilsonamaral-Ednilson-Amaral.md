# Node.js - Aula 10 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:**


## Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para URL/404.

```js
'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hey, YOW!!');
});

// page de not found
app.get('/not-found', function(req, res) {
    res.status(404).send('Sorry, page not found! =(');
});

// enviando not found para a página de não encontrado
app.get('/*', function(req, res) {
    res.redirect('/not-found');
})

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo onde seja passado o retorno, podendo ser *String* ou *Buffer*, caso seja *String* definir cabeçalho correto mesmo usando `res.send`.

```js
'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.set({'Content-Type': 'text/html'});
    res.send(new Buffer('Oi, bufferzinho! :)'));
});

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo para renderização de views, onde o mesmo recebe o caminho para a view e o tipo do template engine, para retornar a view corretamente.

```js
'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Be MEAN',
        message: 'Welcome to Be MEAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });
});

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo para entrega de arquivos, onde o mesmo recebe o caminho para o arquivo e o tipo do arquivo, para retornar o arquivo corretamente.

`modules/SendFiles.js`
```js
'use strict';

module.exports = function(req, res) {
    const options = {
        root: __dirname + '/_public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.params.name;
    const fileType = req.params.type;

    switch (fileType){
        case 'png':
            res.set({'Content-Type': 'image/png'});
            fileName = fileName +'.'+fileType;
            break;
        default:
            res.status(400).send('Arquivo não suportado!');
            break;
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
};
```


`app-sendFiles.js`
```js
'use strict';

const express = require('express');
const app = express();
const SendFiles = require('./modules/SendFiles');

app.get('/file/:name/:type', function(req, res, next) {
    return SendFiles(req, res);
});

app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
```


## Criar uma busca, dos Pokemons, com o Mongoose, que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:  

* html  
* json  

*ps: Não esquecer do link para `previous` e `first` quando necessários.*  

rota: /pokemons  
3 páginas
