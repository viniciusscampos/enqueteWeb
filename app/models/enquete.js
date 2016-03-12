var mongoose = require('mongoose');

var schema = mongoose.Schema({
//nome,login,email,cpf e senha
	titulo: {
		type:String,
		required: true
	},
	pergunta: {
		type:String,
		required: true
	},
	alternativas: {
		type:String,
		required: true
	},
	duracao: {
		type: Number,
		required: true
	},
	imagem: {
		type:String,
		required: true
	},
	ordem: {
		type:Boolean,
		required: true
	}
});


mongoose.model('Enquete', schema);

