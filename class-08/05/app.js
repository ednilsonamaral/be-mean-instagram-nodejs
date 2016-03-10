'use strict';

require('./db/config');

const CRUD = require('./controller');
const Model = require('./model');

const data = {
	name: {
		first: 'Ednilson',
		last: 'Amaral'
	},
	password: '123456987'
}

CRUD.create(data);