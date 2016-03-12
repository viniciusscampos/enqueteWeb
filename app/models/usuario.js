var mongoose = require('mongoose');

var schema = mongoose.Schema({
//nome,login,email,cpf e senha
	nome: {
		type:String,
		required: true
	},
	login: {
		type:String,
		required: true
	},
	email: {
		type:String,
		required: true
	},
	cpf: {
		type: Number,
		required: true
	},
	senha: {
		type:String,
		required: true
	},
	permissao: {
		type:String,
		required: true
	}
});


mongoose.model('Usuario', schema);

