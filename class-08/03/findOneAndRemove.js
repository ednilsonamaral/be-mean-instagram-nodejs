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

const Model = mongoose.model('pokemons', PokemonSchema);

//exemplo 1
//const query = {attack: null};

//exemplo 2
//const query = {$and: [{type: 'google'}, {height: {$gte: 1.5}}]};

//exemplo 3
const query = {height: {$lte: 1.7}};

Model.findOneAndRemove(query, function (err, data) {
	if (err) return console.log('Erro: ', err);
	return console.log('Removeu: ', data);
});