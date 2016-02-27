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