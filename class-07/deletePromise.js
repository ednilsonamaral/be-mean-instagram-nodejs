'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bancoTeste');
const Schema = mongoose.Schema;

const _schema = {
	nome: {type: String, match: /^./i },  
  	idade: {type: Number, min: 1},
  	sexo: {type: String, enum: ['M', 'F']},
  	cidade: {type: String, maxlength: 10},
  	estado: {type: String, minlength: 2}
}

const personSchema = new Schema(_schema);
const Person = mongoose.model('Person', personSchema);

//remove
const personId = {"_id": "56d59b09d95812f013f70a68"};

let promise = Person.remove(personId).exec();
promise.then(success, error);

function success(data) {
	console.log('Removeu: ', data);
}

function error (error) {
	console.log('Erro: ', error);
}