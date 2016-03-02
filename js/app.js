var app= angular.module('myApp',[]);
app.controller('formCtrl', function($scope,$window){	
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
	};
});
app.controller('ExampleController', function($scope){	
	$scope.resposta = {
		valor: 'sim'
	};
	$scope.enviar = function(){
		//enviará o formulário de respostas
		console.log("Enviado com sucesso!");
	};		
});
