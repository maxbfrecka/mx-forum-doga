angular.module('views', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
	  $routeProvider.when('/', {
	    templateUrl: 'views/main.html'
	  })
	  .when('/:ID', {
	  	templateUrl: 'views/thread.html',
	  	controller: 'threadController'
	  })
	  .when('/:ID/canvastest', {
	  	templateUrl: 'views/canvastest.html',
	  	controller: 'canvasController'
	  })
	  .when('/error', {
	    template : '<p>Error - Page Not Found</p>'
	  })
	  .otherwise('/error');
  }])
  .run(['$rootScope', '$location', function($rootScope, $location) {
	  $rootScope.$on('$routeChangeError', function() {
	    $location.path('/error');
	  });
}])

.controller('threadController', ['$scope', '$routeParams', 'testData', function($scope, $routeParams, testData){
	$scope.threads = testData.threads;

	console.log("route is" + $scope.threads[$routeParams.ID])
}])

.controller('canvasController', ['$scope', 'testData', 'threadData', function($scope, testData, threadData){
	$scope.threads = testData.threads;
	$scope.threadData = threadData.threads
}])