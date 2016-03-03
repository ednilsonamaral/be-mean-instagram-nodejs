'use strict';

require('./db/config');

const CRUD = require('./controller');

const data = {
	email: 'ednilsonamaral.ti@gmail.com',
	cpf: 12345678,
	cnpj: 123654,
	url: 'www.ednilsonamaral.com.br',
	ip: '192.168.0.1'
};

CRUD.create(data);