const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const email = require('./fields/field-email');
const cpf = require('./fields/field-cpf');
const cnpj = require('./fields/field-cnpj');
const url = require('./fields/field-url');
const ip = require('./fields/field-ip');

const _schema = {
	email,
	cpf,
	cnpj,
	url,
	ip
};

module.exports = new Schema(_schema);