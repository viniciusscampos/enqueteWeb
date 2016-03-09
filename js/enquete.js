angular.module('myEnquete',[]).controller('EnqueteController', function($scope){

	var count = 2;
	$scope.enquetes = [];
	$scope.novaEnquete = {};
	$scope.alternativas = ['a','b'];

	$scope.logout = function (){
		console.log("logout");
	};

	$scope.cadastraEnquete = function () {		
		if($scope.novaEnquete.pergunta && $scope.novaEnquete.alternativas && $scope.novaEnquete.duracao){
			$scope.enquetes.push({"pergunta": $scope.novaEnquete.pergunta, "alternativas": $scope.alternativas, "duracao": $scope.novaEnquete.duracao, "imagem": $scope.novaEnquete.imagem});
			$scope.isAddForm = false;			
		}
		$scope.enquetes.push({"pergunta": $scope.novaEnquete.pergunta, "alternativas": $scope.novaEnquete.alternativas, "duracao": $scope.novaEnquete.duracao, "imagem": $scope.novaEnquete.imagem});
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

});