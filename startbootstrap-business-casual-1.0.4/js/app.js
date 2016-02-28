var app= angular.module('myApp',[]);
app.controller('formCtrl', function($scope){	
	$scope.entrar = function(){
		$scope.user = angular.copy($scope.master);
	};	
});