var app= angular.module('myApp',[]);
app.controller('appCtrl', function($scope,$window){	
	$scope.entrar = function(){
		//realizará o login pelo site
		$scope.user = angular.copy($scope.master);
		$window.location.href='usuario.html';		
	};	
	$scope.facebook = function(){
		//realizará o login pelo facebook e caso seja a primeira vez do usuário pedirá que ele adicione o cpf para completar o cadastro
		console.log("facebook");
	};
	$scope.registrar = function(){
		//realizará o cadastro
		console.log("cadastrado com sucesso")
	};
	$scope.resposta = {
		valor: 'sim'
	};
	$scope.enviar = function(){
		//enviará o formulário de respostas
		console.log("Enviado com sucesso!");
	};	
});