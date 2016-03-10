angular.module('myEnquete',[]).controller('EnqueteController', function($scope){

	var count = 2;
	$scope.enquetes = [];
	$scope.novaEnquete = {};
	$scope.alternativas = ['a','b'];
	$scope.hiddenValue = true;

	$scope.logout = function (){
		console.log("logout");
	};

	$scope.cadastraEnquete = function () {		
			$scope.enquetes.push({"pergunta": $scope.novaEnquete.pergunta, "alternativas": $scope.alternativas, "duracao": $scope.novaEnquete.duracao, "imagem": $scope.novaEnquete.imagem, "ordem":$scope.novaEnquete.ordem});
		console.log($scope.enquetes);
	};

	$scope.adicionaAlternativa = function () {
		count ++;
		//$scope.alternativas.values.push({count:""});
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