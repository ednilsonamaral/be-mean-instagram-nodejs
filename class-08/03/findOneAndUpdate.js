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
//const query = {name: /nflmon/i};
//const mod = {type: 'professional'};
//const options = {};

//exemplo 2
//const query = {attack: {$lte: 50}};
//const mod = {attack: 999};
//const options = {multi: true};

//exemplo 3
const query = {$and: [{type: 'nerd'}, {attack: {$gte: 40}}]};
const mod = {attack: 51, description: 'Deu um upgrade, pode melhorar, parça!'};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
	if (err) return console.log('Erro: ', err);
	return console.log('Alterou: ', data);
});