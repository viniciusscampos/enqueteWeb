angular.module('myCadastro',[]).controller('AlterarCadastroController', function($scope){

$scope.novoEmail = {};
$scope.novoNomeUsuario = {};
$scope.novaSenhaUsuario = {};
$scope.logout = function (){
	console.log("logout");
};

$scope.alteraEmailUsuario = function (){
	$scope.novoEmail={"email": $scope.novoEmail.email, "novoEmail": $scope.novoEmail.confEmail};
	console.log($scope.novoEmail);
	if($scope.novoEmail.email == $scope.novoEmail.confEmail){
		alert("e-mail alterado");
	}
	else{
		alert("e-mails distintos");
	}	
};
$scope.alteraNomeUsuario = function (){
	$scope.novoNomeUsuario = {"nome": $scope.novoNomeUsuario.nome};	
	alert("nome alterado");
	$scope.novoNomeUsuario.nome = "";		
};
$scope.alteraSenhaUsuario = function (){
	$scope.novaSenhaUsuario = {"senhaAntiga": $scope.novaSenhaUsuario.senhaAntiga,"novaSenha":$scope.novaSenhaUsuario.novaSenha,"confirmaNovaSenha":$scope.novaSenhaUsuario.confirmaNovaSenha};	
	//valida a senha antiga e se as novas senhas informadas conferem
	console.log($scope.novaSenhaUsuario);
	alert("senha alterada");
	$scope.novaSenhaUsuario.senhaAntiga = "";		
	$scope.novaSenhaUsuario.novaSenha = "";
	$scope.novaSenhaUsuario.confirmaNovaSenha = "";		
};

});