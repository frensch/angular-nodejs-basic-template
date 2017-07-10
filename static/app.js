(function(){

var app = angular.module('feed', []);

app.controller('feedItem', function ($http, $scope, $timeout) {

	$scope.items = [];

	(function updateList() {
		$http.get('/items').then(function (response) {
		console.log(response.data);
		$scope.items = response.data;

		$timeout(updateList, 1000);
	});

	})();

});

}) ();