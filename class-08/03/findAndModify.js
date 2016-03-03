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

const query = {name: /nflmon/i};
const mod = {attack: 1818};
const options = {upsert: true};

Model.findAndModify(query, mod, options, function (err, data) {
	if (err) return console.log('Erro: ', err);
	return console.log('Alterou: ', data);
})