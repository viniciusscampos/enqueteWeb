var app= angular.module('myApp',[]);
app.controller('formCtrl', function($scope){	
	$scope.entrar = function(){
		//realizará o login pelo site
		$scope.user = angular.copy($scope.master);
	};	
	$scope.facebook = function(){
		//realizará o login pelo facebook e caso seja a primeira vez do usuário pedirá que ele adicione o cpf para completar o cadastro
	};
	$scope.registrar = function(){
		//realizará o cadastro
	};
});