'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;

const _schema = {
	pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
};

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('meus-pokemons', PokemonSchema);

//inserindo os 3 pokemons escolhidos com ObjectID
const data = {
	pokemons: ['56d841324d9d0e4b13764e97', '56d841324d9d0e4b13764e96', '56d841324d9d0e4b13764e95']
};

PokemonModel.create(data, (err, data) => {
	if (err) return console.log('Erro: ', err);
	console.log('Inserido(s): ', data);
});