const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('./fields/field-name');
const age = require('./fields/field-age');
const weight_class = require('./fields/field-weight_class');
const created_at = require('./fields/field-created_at');

const skill = new Schema({
	title: String,
	since: Number
});

const _schema = {
	name,
	age,
	weight_class,
	skills: [skill],
	created_at
};

module.exports = new Schema(_schema);