'use strict';

require('./db/config');

const CRUD = require('./controller');

//inserindo novo documento
const hab1 = {
	title: 'Jiu Jitsu',
	since: 2005
};

const hab2 = {
	title: 'Muay Thai',
	since: 1999
};

const hab3 = {
	title: 'Boxe',
	since: 2001
};

const data = {
	name: {
		first: 'Anderson',
		last: 'Silva'
	},
	age: 42,
	skills: [hab1, hab2, hab3],
	weight_class: 'Middleweight'
};

CRUD.create(data);


//pesquisando um documento
const query = "56ddce078b09ec822118e4c7";

CRUD.retrieve(query);


//pesquisando através de um method
const query = {name: {first: 'Mauro', last: 'Filho'}, weight_class: /featherweight/i};

CRUD.retrieve_method(query);


//pesquisando através de uma static
const query = {name: {first: 'Anderson', last: 'Silva'}};

CRUD.retrieve_static(query);


//pesquisando através de middleware pre count
const query = {age: 29};

CRUD.retrieve_middleware(query);