var app= angular.module('myApp',[]);
app.controller('appCtrl', function($scope,$window){
	$scope.users = [];
	$scope.newUser = {};	
	$scope.logingUser = {};
	$scope.entrar = function(){
		//realizará o login pelo site
		$scope.user = angular.copy($scope.master);
		$window.location.href='usuario.html';		
	};	
	$scope.registraUsuario = function(){
		//realizará o cadastro
		if($scope.newUser.nome && $scope.newUser.login && $scope.newUser.email && $scope.newUser.cpf && $scope.newUser.senha ){
			$scope.users.push({"nome": $scope.newUser.nome, "login": $scope.newUser.login, "email": $scope.newUser.email, "cpf": $scope.newUser.cpf, "senha": $scope.newUser.senha});
			$scope.isAddForm = false;			
		}
	};
	$scope.facebook = function(){
		//realizará o login pelo facebook e caso seja a primeira vez do usuário pedirá que ele adicione o cpf para completar o cadastro
		console.log("facebook");
	};
	$scope.resposta = {
		valor: 'sim'
	};
	$scope.enviar = function(){
		//enviará o formulário de respostas
		console.log("Enviado com sucesso!");
	};	
	$scope.logout = function (){
		console.log("logout");
	};
});