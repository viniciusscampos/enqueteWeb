angular.module('meusServicos', ['ngResource'])
	.factory('recursoUsuario', function($resource) {

		return $resource('/v1/usuarios/:cpf', null, {
			'get' :{
				method: 'GET'
			}
		});
	})
	.factory("cadastroDeUsuarios", function(recursoUsuario, $q) {
		var service = {};
		service.cadastrar = function(usuario) {
			return $q(function(resolve, reject) {

				recursoUsuario.save(usuario, function() {
					resolve({
						mensagem: 'Usuário ' + usuario.nome + ' cadastrado com sucesso!',
						inclusao: true
					});
				}, function(erro) {
					reject({
						mensagem: 'Não foi possível incluir o usuário: ' + usuario.nome
					});
				});
				
			});
		};
		return service;
    });