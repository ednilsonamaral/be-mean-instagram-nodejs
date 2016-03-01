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

//update
const personUpdate = {nome: 'Ed'};
const personId = {"_id": "56d59ae24d6f8ae513f6ff1d"};

let promise = Person.update(personId, personUpdate).exec();
promise.then(success, error);

function success(data) {
	console.log('Encontrou: ', data);
}

function error (error) {
	console.log('Erro: ', error);
}