angular.module('enqueteweb', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/adm', {
			templateUrl: 'partials/adm.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/atualizadados', {
			templateUrl: 'partials/atualizadados.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/info', {
			templateUrl: 'partials/info.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/usuario', {
			templateUrl: 'partials/usuario.html',
			controller: 'appCtrl'
		});

		$routeProvider.when('/criarenquete', {
			templateUrl: 'partials/criarenquete.html',
			controller: 'appCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});