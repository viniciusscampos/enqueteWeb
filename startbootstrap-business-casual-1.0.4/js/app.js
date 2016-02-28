var app= angular.module('myApp',[]);
app.controller('formCtrl', function($scope){	
	$scope.entrar = login();
	$scope.login();
})

function login(){
	console.log("ok");
}