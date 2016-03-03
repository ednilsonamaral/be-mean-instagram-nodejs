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
const PokemonModel = mongoose.model('pokemons', PokemonSchema);

//inserindo os 5 novos pokemons
const data = [
	{
		name: 'Educamon',
		description: 'O pokemon mais educadinho do universo',
		type: 'educador',
		attack: 76,
		height: 1.7
	},

	{
		name: 'NFLMon',
		description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',
		type: 'player',
		attack: 105,
		height: 2.3
	},

	{
		name: 'JiuJiteroMon',
		description: 'Faixa preta 3º grau',
		type: 'jiujitsu',
		attack: 153,
		height: 1.6
	},

	{
		name: 'BaianoMon',
		description: 'O pokemon mais preguiçoso do universo',
		type: 'preguiça',
		attack: 51,
		height: 1.7
	},

	{
		name: 'GoogleMon',
		description: 'O pokemon mais googlet do universo',
		type: 'google',
		attack: 99,
		height: 1.7
	},	
];

PokemonModel.create(data, (err, data) => {
	if (err) return console.log('Erro: ', err);
	console.log('Inserido(s): ', data);
});