'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
	name: {type: String, match: /^./i},
	description: {type: String, match: /^./i},
	type: {type: String, match: /^./i},
	attack: {type: Number, min: 1},
	height: {type: Number}
};

const PokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', PokemonSchema);

const query = {_id: "56d841324d9d0e4b13764e94"};
const mod = {$inc: {attack: 1}};

Model.findAndModify(query, mod, function (err, data) {
	if (err) return console.log('Erro: ', err);
	return console.log('Alterou: ', data);
});