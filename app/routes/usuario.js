module.exports = function(app) {
	
	var api = app.api.usuario,
	path = require('path');

	app.route('/v1/usuarios')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/usuarios/:id')
		.get(api.buscaPorId)
};