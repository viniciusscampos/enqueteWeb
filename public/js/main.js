angular.module('enqueteweb', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'appCtrl'
		});		

		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'appCtrl'
		});		

		$routeProvider.when('/info', {
			templateUrl: 'partials/info.html',
			controller: 'appCtrl'
		});	

		$routeProvider.when('/usuario', {
			templateUrl: 'partials/usuario.html',
			controller: 'appCtrl'
		});	

		$routeProvider.when('/gerenciarenquetedesativar', {
			templateUrl: 'partials/gerenciarEnqueteDesativar.html',
			controller: 'EnqueteController'
		});	

		$routeProvider.when('/atualizadados', {
			templateUrl: 'partials/atualizaDados.html',
			controller: 'appCtrl'
		});	

		$routeProvider.when('/criarenquete', {
			templateUrl: 'partials/criarEnquete.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/adm', {
			templateUrl: 'partials/adm.html',
			controller: 'appCtrl'
		});	


		$routeProvider.otherwise({redirectTo: '/'});

	});