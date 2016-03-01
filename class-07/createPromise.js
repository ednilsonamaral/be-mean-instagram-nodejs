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

const personData = {
	nome: 'Ednilson Amaral',
	idade: 24,
	sexo: 'M',
	cidade: 'Itapeva',
	estado: 'SP'
}

const personSchema = new Schema(_schema);
const Person = mongoose.model('Person', personSchema);

//create
Person.create(personData).then(success, error);

function success(data) {
	console.log('Inseriu: ', data);
}

function error (error) {
	console.log('Erro: ', error);
}