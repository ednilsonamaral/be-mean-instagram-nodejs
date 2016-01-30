require('./config.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aluno = {
	//o match aceita regex, no caso abaixo, o nome pode ser case insensitive e começar com qualquer caractere
	nome: {type: String, match: /^./i },

	//max serve para setar o campo para que seja inserido um número máximo, no caso no máximo até 30, se não dá erro
	idade: {type: Number, max: 30},

	//o enum irá setar o sexo do cara, Masculino ou Feminino
	sexo: {type: String, enum: ['M', 'F']},
	
	//a ideia desse campo é que o aluno tenho no mínimo 5 aulas, caso contrário dá erro
	aulas: {type: Number, min: 5},

	//o nome da cidade deve conter no máximo 10 caracteres
	cidade: {type: String, maxlength: 10},

	//o nome do estado deve conter no mínimo 2 caracteres
	estado: {type: String, minlength: 2}
}

const alunoSchema = new Schema(aluno);

const AlunoModel = mongoose.model('alunos', alunoSchema);

const data = (
	{
		nome: 'Ednilson',
		idade: 24,
		sexo: 'M',
		aulas: 16,
		cidade: 'Itapeva',
		estado: 'SP'
	}
);

const Ednilson = new AlunoModel(data);

Ednilson.save(function (err, data) {
	if (err) return console.log('Erro: ', err);
	console.log('Inserido o aluno: ', data);
});