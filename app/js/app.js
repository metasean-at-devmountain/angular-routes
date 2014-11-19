var app = angular.module('angularRoutes', ['ngRoute']);

app.config(function($routeProvider) {
	// we do routing magic here

	$routeProvider
		.when('/', { // `when` looks at $location.path() , i.e. look at the url
			templateUrl: 'app/views/main.html',
			controller: 'MainCtrl',
			resolve: {  // `resolve` does stuff before loading the controller or page
				userName: function(){
					return prompt('What do people call you?');
				}
			}
		})
		.when('/other', {
			templateUrl: 'app/views/banana.html'
		})

});