const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('./fields/field-name');
const password = require('./fields/field-password');

function criaUsuario (){
	const novoUsuario = new Schema({
		name,
		password
	});

	novoUsuario.methods.vaiCriptografar = function (){
		const crypto = require('crypto');
		//fazendo a mágica acontecer
		const salt = crypto.randomBytes(128).toString('base64');
		const chave = crypto.pbkdf2Sync(this.password, 'salt', 100000, 256, 'sha256');

		return chave.toString('hex');
	};

	novoUsuario.pre('save', true, function (next, done) {
		console.log('Senha SEM criptografia: ', '${this.password}');
		//fazendo a mágica acontecer
		this.password = this.vaiCriptografar();
		console.log('\nSenha COM criptografia: ', '${this.password}');
		next();
	});
	
	return mongoose.model('SenhaModel', novoUsuario);
}


module.exports = exports = criaUsuario();