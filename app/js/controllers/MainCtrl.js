var app = angular.module('angularRoutes');

app.controller('MainCtrl', function($scope, userName) {
	$scope.test = 'Yo yo ';
	$scope.userName = userName;
});