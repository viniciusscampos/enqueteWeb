angular.module('enqueteweb').controller('appCtrl', function($scope, $http) {
	//app
	$scope.users = [];
	$scope.newUser = {};	
	$scope.logingUser = {};
	//

	//cadastro
	$scope.novoEmail = {};
	$scope.novoNomeUsuario = {};
	$scope.novaSenhaUsuario = {};
	$scope.altEmail = false;
	$scope.altNome = false;
	$scope.altSenha = false;
	//

	//criar enquete
	var count = 2;
	$scope.enquetes = [];
	$scope.novaEnquete = {};
	$scope.alternativas = ['',''];
	//

	$scope.entrar = function(){
		//realizará o login pelo site
		$http.post('usuarios/novousuario',$scope.)		
		//$window.location.href='/usuario';		
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
	$scope.formEmail = function (){
		$scope.altEmail = true;
		$scope.altNome = false;
		$scope.altSenha = false;
	}
	$scope.formNome = function (){
		$scope.altEmail = false;
		$scope.altNome = true;
		$scope.altSenha = false;
	}
	$scope.formSenha = function (){
		$scope.altEmail = false;
		$scope.altNome = false;
		$scope.altSenha = true;
	}

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

	$scope.cadastraEnquete = function () {		
		$scope.enquetes.push({"titulo": $scope.novaEnquete.titulo,"pergunta": $scope.novaEnquete.pergunta, "alternativas": $scope.alternativas, "duracao": $scope.novaEnquete.duracao, "imagem": $scope.novaEnquete.imagem, "ordem":$scope.novaEnquete.ordem});		
	};

	$scope.adicionaAlternativa = function () {
		count ++;
		$scope.alternativas.push("");			
	};

	$scope.removeAlternativa = function () {
		if(count>2){		
			$scope.alternativas.pop();
			count --;	
		}
	};

	$scope.selected = function () {
		$scope.selected = false;
	};
});